// Lightweight procedural audio engine — all SFX synthesized, no external files.
export class Audio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
    this.noise = null;
    this.lastStep = 0;
    this._wind = null;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.55;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.knee.value = 20;
    comp.ratio.value = 6;
    comp.attack.value = 0.003;
    comp.release.value = 0.25;
    this.master.connect(comp);
    comp.connect(this.ctx.destination);

    // reusable noise buffer
    const len = Math.floor(this.ctx.sampleRate * 1.2);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noise = buf;
    this.startWind();
  }

  get t() { return this.ctx.currentTime; }

  startWind() {
    if (!this.ctx) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 320;
    const g = this.ctx.createGain();
    g.gain.value = 0.028;
    src.connect(lp); lp.connect(g); g.connect(this.master);
    src.start();
    this._wind = { src, g, lp };
  }

  noiseBurst(dur, gain, filterType, f0, f1, pan = 0, q = 1) {
    if (!this.ctx || this.muted) return;
    const t = this.t;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    src.playbackRate.value = 1 + Math.random() * 0.12;
    const f = this.ctx.createBiquadFilter();
    f.type = filterType;
    f.frequency.setValueAtTime(f0, t);
    f.frequency.exponentialRampToValueAtTime(Math.max(40, f1), t + dur);
    f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const p = this.ctx.createStereoPanner();
    p.pan.value = Math.max(-1, Math.min(1, pan));
    src.connect(f); f.connect(g); g.connect(p); p.connect(this.master);
    src.start(t); src.stop(t + dur + 0.02);
  }

  tone(freq, dur, gain, type = 'sine', slideTo = null, pan = 0) {
    if (!this.ctx || this.muted) return;
    const t = this.t;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const p = this.ctx.createStereoPanner();
    p.pan.value = Math.max(-1, Math.min(1, pan));
    o.connect(g); g.connect(p); p.connect(this.master);
    o.start(t); o.stop(t + dur + 0.02);
  }

  shot(kind = 'ar', pan = 0) {
    if (!this.ctx || this.muted) return;
    const panv = this._pan(pan);
    if (kind === 'sniper') {
      this.noiseBurst(0.5, 0.75, 'lowpass', 5200, 220, panv, 0.8);
      this.tone(128, 0.35, 0.5, 'triangle', 38, panv);
      this.tone(62, 0.5, 0.32, 'sine', 30, panv);
      this.noiseBurst(0.13, 0.28, 'highpass', 2400, 900, panv);
    } else if (kind === 'smg') {
      this.noiseBurst(0.12, 0.4, 'bandpass', 2400, 500, panv, 0.8);
      this.tone(190, 0.07, 0.3, 'square', 70, panv);
      this.noiseBurst(0.05, 0.16, 'highpass', 3200, 1400, panv);
    } else if (kind === 'pistol') {
      this.noiseBurst(0.15, 0.42, 'bandpass', 1900, 420, panv, 0.9);
      this.tone(210, 0.09, 0.3, 'square', 80, panv);
    } else {
      this.noiseBurst(0.18, 0.46, 'lowpass', 3400, 380, panv, 0.9);
      this.tone(165, 0.1, 0.34, 'square', 62, panv);
      this.noiseBurst(0.06, 0.2, 'highpass', 3600, 1500, panv);
      this.tone(330, 0.02, 0.1, 'sawtooth', 180, panv);
    }
  }

  hit(head = false) {
    if (head) { this.tone(1180, 0.08, 0.22, 'square', 900); this.tone(1760, 0.05, 0.1, 'sine', 1760); }
    else this.tone(720, 0.035, 0.2, 'square', 540);
  }

  kill() {
    this.tone(520, 0.06, 0.18, 'square', 620);
    setTimeout(() => this.tone(880, 0.09, 0.16, 'square', 1050), 55);
  }

  dry() { this.tone(1300, 0.02, 0.08, 'square', 700); this.noiseBurst(0.02, 0.05, 'highpass', 3000, 2000); }

  reload(fast = false) {
    const d = fast ? 0.6 : 1;
    setTimeout(() => this.noiseBurst(0.035, 0.1, 'bandpass', 2200, 1200, 0, 3), 80 * d);
    setTimeout(() => this.tone(320, 0.03, 0.07, 'square', 220), 240 * d);
    setTimeout(() => this.noiseBurst(0.05, 0.12, 'bandpass', 1500, 700, 0, 2), 480 * d);
    setTimeout(() => this.tone(420, 0.035, 0.08, 'square', 300), 560 * d);
  }

  equip() { this.noiseBurst(0.03, 0.08, 'bandpass', 2000, 900); setTimeout(() => this.tone(300, 0.03, 0.05, 'square', 200), 60); }

  explosion(pan = 0) {
    const p = this._pan(pan);
    this.noiseBurst(0.9, 0.9, 'lowpass', 1400, 60, p, 0.7);
    this.tone(70, 0.7, 0.55, 'sine', 24, p);
    this.tone(120, 0.35, 0.35, 'triangle', 30, p);
    this.noiseBurst(0.25, 0.35, 'highpass', 2200, 300, p);
  }

  beep(freq = 900, dur = 0.07, gain = 0.1, pan = 0) {
    this.tone(freq, dur, gain, 'sine', freq * 0.98, pan);
  }

  uav() {
    for (let i = 0; i < 3; i++) setTimeout(() => this.beep(760 + i * 140, 0.09, 0.12), i * 110);
  }

  streakReady() { this.beep(620, 0.08, 0.1); setTimeout(() => this.beep(930, 0.12, 0.13), 100); }

  streakLaunch() {
    this.noiseBurst(0.7, 0.3, 'bandpass', 400, 2600, 0, 1.5);
    this.tone(120, 0.5, 0.2, 'sawtooth', 420);
  }

  hurt() { this.tone(90, 0.15, 0.25, 'sine', 55); this.noiseBurst(0.1, 0.2, 'lowpass', 900, 200); }

  death() { this.tone(180, 0.9, 0.3, 'sawtooth', 48); this.noiseBurst(0.7, 0.35, 'lowpass', 900, 90); }

  step(pan = 0) {
    if (!this.ctx) return;
    const now = this.t;
    if (now - this.lastStep < 0.16) return;
    this.lastStep = now;
    this.noiseBurst(0.06, 0.05, 'bandpass', 480, 180, this._pan(pan), 1.4);
  }

  whiz(pan = 0) { this.noiseBurst(0.09, 0.12, 'bandpass', 2600, 700, this._pan(pan), 4); }

  click() { this.beep(520, 0.03, 0.06); }

  _pan(p) { return Math.max(-1, Math.min(1, p || 0)); }
}

export const audio = new Audio();

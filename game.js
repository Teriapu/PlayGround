const chapters = [
  { id: 'foundations', name: 'Foundations', short: 'FOUNDATIONS', subtitle: 'The language of life', icon: '✳', topic: 'THE BUILDING BLOCKS', questions: [
    { q: 'What kind of bond links amino acids together in a protein?', answers: [
      ['A peptide bond', true, 'A peptide bond forms between the amino group of one amino acid and the carboxyl group of another, joining them into a chain. Think of it as the sturdy link in a molecular necklace.'],
      ['A hydrogen bond', false, 'Hydrogen bonds help stabilize protein shapes, but they do not join amino acids into the chain itself. The chain is held together by peptide bonds.'],
      ['An ionic bond', false, 'Ionic attractions can help a protein fold, but they are not the repeating links in its backbone. Amino acids are connected by peptide bonds.'],
      ['A phosphodiester bond', false, 'Phosphodiester bonds connect nucleotides in DNA and RNA. Amino acids in proteins are joined by peptide bonds.']] },
    { q: 'Which part of an amino acid varies from one amino acid to another?', answers: [
      ['The R group (side chain)', true, 'The R group is the variable side chain. Its chemistry—size, charge, polarity—gives each amino acid its personality and helps determine how proteins fold.'],
      ['The amino group', false, 'The amino group is shared by the standard amino acids. It is the side chain, or R group, that changes and makes each one distinct.'],
      ['The alpha carbon', false, 'The alpha carbon is the central carbon shared by standard amino acids. The attached R group is the part that varies.'],
      ['The carboxyl group', false, 'The carboxyl group is common to amino acids. Look to the R group for the feature that differs from one amino acid to another.']] },
    { q: 'A molecule with many polar bonds is most likely to dissolve in…', answers: [
      ['Water', true, 'Polar molecules interact favorably with water, which is also polar. “Like dissolves like”: water can surround and stabilize polar or charged solutes.'],
      ['Oil', false, 'Oil is mostly nonpolar, so it tends to mix with other nonpolar substances rather than polar molecules. Water is the better match for a polar solute.'],
      ['A fatty acid tail', false, 'Fatty acid tails are hydrophobic and nonpolar. A polar molecule is more at home in water than among these tails.'],
      ['A vacuum', false, 'A vacuum contains no solvent to dissolve anything. Polar molecules are generally soluble in a polar solvent such as water.']] },
    { q: 'What does a buffer do when a small amount of acid is added?', answers: [
      ['It resists a large change in pH', true, 'A buffer uses a weak acid and its conjugate base to absorb added H⁺ or OH⁻. It softens pH swings rather than preventing every change.'],
      ['It makes the solution instantly neutral', false, 'Buffers do not automatically force pH to 7. They resist changes, keeping pH in a useful range.'],
      ['It releases only hydroxide ions', false, 'A buffer is a paired system that can take up or donate protons depending on what is added. It does not simply release hydroxide.'],
      ['It permanently removes all acid', false, 'A buffer can bind some of the added H⁺, but its capacity is limited. Enough acid will overwhelm it.']] },
    { q: 'Which element is found in every organic molecule?', answers: [
      ['Carbon', true, 'Organic chemistry centers on carbon. Its four covalent bonds let it build chains, rings, and the diverse scaffolds used by living things.'],
      ['Iron', false, 'Iron is essential in some proteins, but it is not present in every organic molecule. Carbon is the defining element of organic chemistry.'],
      ['Sodium', false, 'Sodium is an important ion in cells, but it is not universal in organic molecules. Carbon is the common backbone element.'],
      ['Phosphorus', false, 'Phosphorus appears in molecules such as ATP and nucleic acids, but many organic molecules contain none. Carbon is the universal feature.']] }
  ]},
  { id: 'water', name: 'Water & pH', short: 'WATER & pH', subtitle: 'The chemistry of a cell’s ocean', icon: '◉', topic: 'LIFE IN SOLUTION', questions: [
    { q: 'Why do water molecules stick to one another?', answers: [
      ['Hydrogen bonds between molecules', true, 'Water is polar: oxygen pulls electrons more strongly than hydrogen. Neighboring molecules attract through hydrogen bonds, giving water its cohesion.'],
      ['Peptide bonds between molecules', false, 'Peptide bonds link amino acids in proteins. Water molecules attract each other mainly through hydrogen bonds.'],
      ['They share electrons permanently', false, 'Water’s O–H bonds are polar covalent, but neighboring water molecules do not share electrons with each other. They form hydrogen bonds.'],
      ['Water molecules are nonpolar', false, 'Water is decidedly polar. Its bent shape and unequal charge distribution allow hydrogen bonds between molecules.']] },
    { q: 'A solution at pH 3 is how many times more acidic than one at pH 5?', answers: [
      ['100 times', true, 'The pH scale is logarithmic. A two-unit drop means 10², or 100 times, more hydrogen ion concentration.'],
      ['2 times', false, 'Each pH unit is a tenfold change, not a onefold step. Two pH units mean 10 × 10 = 100 times.'],
      ['10 times', false, 'A one-unit difference is tenfold. From pH 5 to pH 3 is two units, so the difference is 100-fold.'],
      ['1,000 times', false, 'A three-unit difference would be 1,000-fold. Here the difference is two units: 100-fold.']] },
    { q: 'Which water property helps sweat cool your skin as it evaporates?', answers: [
      ['High heat of vaporization', true, 'Evaporating water takes substantial energy to break intermolecular attractions. It pulls that heat from your skin, cooling it.'],
      ['Low surface tension', false, 'Surface tension explains the “skin” at water’s surface, not the cooling effect of evaporation. Cooling comes from water’s high heat of vaporization.'],
      ['Its ability to freeze at room temperature', false, 'Water freezes below its normal freezing point, not at room temperature. Evaporation cools you because it requires significant heat energy.'],
      ['Its nonpolar nature', false, 'Water is polar. Its strong attractions take energy to overcome during evaporation, which is why sweat can cool you.']] },
    { q: 'In water, a hydrophobic molecule tends to…', answers: [
      ['Cluster away from water', true, 'Hydrophobic molecules are usually nonpolar. They do not make favorable interactions with water, so they gather together and minimize contact with it.'],
      ['Form hydrogen bonds with water', false, 'Hydrophobic molecules generally lack the charged or polar groups needed for favorable hydrogen bonds with water.'],
      ['Dissolve better than salt', false, 'Salt dissolves readily because water stabilizes its ions. Hydrophobic molecules generally do not dissolve well in water.'],
      ['Split water into oxygen and hydrogen', false, 'Hydrophobicity describes poor mixing with water, not a reaction that breaks water apart. Hydrophobic molecules tend to cluster together.']] },
    { q: 'What is the conjugate base of carbonic acid (H₂CO₃) after it loses one proton?', answers: [
      ['Bicarbonate (HCO₃⁻)', true, 'Losing one H⁺ from H₂CO₃ leaves HCO₃⁻, bicarbonate. This pair is part of an important blood-buffer system.'],
      ['Carbonate (CO₃²⁻)', false, 'Carbonate forms after carbonic acid loses two protons. Losing one proton gives bicarbonate, HCO₃⁻.'],
      ['Carbon dioxide (CO₂)', false, 'CO₂ can react with water to form carbonic acid, but it is not the conjugate base formed by losing one proton.'],
      ['Hydroxide (OH⁻)', false, 'Hydroxide is a separate base. When carbonic acid loses one proton, its conjugate base is bicarbonate.']] }
  ]},
  { id: 'proteins', name: 'Proteins', short: 'PROTEINS', subtitle: 'Shape, function & folding', icon: '⌘', topic: 'PROTEIN SHAPES', questions: [
    { q: 'What most directly determines a protein’s three-dimensional shape?', answers: [
      ['Its amino acid sequence', true, 'The sequence of side chains determines possible interactions—hydrophobic packing, ionic attractions, hydrogen bonds, and more—that guide folding.'],
      ['The number of cells nearby', false, 'Cell context can influence protein behavior, but the amino acid sequence is the core instruction set for its structure.'],
      ['The order of sugars in DNA', false, 'DNA has bases, not sugars that encode protein shape directly. The gene’s nucleotide sequence specifies the protein’s amino acid sequence.'],
      ['The protein’s color', false, 'Most proteins are not meaningfully described by visible color. Their shape is primarily determined by their amino acid sequence and environment.']] },
    { q: 'An enzyme speeds up a reaction by…', answers: [
      ['Lowering the activation energy', true, 'Enzymes stabilize the transition state and provide a favorable route, lowering the activation energy. They do not change the reaction’s overall energy difference.'],
      ['Making the products more energetic', false, 'An enzyme changes the rate by lowering the activation barrier; it does not raise product energy or alter the reaction’s overall energy balance.'],
      ['Being permanently consumed', false, 'Enzymes participate in reactions but are regenerated rather than permanently consumed. They can catalyze many cycles.'],
      ['Changing the reaction’s equilibrium', false, 'Enzymes help a system reach equilibrium faster; they do not change the equilibrium position itself.']] },
    { q: 'What happens to an enzyme’s active site when it denatures?', answers: [
      ['Its shape changes and it may stop binding its substrate', true, 'Denaturation disrupts the structure that maintains the active site’s shape. The substrate may no longer fit or be positioned for reaction.'],
      ['It becomes a DNA-binding site', false, 'Denaturation disrupts protein structure; it does not transform an active site into a new type of site.'],
      ['The enzyme turns into a lipid', false, 'A denatured protein remains protein, but its structure is disrupted. It does not change molecular class.'],
      ['It permanently gains a second active site', false, 'Denaturation generally disrupts the enzyme’s folded structure and function. It does not create additional working active sites.']] },
    { q: 'Which level of protein structure describes an alpha helix?', answers: [
      ['Secondary structure', true, 'Alpha helices and beta sheets are secondary structures, stabilized largely by hydrogen bonds between backbone atoms.'],
      ['Primary structure', false, 'Primary structure is the amino acid sequence. An alpha helix is a local folded motif: secondary structure.'],
      ['Tertiary structure', false, 'Tertiary structure is the overall 3D shape of one polypeptide. An alpha helix is a secondary structure within it.'],
      ['Quaternary structure', false, 'Quaternary structure describes how multiple polypeptide subunits assemble. An alpha helix is a secondary structure.']] },
    { q: 'Why can a competitive inhibitor slow an enzyme?', answers: [
      ['It competes with the substrate for the active site', true, 'A competitive inhibitor occupies the active site, making it harder for substrate to bind. More substrate can often outcompete it.'],
      ['It destroys every enzyme in the cell', false, 'Competitive inhibition is reversible binding in the classic model, not wholesale enzyme destruction. The inhibitor competes for the active site.'],
      ['It increases the product concentration', false, 'Competitive inhibitors reduce substrate access to the active site. Product buildup is not the defining mechanism.'],
      ['It permanently changes the DNA sequence', false, 'Inhibitors act on enzyme molecules, not by rewriting DNA. A competitive inhibitor competes at the active site.']] }
  ]},
  { id: 'metabolism', name: 'Metabolism', short: 'METABOLISM', subtitle: 'The cell’s energy economy', icon: '↯', topic: 'ENERGY & REACTIONS', questions: [
    { q: 'What is ATP’s most familiar role in a cell?', answers: [
      ['A portable energy currency', true, 'ATP couples energy-releasing reactions to energy-requiring work. Breaking off its terminal phosphate can help power transport, movement, and synthesis.'],
      ['A long-term energy storage molecule', false, 'ATP is turned over rapidly and is not the cell’s long-term fuel reserve. Fat and glycogen are better suited for longer storage.'],
      ['A permanent structural component of membranes', false, 'ATP is a nucleotide used in energy transfer and signaling, not a permanent membrane building block.'],
      ['A protein that copies DNA', false, 'ATP is a small nucleotide, not a protein. DNA replication uses many proteins and often consumes ATP.']] },
    { q: 'When ATP loses its terminal phosphate, it becomes…', answers: [
      ['ADP plus inorganic phosphate', true, 'Hydrolysis of ATP commonly produces ADP and inorganic phosphate (Pi), releasing free energy that can be coupled to cellular work.'],
      ['AMP plus glucose', false, 'ATP hydrolysis does not produce glucose. Losing one phosphate commonly yields ADP and inorganic phosphate.'],
      ['NADH and oxygen', false, 'NADH and oxygen participate in other metabolic processes. ATP hydrolysis yields ADP and inorganic phosphate.'],
      ['Two amino acids', false, 'Amino acids are protein building blocks. ATP is a nucleotide that hydrolyzes to ADP and phosphate.']] },
    { q: 'Which pathway breaks glucose down to pyruvate in the cytosol?', answers: [
      ['Glycolysis', true, 'Glycolysis takes place in the cytosol and converts glucose into pyruvate, producing a net gain of ATP and NADH.'],
      ['The citric acid cycle', false, 'The citric acid cycle oxidizes acetyl-CoA, mostly in the mitochondrial matrix in eukaryotes. Glycolysis breaks glucose into pyruvate in the cytosol.'],
      ['Oxidative phosphorylation', false, 'Oxidative phosphorylation uses the electron transport chain and ATP synthase at the inner mitochondrial membrane. Glycolysis happens in the cytosol.'],
      ['Beta oxidation', false, 'Beta oxidation breaks fatty acids into acetyl-CoA units. Glycolysis is the pathway that breaks glucose into pyruvate.']] },
    { q: 'In an oxidation-reduction reaction, oxidation means…', answers: [
      ['Loss of electrons', true, 'Oxidation is loss of electrons; reduction is gain. A mnemonic: OIL RIG—Oxidation Is Loss, Reduction Is Gain.'],
      ['Gain of electrons', false, 'Gain of electrons is reduction. Oxidation is loss of electrons (OIL RIG).'],
      ['Gain of a proton only', false, 'Proton movement can accompany redox chemistry, but oxidation is specifically loss of electrons.'],
      ['Loss of oxygen atoms only', false, 'Despite the name’s history, oxidation is defined by electron loss, not simply losing oxygen atoms.']] },
    { q: 'What is the main job of NAD⁺ in metabolism?', answers: [
      ['Accept electrons to become NADH', true, 'NAD⁺ is an electron carrier. It accepts electrons (often with a proton) in catabolic reactions and becomes NADH, which can later deliver them.'],
      ['Break peptide bonds in proteins', false, 'NAD⁺ carries electrons; it is not a protease and does not break peptide bonds.'],
      ['Store genetic information', false, 'DNA and RNA store genetic information. NAD⁺ is a coenzyme involved in electron transfer.'],
      ['Build the cell membrane’s fatty acid tails', false, 'Membrane lipids are assembled through lipid metabolism. NAD⁺ mainly carries electrons between reactions.']] }
  ]},
  { id: 'membranes', name: 'Membranes', short: 'MEMBRANES', subtitle: 'Boundaries that do more', icon: '▤', topic: 'THE CELL BOUNDARY', questions: [
    { q: 'Why do phospholipids naturally form a bilayer in water?', answers: [
      ['Their heads like water; their tails avoid it', true, 'Phospholipids are amphipathic: hydrophilic heads face the watery surroundings while hydrophobic tails tuck inward, forming a bilayer.'],
      ['Both ends repel water equally', false, 'The two ends behave differently. Polar heads interact with water; nonpolar tails avoid it. That contrast drives bilayer formation.'],
      ['They are held together by peptide bonds', false, 'Peptide bonds connect amino acids. Membrane bilayers form largely through hydrophobic interactions among phospholipid tails.'],
      ['Water converts them into proteins', false, 'Phospholipids remain lipids in water. Their amphipathic shape makes them self-assemble into bilayers.']] },
    { q: 'Which molecule crosses a plain lipid bilayer most easily?', answers: [
      ['A small nonpolar molecule like oxygen', true, 'Small nonpolar molecules dissolve in the membrane’s hydrophobic interior and diffuse across relatively easily.'],
      ['A sodium ion (Na⁺)', false, 'Charged ions are unfavorable in the membrane’s nonpolar core and usually need channels or transporters.'],
      ['A large glucose molecule', false, 'Glucose is relatively large and polar, so it generally uses a transport protein to cross the membrane.'],
      ['A short stretch of DNA', false, 'DNA is large and highly charged, so it cannot diffuse through the hydrophobic membrane core.']] },
    { q: 'Moving a substance against its concentration gradient usually requires…', answers: [
      ['Energy and a transport protein', true, 'Moving uphill—from lower to higher concentration—requires energy input and typically a pump or coupled transporter.'],
      ['No energy at all', false, 'Movement down a gradient can be passive. Going against a gradient requires an energy source, directly or indirectly.'],
      ['Only a wider membrane', false, 'A wider membrane does not provide the energy needed to move a substance uphill. Transport proteins and energy are typically needed.'],
      ['The molecule to become nonpolar', false, 'Polarity affects membrane permeability, but it does not remove the energetic cost of moving against a concentration gradient.']] },
    { q: 'Osmosis is the net movement of…', answers: [
      ['Water across a selectively permeable membrane', true, 'Osmosis is water movement across a selectively permeable membrane toward the side with higher effective solute concentration.'],
      ['Proteins from high to low pH', false, 'Osmosis specifically describes water movement, driven by differences in effective solute concentration.'],
      ['ATP through a protein channel', false, 'ATP transport may occur in cells, but osmosis refers to water moving across a selectively permeable membrane.'],
      ['Any solute through any barrier', false, 'Osmosis is not the movement of any solute; it specifically concerns water and a selectively permeable barrier.']] },
    { q: 'What is the fluid mosaic model describing?', answers: [
      ['A flexible membrane with proteins moving among lipids', true, 'The membrane is a dynamic lipid bilayer with proteins embedded in or associated with it—like a fluid mosaic rather than a rigid wall.'],
      ['A solid wall made only of proteins', false, 'Cell membranes contain a lipid bilayer plus many proteins, and their components can move laterally. They are not rigid protein walls.'],
      ['A diagram of the cytoskeleton only', false, 'The fluid mosaic model describes the cell membrane’s lipids and proteins, not just the cytoskeleton.'],
      ['A membrane that never changes shape', false, '“Fluid” highlights the membrane’s dynamic, flexible nature. Lipids and many proteins move laterally within it.']] }
  ]},
  { id: 'genetics', name: 'Molecular Biology', short: 'MOLECULAR BIOLOGY', subtitle: 'How cells read the code', icon: '⌬', topic: 'THE MOLECULAR MESSAGE', questions: [
    { q: 'Which molecule carries the genetic instructions used to build proteins?', answers: [
      ['DNA', true, 'DNA stores the long-term genetic instructions. Cells transcribe genes into RNA, and messenger RNA helps guide protein synthesis.'],
      ['ATP', false, 'ATP supplies energy and building blocks in many processes, but DNA stores the genetic instructions.'],
      ['A phospholipid', false, 'Phospholipids form membranes. DNA is the molecule that stores genetic information.'],
      ['Glycogen', false, 'Glycogen stores glucose for energy. DNA carries the genetic instructions used to build proteins.']] },
    { q: 'Transcription makes…', answers: [
      ['RNA from a DNA template', true, 'During transcription, RNA polymerase reads a DNA template strand and builds a complementary RNA molecule.'],
      ['DNA from a protein template', false, 'Transcription copies information from DNA into RNA. Proteins are made later by translation.'],
      ['Protein directly from DNA', false, 'Transcription produces RNA, not protein. Ribosomes translate messenger RNA into a polypeptide.'],
      ['Glucose from RNA', false, 'Glucose metabolism is distinct from gene expression. Transcription makes RNA using DNA as a template.']] },
    { q: 'Where does translation happen?', answers: [
      ['At ribosomes', true, 'Ribosomes read mRNA codons and link amino acids into a polypeptide. They can be free in the cytosol or attached to rough ER.'],
      ['Inside DNA’s double helix', false, 'DNA is transcribed to RNA; translation happens at ribosomes, which read the RNA message.'],
      ['Only in the nucleus', false, 'In eukaryotes, transcription occurs in the nucleus, but translation is carried out by ribosomes in the cytoplasm or on rough ER.'],
      ['Inside the cell membrane’s lipid core', false, 'Ribosomes—not the membrane’s hydrophobic core—are the site of translation.']] },
    { q: 'What does a codon specify?', answers: [
      ['An amino acid or a stop signal', true, 'A three-nucleotide mRNA codon corresponds to an amino acid or signals translation to stop.'],
      ['A whole chromosome', false, 'A codon is a small three-nucleotide unit in RNA, not a chromosome. It specifies an amino acid or stop.'],
      ['A membrane phospholipid', false, 'Codons are interpreted during protein synthesis. They specify amino acids or stop signals, not lipids.'],
      ['One DNA replication origin', false, 'Replication origins are DNA regions where copying begins. Codons are triplets read during translation.']] },
    { q: 'Why does RNA use uracil instead of thymine?', answers: [
      ['Uracil pairs with adenine in RNA', true, 'RNA uses uracil as the base that pairs with adenine. DNA instead uses thymine, which is similar but has a methyl group.'],
      ['Uracil is an amino acid', false, 'Uracil is a nitrogenous base, not an amino acid. It pairs with adenine in RNA.'],
      ['RNA has no nitrogenous bases', false, 'RNA contains nitrogenous bases A, U, C, and G. Uracil is used in place of thymine.'],
      ['Thymine cannot pair with adenine', false, 'Thymine does pair with adenine in DNA. RNA uses uracil instead, which also pairs with adenine.']] }
  ]}
];

const QUESTIONS_PER_QUIZ = 5;
chapters.forEach(item => {
  const supplemental = (window.bankA?.[item.id] || []).map(({ q, answers }) => ({ q, answers }));
  item.questions = [...item.questions, ...supplemental].slice(0, 40);
});

const $ = (selector) => document.querySelector(selector);
const screens = { welcome: $('#welcome-screen'), chapters: $('#chapter-screen'), game: $('#game-screen'), complete: $('#complete-screen') };
const modal = $('#feedback-modal');
let chapter = null;
let questionIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let hasAnswered = false;
let reviewingQuestion = false;
let soundOn = false;
let audioContext;
let currentOptions = [];
let currentQuestions = [];

function showScreen(name) {
  Object.entries(screens).forEach(([key, element]) => element.classList.toggle('hidden', key !== name));
  modal.classList.add('hidden');
}
function playTone(correct) {
  if (!soundOn) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = correct ? 660 : 245;
    gain.gain.setValueAtTime(.055, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + .17);
    oscillator.connect(gain); gain.connect(audioContext.destination);
    oscillator.start(); oscillator.stop(audioContext.currentTime + .18);
  } catch (_) { /* Audio is an optional flourish. */ }
}
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function renderQuestion() {
  const question = currentQuestions[questionIndex];
  hasAnswered = false;
  reviewingQuestion = false;
  currentOptions = shuffle(question.answers);
  $('#chapter-name').textContent = chapter.name;
  $('#chapter-index').textContent = `CHAPTER ${String(chapters.indexOf(chapter) + 1).padStart(2, '0')}`;
  $('#crumb-chapter').textContent = chapter.short;
  $('#question-number').textContent = `QUESTION ${String(questionIndex + 1).padStart(2, '0')}`;
  $('#question-topic').textContent = chapter.topic;
  $('#question-text').textContent = question.q;
  $('#progress-count').textContent = `${String(questionIndex + 1).padStart(2, '0')} / ${String(currentQuestions.length).padStart(2, '0')}`;
  $('#progress-fill').style.width = `${(questionIndex / currentQuestions.length) * 100}%`;
  $('#progress-dots').innerHTML = currentQuestions.map((_, i) => `<span class="${i < questionIndex ? 'done' : ''}"></span>`).join('');
  $('#streak-count').textContent = streak;
  $('#score-count').textContent = score;
  $('#doors-grid').innerHTML = currentOptions.map((answer, i) => `<button class="answer-door" data-option="${i}" aria-label="Door ${i + 1}: ${escapeHtml(answer[0])}"><span class="door-number-small">0${i + 1}</span><span class="door-arch"><span class="door-glyph-small">${['✳', '◉', '⌘', '✦'][i]}</span></span><span class="door-answer">${escapeHtml(answer[0])}</span><span class="door-enter">STEP INSIDE ↗</span></button>`).join('');
  $('#doors-grid').querySelectorAll('.answer-door').forEach(button => button.addEventListener('click', () => answerDoor(Number(button.dataset.option))));
}
function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function answerDoor(optionIndex) {
  if (hasAnswered) return;
  hasAnswered = true;
  const picked = currentOptions[optionIndex];
  const correctAnswer = currentQuestions[questionIndex].answers.find(answer => answer[1]);
  const isCorrect = picked[1];
  document.querySelectorAll('.answer-door').forEach(button => button.disabled = true);
  if (!reviewingQuestion) {
    if (isCorrect) {
      score++; streak++; bestStreak = Math.max(bestStreak, streak);
    } else {
      streak = 0;
    }
  }
  playTone(isCorrect);
  $('#score-count').textContent = score;
  $('#streak-count').textContent = streak;
  $('#feedback-card').classList.toggle('is-wrong', !isCorrect);
  $('#feedback-status').textContent = isCorrect ? 'DOOR OPENED · NICE WORK' : 'A DETOUR · STILL LEARNING';
  $('#feedback-symbol').textContent = isCorrect ? '✳' : '↺';
  $('#feedback-choice').textContent = `YOU CHOSE: ${picked[0].toUpperCase()}`;
  $('#feedback-title').textContent = isCorrect ? 'You found it.' : 'Not quite this time.';
  $('#feedback-explanation').textContent = isCorrect ? picked[2] : `${picked[2]} The answer to look for is “${correctAnswer[0]}.” ${correctAnswer[2]}`;
  $('#analogy-box').classList.toggle('hidden', isCorrect);
  $('#analogy-review').classList.add('hidden');
  $('#analogy-review').replaceChildren();
  $('#analogy-error').classList.add('hidden');
  $('#analogy-input').value = '';
  $('#char-count').textContent = '0 / 280';
  $('#analogy-submit').textContent = 'LOCK IN MY ANALOGY ↗';
  $('#continue-button').textContent = 'NEXT QUESTION →';
  $('#feedback-actions').classList.toggle('hidden', !isCorrect);
  $('#review-button').classList.toggle('hidden', !isCorrect);
  $('#modal-close').classList.toggle('hidden', !isCorrect);
  modal.classList.remove('hidden');
  if (!isCorrect) $('#analogy-input').focus();
  else $('#continue-button').focus();
}
function selectChapter(selected) {
  chapter = selected;
  currentQuestions = shuffle(chapter.questions).slice(0, QUESTIONS_PER_QUIZ);
  questionIndex = score = streak = bestStreak = 0;
  renderQuestion();
  showScreen('game');
}
function renderChapters() {
  $('#chapter-grid').innerHTML = chapters.map((item, index) => `<button class="chapter-card" data-chapter="${item.id}"><span class="chapter-card-top"><span>CHAPTER 0${index + 1}</span><span class="chapter-card-icon">${item.icon}</span></span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.subtitle)}</p><span class="chapter-card-arrow">↗</span></button>`).join('');
  $('#chapter-grid').querySelectorAll('.chapter-card').forEach((button, index) => button.addEventListener('click', () => selectChapter(chapters[index])));
}
function continueGame() {
  modal.classList.add('hidden');
  questionIndex++;
  if (questionIndex >= currentQuestions.length) {
    $('#progress-fill').style.width = '100%';
    $('#final-score').textContent = `${score}/${currentQuestions.length}`;
    $('#final-streak').textContent = bestStreak;
    $('#complete-message').textContent = `Every door in ${chapter.name} is open. You earned ${score} first-try ${score === 1 ? 'find' : 'finds'}—and built a better map along the way.`;
    showScreen('complete');
  } else {
    renderQuestion();
  }
}

$('#start-button').addEventListener('click', () => { renderChapters(); showScreen('chapters'); });
$('#home-button').addEventListener('click', () => showScreen('welcome'));
$('#back-button').addEventListener('click', () => { renderChapters(); showScreen('chapters'); });
$('#chapter-switch-button').addEventListener('click', () => { renderChapters(); showScreen('chapters'); });
$('#home-link').addEventListener('click', event => { event.preventDefault(); showScreen('welcome'); });
$('#continue-button').addEventListener('click', continueGame);
$('#review-button').addEventListener('click', () => {
  modal.classList.add('hidden');
  reviewingQuestion = true;
  hasAnswered = false;
  document.querySelectorAll('.answer-door').forEach(button => button.disabled = false);
});
$('#modal-close').addEventListener('click', () => { if (!$('#feedback-card').classList.contains('is-wrong')) modal.classList.add('hidden'); });
$('#feedback-modal').addEventListener('click', event => { if (event.target === modal && !$('#feedback-card').classList.contains('is-wrong')) modal.classList.add('hidden'); });
$('#analogy-input').addEventListener('input', event => { $('#char-count').textContent = `${event.target.value.length} / 280`; $('#analogy-error').classList.add('hidden'); });
$('#analogy-submit').addEventListener('click', () => {
  const analogy = $('#analogy-input').value.trim();
  if (analogy.replace(/\s/g, '').length < 12) {
    $('#analogy-error').classList.remove('hidden');
    $('#analogy-input').focus();
    return;
  }
  const correctAnswer = currentQuestions[questionIndex].answers.find(answer => answer[1]);
  const review = $('#analogy-review');
  const notes = [
    `Your analogy: “${analogy}”`,
    `Self-check—not an automatic accuracy score: does your comparison preserve this key idea? ${correctAnswer[0]}`,
    `Why it matters: ${correctAnswer[2]}`
  ];
  if (correctAnswer[3]) notes.push(`One possible comparison: ${correctAnswer[3]}`);
  notes.push('Limit check: where does your comparison stop matching the biology?');
  const reviseButton = document.createElement('button');
  reviseButton.type = 'button';
  reviseButton.className = 'analogy-revise';
  reviseButton.textContent = 'REVISE MY ANALOGY';
  reviseButton.addEventListener('click', () => {
    review.classList.add('hidden');
    $('#feedback-actions').classList.add('hidden');
    $('#analogy-box').classList.remove('hidden');
    $('#analogy-submit').textContent = 'UPDATE MY ANALOGY ↗';
    $('#analogy-input').focus();
  });
  review.replaceChildren(
    ...notes.map(note => {
      const paragraph = document.createElement('p');
      paragraph.textContent = note;
      return paragraph;
    }),
    reviseButton
  );
  review.classList.remove('hidden');
  $('#analogy-box').classList.add('hidden');
  $('#feedback-actions').classList.remove('hidden');
  $('#feedback-status').textContent = 'ANALOGY REVIEW · PATH CLEAR';
  $('#feedback-title').textContent = 'Check—and refine—the mapping.';
  $('#continue-button').textContent = 'NEXT QUESTION →';
  $('#continue-button').focus();
});
$('#replay-button').addEventListener('click', () => selectChapter(chapter));
$('#complete-chapters').addEventListener('click', () => { renderChapters(); showScreen('chapters'); });
$('#sound-toggle').addEventListener('click', () => {
  soundOn = !soundOn;
  $('#sound-toggle').setAttribute('aria-label', soundOn ? 'Turn sound effects off' : 'Turn sound effects on');
  $('.sound-label').textContent = soundOn ? 'SOUND ON' : 'SOUND OFF';
  if (soundOn) playTone(true);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden') && !$('#feedback-card').classList.contains('is-wrong')) modal.classList.add('hidden');
});
renderChapters();

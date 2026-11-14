window.extraChapterWords = {
  foundations: [
    ['peptide bond', 'The covalent bond that joins the carboxyl group of one amino acid to the amino group of the next.'],
    ['side chain (R group)', 'The variable part of an amino acid that helps determine its chemical properties.'],
    ['pH', 'A logarithmic measure related to hydrogen-ion concentration; it describes how acidic or basic a solution is.'],
    ['hydrogen bond', 'A weak, directional attraction involving a hydrogen attached to an electronegative atom and another electronegative atom.']
  ],
  water: [
    ['hydrogen bond', 'A weak attraction between a partially positive hydrogen and an electronegative atom, often oxygen or nitrogen.'],
    ['pKa', 'The pH at which an ionizable group is half protonated and half deprotonated.'],
    ['buffer', 'A system that resists changes in pH by accepting or releasing protons.'],
    ['hydrophilic', 'Having favorable interactions with water, often because a group is charged or polar.']
  ],
  proteins: [
    ['primary structure', 'The linear amino-acid sequence of a polypeptide, written from its amino terminus to its carboxyl terminus.'],
    ['secondary structure', 'Local recurring backbone conformations, especially alpha helices and beta sheets.'],
    ['tertiary structure', 'The overall three-dimensional arrangement of atoms in a single polypeptide chain.'],
    ['quaternary structure', 'The arrangement and interactions of multiple polypeptide subunits in a protein assembly.'],
    ['denaturation', 'Disruption of a protein’s native higher-order structure, commonly impairing its function without necessarily breaking peptide bonds.']
  ],
  metabolism: [
    ['free energy (G)', 'A thermodynamic quantity that indicates the energy available to do useful work at constant temperature and pressure.'],
    ['ATP', 'A nucleotide whose hydrolysis can be coupled to energetically unfavorable cellular processes.'],
    ['oxidation', 'Loss of electrons from a substance; in biological reactions it is often associated with loss of hydrogen.'],
    ['reduction', 'Gain of electrons by a substance; in biological reactions it is often associated with gain of hydrogen.']
  ],
  membranes: [
    ['amphipathic', 'Having both hydrophilic and hydrophobic regions, as in many membrane lipids.'],
    ['phospholipid bilayer', 'A two-layer sheet of amphipathic lipids with hydrophobic tails directed inward and polar heads facing water.'],
    ['fluid mosaic model', 'A description of membranes as dynamic lipid bilayers containing mobile proteins and other components.'],
    ['transmembrane protein', 'A membrane protein that spans the lipid bilayer, often forming a channel, transporter, or receptor.']
  ],
  genetics: [
    ['allele', 'One of the alternative forms of a genetic locus found among individuals or chromosomes.'],
    ['genotype', 'The genetic constitution or allele combination of an organism at one or more loci.'],
    ['phenotype', 'An observable characteristic arising from genetic factors and their interaction with the environment.'],
    ['mutation', 'A heritable change in the nucleotide sequence of genetic material.']
  ],
  dna: [
    ['nucleotide', 'A nucleic-acid building block containing a nitrogenous base, a five-carbon sugar, and one or more phosphate groups.'],
    ['base pair', 'Two complementary nucleobases paired across nucleic-acid strands, such as A with T in DNA.'],
    ['semiconservative replication', 'DNA replication in which each daughter double helix contains one parental strand and one newly synthesized strand.'],
    ['DNA polymerase', 'An enzyme that synthesizes DNA using a template and typically extends a primer in the 5′ to 3′ direction.']
  ],
  'gene-expression': [
    ['transcription', 'The synthesis of an RNA molecule using a DNA strand as a template.'],
    ['promoter', 'A DNA sequence where transcription machinery assembles to initiate transcription.'],
    ['RNA polymerase', 'The enzyme that synthesizes RNA from a nucleic-acid template.'],
    ['operon', 'A group of bacterial genes regulated together and transcribed from a shared promoter into one RNA.']
  ],
  translation: [
    ['codon', 'A three-nucleotide sequence in mRNA that specifies an amino acid or a translation stop signal.'],
    ['anticodon', 'A three-nucleotide sequence in a tRNA that base-pairs with a complementary mRNA codon.'],
    ['ribosome', 'A ribonucleoprotein complex that reads mRNA and catalyzes protein synthesis.'],
    ['aminoacyl-tRNA', 'A tRNA covalently linked to its corresponding amino acid, ready for use in translation.']
  ]
};

window.extraLearningChapters = [
  {
    id: 'amino-acids', name: 'Amino Acids', short: 'AMINO ACIDS', subtitle: 'Structure, polarity & special roles', icon: '⌁', topic: 'AMINO ACID CHEMISTRY',
    words: [
      ['alpha carbon', 'The central carbon in a standard amino acid, bonded to an amino group, a carboxyl group, hydrogen, and a side chain.'],
      ['amino group', 'The nitrogen-containing group; in proteins it is part of the shared amino-acid backbone.'],
      ['carboxyl group', 'The acidic carbon-containing group that is part of every standard amino-acid backbone.'],
      ['R group', 'The variable side chain that gives each amino acid its characteristic size and chemistry.'],
      ['zwitterion', 'A molecule bearing both positive and negative charges while having no net charge overall.'],
      ['isoelectric point (pI)', 'The pH at which a molecule has zero average net electrical charge.'],
      ['essential amino acid', 'An amino acid that an organism cannot synthesize in sufficient amount and must obtain from its diet.'],
      ['hydrophobic', 'Describes a nonpolar group that interacts poorly with water and tends to associate with other nonpolar surfaces.'],
      ['polar', 'Describes a group with an uneven distribution of electrical charge that can interact favorably with water.'],
      ['disulfide bond', 'A covalent bond between the sulfur atoms of two cysteine side chains, helping stabilize some protein structures.'],
      ['proline', 'An amino acid whose cyclic side chain constrains its backbone and can introduce a bend or disrupt an alpha helix.'],
      ['glycine', 'The smallest amino acid, with hydrogen as its side chain; its small size allows unusual backbone flexibility.']
    ],
    questions: [
      { q: 'Which groups are attached to the alpha carbon of a typical amino acid?', answers: [
        ['An amino group, carboxyl group, hydrogen, and R group', true, 'These four substituents define the common amino-acid structure. The R group varies and determines much of each amino acid’s chemistry.'],
        ['A phosphate, two sugars, and a base', false, 'Those components describe a nucleotide, not an amino acid. The amino acid has an amino group, carboxyl group, hydrogen, and side chain.'],
        ['Three fatty-acid tails and glycerol', false, 'That is closer to a lipid structure. Amino acids share a central alpha carbon with four attached groups.'],
        ['Four identical R groups', false, 'The four groups are not identical: they include amino, carboxyl, hydrogen, and a variable R group.']] },
      { q: 'At physiological pH, many free amino acids exist mainly as…', answers: [
        ['Zwitterions, with a positive amino group and negative carboxyl group', true, 'Near physiological pH, the amino group is commonly protonated and the carboxyl group deprotonated. Both charges are present, although their sum can be zero.'],
        ['Uncharged molecules with no ionic groups', false, 'Amino acids commonly carry ionized amino and carboxyl groups in water; zero net charge does not mean no charges.'],
        ['A pair of covalently joined amino acids', false, 'A pair joined by a peptide bond is a dipeptide. A free amino acid is not necessarily joined to another.'],
        ['Negatively charged only at every pH', false, 'The net charge depends on pH and ionizable groups. Near physiological pH many amino acids have both positive and negative charges.']] },
      { q: 'Which side chain is most likely to be found in a water-exposed, polar region?', answers: [
        ['Serine, whose side chain contains a hydroxyl group', true, 'Serine’s hydroxyl group is polar and can form hydrogen bonds with water and other groups.'],
        ['Leucine, with a largely hydrocarbon side chain', false, 'Leucine is nonpolar and hydrophobic, so it often packs into a protein interior rather than favoring water.'],
        ['Phenylalanine, with a nonpolar aromatic ring', false, 'Its aromatic side chain is largely hydrophobic, unlike serine’s polar hydroxyl.'],
        ['Isoleucine, with a branched hydrocarbon side chain', false, 'Isoleucine is nonpolar and generally avoids direct contact with water.']] },
      { q: 'Why can glycine fit into tight turns in some proteins?', answers: [
        ['Its side chain is only a hydrogen, giving it unusual backbone flexibility', true, 'Glycine has the smallest side chain, so it is less sterically restricted and can adopt backbone angles that many other residues cannot.'],
        ['Its side chain forms a permanent disulfide bond', false, 'Cysteine, not glycine, has a sulfur-containing side chain that can form disulfide bonds.'],
        ['It has no alpha carbon', false, 'Glycine has the standard alpha carbon; only its side chain is especially small.'],
        ['It is always positively charged', false, 'Glycine’s side chain is not charged. Its flexibility comes from its minimal size.']] },
      { q: 'What special structural effect can proline have in a polypeptide?', answers: [
        ['Its ring-constrained backbone can create a bend and disrupt a helix', true, 'Proline’s side chain loops back to the backbone nitrogen, restricting its geometry and removing a backbone N–H donor. It often appears at turns or helix breaks.'],
        ['It creates a peptide bond without a backbone', false, 'Proline is incorporated into the ordinary polypeptide backbone; it does not eliminate the backbone.'],
        ['It always forms a disulfide cross-link', false, 'Disulfide bonds form between cysteine side chains, not proline.'],
        ['It makes every protein soluble in oil', false, 'Amino-acid composition can influence solubility, but proline does not make every protein oil-soluble.']] }
    ]
  },
  {
    id: 'protein-structure', name: 'Protein Structure', short: 'PROTEIN STRUCTURE', subtitle: 'From sequence to 3D form', icon: '⌘', topic: 'THREE-DIMENSIONAL STRUCTURE',
    words: [
      ['primary structure', 'The linear amino-acid sequence of a polypeptide, including the positions of covalent cross-links when specified.'],
      ['secondary structure', 'Local, repeating backbone conformations such as alpha helices and beta sheets.'],
      ['alpha helix', 'A common helical secondary structure stabilized by hydrogen bonds between backbone groups.'],
      ['beta sheet', 'A secondary structure formed by aligned beta strands connected by backbone hydrogen bonds.'],
      ['tertiary structure', 'The overall three-dimensional arrangement of a single polypeptide chain.'],
      ['quaternary structure', 'The arrangement and interactions of multiple polypeptide subunits in a protein assembly.'],
      ['hydrophobic effect', 'The tendency of nonpolar surfaces to cluster in water, often driving nonpolar residues toward a protein core.'],
      ['denaturation', 'Disruption of a protein’s native higher-order structure, commonly impairing function without necessarily breaking peptide bonds.'],
      ['disulfide bond', 'A covalent link between two cysteine side chains that can stabilize a folded protein.'],
      ['conformation', 'A particular three-dimensional shape accessible to a molecule through rotations and structural rearrangements.'],
      ['chaperone', 'A protein that assists other proteins in folding or assembly, often reducing aggregation.'],
      ['native state', 'The biologically functional, folded conformation of a protein under appropriate conditions.']
    ],
    questions: [
      { q: 'Which interactions directly stabilize an alpha helix and beta sheet?', answers: [
        ['Hydrogen bonds between polypeptide backbone groups', true, 'The characteristic hydrogen bonds form between backbone carbonyl oxygens and amide hydrogens. Side chains influence which structures are favored but are not the repeating bonds defining these motifs.'],
        ['Peptide bonds between separate side chains', false, 'Peptide bonds connect successive amino acids in the chain; they are not the repeating stabilizing interactions between helix or sheet segments.'],
        ['Phosphodiester bonds between residues', false, 'Phosphodiester bonds connect nucleotides in nucleic acids, not protein secondary structures.'],
        ['Disulfide bonds at every turn', false, 'Disulfides can stabilize some proteins, but alpha helices and beta sheets are principally stabilized by backbone hydrogen bonds.']] },
      { q: 'What best describes tertiary structure?', answers: [
        ['The overall three-dimensional fold of one polypeptide chain', true, 'Tertiary structure describes how the full chain, including its secondary structures, packs into a three-dimensional form.'],
        ['The amino-acid sequence alone', false, 'The sequence is primary structure. Tertiary structure is the chain’s overall 3D fold.'],
        ['The arrangement of DNA bases in a chromosome', false, 'That concerns nucleic-acid organization, not a protein’s tertiary structure.'],
        ['Only the local hydrogen bonds of one alpha helix', false, 'An alpha helix is secondary structure; tertiary structure describes the overall fold.']] },
      { q: 'A protein has four associated polypeptide chains. Which structural level describes their assembly?', answers: [
        ['Quaternary structure', true, 'Quaternary structure describes how multiple polypeptide subunits associate into a functional protein complex.'],
        ['Primary structure', false, 'Primary structure is the amino-acid sequence of an individual chain.'],
        ['Secondary structure', false, 'Secondary structure refers to local alpha helices and beta sheets.'],
        ['Tertiary structure only', false, 'Tertiary structure describes a single chain’s fold; the arrangement among several chains is quaternary structure.']] },
      { q: 'Why do many soluble proteins bury hydrophobic side chains in their interior?', answers: [
        ['Packing them away from water can lower the system’s free energy', true, 'Exposing nonpolar surfaces disrupts water’s hydrogen-bonding network. Burial of hydrophobic groups is a major contributor to folding, alongside other interactions.'],
        ['The protein interior is always full of oil', false, 'Protein interiors are not oil-filled; hydrophobic residues pack together in a protein environment.'],
        ['Hydrophobic side chains make peptide bonds stronger', false, 'Peptide bonds link the backbone. Hydrophobic packing contributes to folding but does not strengthen those covalent bonds.'],
        ['Water cannot enter any folded protein', false, 'Some water may be present in protein interiors and cavities. Folding reduces unfavorable exposure rather than excluding every water molecule.']] },
      { q: 'What is a likely effect of heat or extreme pH on a protein?', answers: [
        ['It may denature, changing its shape and reducing activity', true, 'Heat or pH changes can disrupt the interactions that maintain higher-order structure. The amino-acid chain may remain intact even when its fold and function are lost.'],
        ['It always converts the protein into a carbohydrate', false, 'Denaturation changes protein structure; it does not convert the molecule into another biomolecule class.'],
        ['It necessarily breaks every peptide bond immediately', false, 'Denaturation usually disrupts noncovalent interactions. Peptide-bond hydrolysis is a separate chemical process.'],
        ['It guarantees that the protein becomes more active', false, 'A changed shape often impairs activity, though some proteins can refold under suitable conditions.']] }
    ]
  },
  {
    id: 'protein-function', name: 'Protein Function', short: 'PROTEIN FUNCTION', subtitle: 'Binding, motion & molecular work', icon: '✦', topic: 'PROTEINS AT WORK',
    words: [
      ['ligand', 'An ion or molecule that binds specifically to a protein or other macromolecule.'],
      ['binding site', 'A region of a protein that recognizes and interacts with a ligand or another molecule.'],
      ['induced fit', 'A binding model in which ligand association promotes a change in protein shape that improves the interaction or activity.'],
      ['allostery', 'Regulation in which binding or a change at one site influences activity at a distinct site in a protein.'],
      ['cooperativity', 'A phenomenon in multimeric proteins where ligand binding at one site affects binding at other sites.'],
      ['hemoglobin', 'A tetrameric oxygen-transport protein in red blood cells whose oxygen binding is cooperative and regulated.'],
      ['myoglobin', 'A single-chain oxygen-binding protein in muscle that can help store oxygen.'],
      ['affinity', 'The strength or tendency of a protein–ligand interaction; higher affinity generally means tighter binding.'],
      ['specificity', 'The preference of a protein for particular ligands or reactions over alternatives.'],
      ['allosteric effector', 'A molecule that binds away from an active or primary binding site and changes protein activity or ligand affinity.'],
      ['motor protein', 'A protein that converts chemical energy into directed movement along a track or through a cellular system.'],
      ['structural protein', 'A protein that contributes mechanical support, shape, or organization to cells and tissues.']
    ],
    questions: [
      { q: 'A protein changes shape after its ligand binds. Which model describes this?', answers: [
        ['Induced fit', true, 'In induced fit, ligand binding and protein shape are coupled: the protein adjusts to form a productive interaction.'],
        ['Competitive inhibition only', false, 'Competitive inhibition describes competition for a binding site, usually an enzyme active site; it is not the general name for binding-associated shape change.'],
        ['DNA replication', false, 'DNA replication copies genetic material and does not describe ligand-induced protein conformational change.'],
        ['Denaturation', false, 'Denaturation is loss of native structure, not the specific, often reversible shape adjustment associated with ligand binding.']] },
      { q: 'How does an allosteric effector regulate a protein?', answers: [
        ['It binds at one site and alters behavior at a different site', true, 'Allosteric regulation links a distinct binding site to a change in protein activity, shape, or ligand affinity elsewhere.'],
        ['It permanently replaces the protein’s amino-acid sequence', false, 'Allosteric effectors bind noncovalently or covalently in regulatory ways; they do not rewrite the protein sequence.'],
        ['It breaks all peptide bonds in the protein', false, 'Breaking peptide bonds would degrade the protein, not provide ordinary allosteric regulation.'],
        ['It only works by changing the DNA code', false, 'Allostery is direct regulation through protein structure and interactions, not necessarily through DNA.']] },
      { q: 'What does cooperative oxygen binding mean for hemoglobin?', answers: [
        ['Binding oxygen at one subunit influences oxygen binding at other subunits', true, 'Hemoglobin’s subunits communicate: oxygen binding shifts the protein toward a state with greater affinity at additional sites. This helps oxygen loading and release.'],
        ['Each oxygen molecule is covalently attached to a different amino acid', false, 'Oxygen binds reversibly to heme iron, and subunit interactions produce cooperativity.'],
        ['Hemoglobin contains only one oxygen-binding site', false, 'Hemoglobin has multiple subunits and oxygen-binding heme groups.'],
        ['Oxygen binding destroys hemoglobin’s quaternary structure', false, 'Binding shifts the relative conformation of subunits but does not ordinarily destroy the assembly.']] },
      { q: 'Which statement distinguishes myoglobin from hemoglobin?', answers: [
        ['Myoglobin is a single-chain muscle protein; hemoglobin is a multimeric blood oxygen carrier', true, 'Myoglobin helps facilitate oxygen storage or movement in muscle and has one polypeptide chain; hemoglobin is a multimeric protein in red blood cells.'],
        ['Myoglobin is a carbohydrate and hemoglobin is a lipid', false, 'Both are proteins, though they have different structures and physiological roles.'],
        ['Only myoglobin contains amino acids', false, 'Both proteins are built from amino acids.'],
        ['Hemoglobin is a DNA polymer and myoglobin is RNA', false, 'Both are proteins, not nucleic-acid polymers.']] },
      { q: 'A motor protein’s core job is to…', answers: [
        ['Use energy to produce directed movement in a cell', true, 'Motor proteins such as myosin, kinesin, and dynein convert chemical energy—often from ATP hydrolysis—into force and movement.'],
        ['Store hereditary information in a base sequence', false, 'DNA and RNA store or transmit sequence information; motor proteins generate movement.'],
        ['Form the glycosidic bonds of every sugar', false, 'Carbohydrate synthesis uses specific enzymes; motor proteins are known for force and motion.'],
        ['Prevent all molecular interactions', false, 'Proteins function through selective interactions; motor proteins bind tracks and cargo as they move.']] }
    ]
  },
  {
    id: 'enzymes', name: 'Enzymes', short: 'ENZYMES', subtitle: 'Catalysis, kinetics & control', icon: '↯', topic: 'ENZYME CATALYSIS',
    words: [
      ['catalyst', 'A substance that increases reaction rate without being consumed overall.'],
      ['activation energy', 'The free-energy barrier that reactants must overcome to reach the transition state.'],
      ['active site', 'The region of an enzyme where substrate binds and catalysis takes place.'],
      ['substrate', 'A reactant molecule on which an enzyme acts.'],
      ['transition state', 'A short-lived, high-energy arrangement along the reaction pathway between reactants and products.'],
      ['Michaelis constant (Kₘ)', 'For a simple Michaelis–Menten enzyme, the substrate concentration at which initial velocity is half of Vmax; it is not universally a direct measure of binding affinity.'],
      ['Vmax', 'The maximum reaction velocity approached when enzyme active sites are saturated with substrate.'],
      ['competitive inhibitor', 'An inhibitor that competes with substrate for the active site; its effect can often be reduced by increasing substrate concentration.'],
      ['allosteric enzyme', 'An enzyme regulated by effectors binding at sites distinct from the catalytic site, often showing cooperative behavior.'],
      ['cofactor', 'A non-protein component, such as a metal ion or organic coenzyme, required by some enzymes.'],
      ['coenzyme', 'A small organic cofactor that assists enzyme catalysis, often by carrying electrons or chemical groups.'],
      ['feedback inhibition', 'Regulation in which a pathway’s product inhibits an earlier enzyme in that pathway.']
    ],
    questions: [
      { q: 'How does an enzyme speed up a reaction?', answers: [
        ['It lowers the activation-energy barrier by stabilizing a productive transition state', true, 'Enzymes provide a favorable reaction pathway and stabilize transition-state features. They do not change the overall ΔG or the equilibrium position.'],
        ['It makes the reaction’s products permanently more stable', false, 'Enzymes alter reaction kinetics, not the overall free-energy difference between reactants and products.'],
        ['It changes the equilibrium constant', false, 'A catalyst speeds both forward and reverse reactions and does not change equilibrium.'],
        ['It is consumed to become part of the product', false, 'Enzymes are regenerated at the end of catalytic cycles, although they can eventually be degraded or inactivated.']] },
      { q: 'What is the enzyme’s active site?', answers: [
        ['The region that binds substrate and facilitates the chemical reaction', true, 'The active site brings substrates together in a favorable orientation and chemical environment for catalysis.'],
        ['A permanent storage location for ATP', false, 'Some enzymes bind ATP as a substrate or cofactor, but the active site is defined by substrate binding and catalysis.'],
        ['The DNA segment encoding the enzyme', false, 'A gene encodes an enzyme; the active site is a three-dimensional region of the enzyme protein.'],
        ['A region that binds every molecule equally', false, 'Enzymes generally show molecular recognition and catalytic specificity.']] },
      { q: 'In simple Michaelis–Menten kinetics, what does Kₘ represent?', answers: [
        ['The substrate concentration at which initial velocity is half of Vmax', true, 'For the simple model, Kₘ is the substrate concentration at half-maximal initial velocity. Its relation to binding affinity depends on kinetic assumptions.'],
        ['The maximum amount of product possible in the cell', false, 'Kₘ is a concentration parameter; Vmax is the maximum velocity under the model’s conditions.'],
        ['The amount of enzyme consumed per reaction', false, 'Enzymes are catalysts; Kₘ does not measure enzyme consumption.'],
        ['The equilibrium constant for every biochemical reaction', false, 'Kₘ is a kinetic parameter for a particular enzyme mechanism, not a universal equilibrium constant.']] },
      { q: 'What is the usual effect of a competitive inhibitor on apparent kinetics?', answers: [
        ['It increases apparent Kₘ while leaving Vmax unchanged in the simple model', true, 'A competitive inhibitor competes for the active site. More substrate can outcompete it, so apparent Kₘ rises while Vmax can still be reached.'],
        ['It decreases Vmax and cannot be overcome by substrate', false, 'That is not the classic pattern for reversible competitive inhibition; it usually raises apparent Kₘ without changing Vmax.'],
        ['It permanently destroys the enzyme’s gene', false, 'An inhibitor binds enzyme molecules and does not rewrite the gene.'],
        ['It makes the reaction independent of substrate', false, 'The reaction remains substrate-dependent; inhibition reduces access to productive binding.']] },
      { q: 'A pathway end product inhibits an enzyme near the start of that pathway. This is…', answers: [
        ['Feedback inhibition', true, 'Feedback inhibition prevents unnecessary synthesis by using a downstream product to regulate an earlier pathway step.'],
        ['Peptide-bond formation', false, 'Peptide bonds join amino acids and do not describe end-product regulation.'],
        ['Competitive activation', false, 'The described mechanism is feedback inhibition; it need not involve a competitive inhibitor.'],
        ['DNA translation', false, 'Translation makes protein from RNA; this example is metabolic regulation.']] }
    ]
  },
  {
    id: 'carbohydrates', name: 'Carbohydrates', short: 'CARBOHYDRATES', subtitle: 'Sugars, chains & cell recognition', icon: '⬡', topic: 'SUGARS & GLYCANS',
    words: [
      ['monosaccharide', 'A single sugar unit that cannot be hydrolyzed into a simpler carbohydrate.'],
      ['glucose', 'A six-carbon aldose sugar used widely as a fuel and building block in organisms.'],
      ['anomer', 'One of two sugar stereoisomers that differ at the anomeric carbon formed during ring closure.'],
      ['anomeric carbon', 'The former carbonyl carbon of a cyclic sugar; its configuration defines alpha and beta anomers.'],
      ['glycosidic bond', 'A covalent bond linking a sugar’s anomeric carbon to another group, often another sugar.'],
      ['disaccharide', 'A carbohydrate made of two monosaccharides joined by a glycosidic bond.'],
      ['starch', 'A plant storage polysaccharide of glucose, including amylose and branched amylopectin.'],
      ['glycogen', 'A highly branched glucose-storage polysaccharide in animals and many microbes.'],
      ['cellulose', 'A structural plant polysaccharide of beta-linked glucose that humans cannot digest with their own enzymes.'],
      ['polysaccharide', 'A polymer containing many monosaccharides joined by glycosidic bonds.'],
      ['reducing sugar', 'A sugar with an anomeric carbon able to open to a form that can act as a reducing agent.'],
      ['glycoprotein', 'A protein bearing covalently attached carbohydrate chains that can influence recognition, stability, or trafficking.']
    ],
    questions: [
      { q: 'What bond joins monosaccharides in a carbohydrate chain?', answers: [
        ['A glycosidic bond', true, 'A glycosidic bond links the anomeric carbon of one sugar to an oxygen or nitrogen-containing group on another molecule.'],
        ['A peptide bond', false, 'Peptide bonds join amino acids in proteins. Sugars are linked by glycosidic bonds.'],
        ['A phosphodiester bond', false, 'Phosphodiester bonds form nucleic-acid backbones.'],
        ['A disulfide bond', false, 'Disulfide bonds link cysteine side chains in proteins.']] },
      { q: 'Which statement correctly compares starch and glycogen?', answers: [
        ['Both store glucose; glycogen is generally more highly branched', true, 'Plants store glucose mainly as starch, while animals store it as glycogen. Glycogen’s extensive branching provides many ends for rapid mobilization.'],
        ['Both are proteins made of amino acids', false, 'Starch and glycogen are glucose polysaccharides, not proteins.'],
        ['Starch is found only in animals and glycogen only in plants', false, 'Starch is the major plant storage carbohydrate; glycogen is a storage form in animals and many microbes.'],
        ['Neither contains glucose', false, 'Both are polymers of glucose.']] },
      { q: 'Why can humans digest starch but not cellulose efficiently?', answers: [
        ['Human digestive enzymes hydrolyze starch linkages but not cellulose’s beta-1,4 linkages', true, 'Starch contains alpha-linked glucose chains that human enzymes can digest. Cellulose’s beta-1,4 geometry requires cellulases humans do not produce.'],
        ['Cellulose contains no sugar units', false, 'Cellulose is a glucose polymer; the linkage geometry differs from starch.'],
        ['Starch is a lipid while cellulose is a carbohydrate', false, 'Both starch and cellulose are carbohydrates.'],
        ['Cellulose has peptide bonds and starch has DNA bonds', false, 'Both are polysaccharides with glycosidic bonds, though their linkage orientations differ.']] },
      { q: 'What makes a sugar a reducing sugar?', answers: [
        ['It has a free anomeric carbon that can open to a reactive carbonyl form', true, 'A free anomeric carbon can interconvert with the open-chain form and participate in redox reactions. If both anomeric positions are tied up, a disaccharide may be nonreducing.'],
        ['It can donate amino acids to a protein', false, 'Reducing behavior refers to sugar chemistry, not transfer of amino acids.'],
        ['It always contains a phosphate group', false, 'Phosphorylation is not required for a sugar to be reducing.'],
        ['It has no carbonyl-derived chemistry', false, 'Access to the open-chain carbonyl form is the key idea.']] },
      { q: 'How can carbohydrate chains on cell surfaces contribute to biology?', answers: [
        ['They can help cells recognize, adhere to, and communicate with one another', true, 'Cell-surface glycans attached to proteins or lipids create recognition patterns used in interactions, trafficking, and signaling.'],
        ['They replace all membrane proteins', false, 'Glycans supplement membrane components and are often attached to proteins or lipids; they do not replace all proteins.'],
        ['They store the complete genetic code', false, 'DNA and RNA store sequence information; carbohydrates can contribute to recognition and structure.'],
        ['They catalyze every reaction in the cytoplasm', false, 'Enzymes catalyze reactions. Carbohydrate chains often have structural or recognition roles.']] }
    ]
  },
  {
    id: 'lipids', name: 'Lipids', short: 'LIPIDS', subtitle: 'Membranes, fuels & signals', icon: '◉', topic: 'LIPID CHEMISTRY',
    words: [
      ['fatty acid', 'A carboxylic acid with a hydrocarbon chain; it may be saturated or contain cis double bonds.'],
      ['triacylglycerol', 'A storage lipid made of glycerol esterified to three fatty acids.'],
      ['phospholipid', 'An amphipathic membrane lipid with a polar head group and hydrophobic region or regions.'],
      ['amphipathic', 'Having both hydrophilic and hydrophobic regions within the same molecule.'],
      ['saturated fatty acid', 'A fatty acid whose hydrocarbon chain has no carbon–carbon double bonds.'],
      ['unsaturated fatty acid', 'A fatty acid with one or more carbon–carbon double bonds, often creating bends when the bonds are cis.'],
      ['steroid', 'A lipid characterized by four fused carbon rings; examples include cholesterol and steroid hormones.'],
      ['cholesterol', 'A sterol in animal membranes that modulates membrane properties and serves as a precursor for other molecules.'],
      ['micelle', 'A roughly spherical assembly of amphipathic molecules with hydrophobic regions tucked away from water.'],
      ['lipoprotein', 'A particle that packages lipids with proteins to enable transport through aqueous body fluids.'],
      ['eicosanoid', 'A signaling molecule derived from 20-carbon polyunsaturated fatty acids, such as arachidonic acid.'],
      ['beta oxidation', 'A pathway that breaks fatty acyl chains into acetyl-CoA units while generating reduced electron carriers.']
    ],
    questions: [
      { q: 'Why do phospholipids spontaneously form bilayers in water?', answers: [
        ['Their hydrophilic heads contact water while hydrophobic tails cluster away from it', true, 'This amphipathic arrangement lowers unfavorable contact between nonpolar tails and water, while polar head groups remain hydrated.'],
        ['Their tails form peptide bonds with water', false, 'Phospholipid tails are hydrocarbon chains and do not form peptide bonds.'],
        ['Both heads and tails are strongly attracted to water', false, 'The hydrophilic heads interact favorably with water; the hydrophobic tails do not.'],
        ['They are covalently linked into a rigid sheet', false, 'Bilayers assemble primarily through noncovalent interactions and the hydrophobic effect.']] },
      { q: 'What is the main energy-storage role of triacylglycerols?', answers: [
        ['They store concentrated chemical energy in three fatty-acid chains', true, 'Triacylglycerols are energy-dense, relatively reduced molecules stored in lipid droplets and used as fuel when mobilized.'],
        ['They store genetic information in three bases', false, 'Nucleic acids store genetic information; triacylglycerols store metabolic energy.'],
        ['They form the repeating units of proteins', false, 'Amino acids form proteins. Triacylglycerols are made from glycerol and fatty acids.'],
        ['They are the main water-soluble fuel in blood', false, 'Triacylglycerols are hydrophobic and require packaging for transport in aqueous fluids.']] },
      { q: 'How can cis double bonds affect a fatty-acid chain?', answers: [
        ['They introduce bends that can reduce tight packing among chains', true, 'Cis double bonds constrain the chain into a bend. In membranes, unsaturated tails often pack less tightly, influencing fluidity.'],
        ['They make the chain completely water soluble', false, 'A double bond does not remove the long hydrophobic hydrocarbon region.'],
        ['They convert the fatty acid into an amino acid', false, 'Unsaturation changes the hydrocarbon chain but does not change the molecule into an amino acid.'],
        ['They always make a membrane completely rigid', false, 'Cis unsaturation generally disrupts close packing and can increase fluidity.']] },
      { q: 'What is a key role of cholesterol in animal-cell membranes?', answers: [
        ['It modulates membrane fluidity and permeability', true, 'Cholesterol fits among phospholipids and buffers membrane properties, limiting extremes in fluidity and reducing permeability to some small molecules.'],
        ['It forms peptide bonds between membrane proteins', false, 'Cholesterol is a sterol lipid, not an enzyme that joins proteins.'],
        ['It stores the cell’s DNA sequence', false, 'DNA stores sequence information. Cholesterol is a membrane component and biosynthetic precursor.'],
        ['It is the only lipid present in every membrane', false, 'Membranes contain diverse phospholipids, glycolipids, sterols, and proteins; cholesterol is not the only lipid.']] },
      { q: 'How are hydrophobic lipids transported through blood?', answers: [
        ['They are packaged into lipoprotein particles with a water-compatible exterior', true, 'Lipoproteins organize hydrophobic lipids in their interiors and expose proteins and polar lipid groups to the aqueous environment.'],
        ['They dissolve freely because blood is nonpolar', false, 'Blood is aqueous. Hydrophobic lipids need carriers or particles for effective transport.'],
        ['They are converted into DNA', false, 'Lipoproteins transport lipids without converting them into nucleic acids.'],
        ['They travel only inside red blood-cell chromosomes', false, 'Red blood cells do not transport lipids in chromosomes; lipoproteins circulate through plasma.']] }
    ]
  },
  {
    id: 'nucleotides', name: 'Nucleotides', short: 'NUCLEOTIDES', subtitle: 'Bases, sugars & molecular energy', icon: '⌬', topic: 'NUCLEOTIDE BUILDING BLOCKS',
    words: [
      ['nucleotide', 'A nucleoside with one or more phosphate groups; nucleotides are the monomers of nucleic acids.'],
      ['nucleoside', 'A nitrogenous base attached to a pentose sugar, without phosphate.'],
      ['purine', 'A two-ring nitrogenous base; adenine and guanine are purines.'],
      ['pyrimidine', 'A one-ring nitrogenous base; cytosine, thymine, and uracil are pyrimidines.'],
      ['ribose', 'The five-carbon sugar in RNA nucleotides and many other biological molecules.'],
      ['deoxyribose', 'The five-carbon sugar in DNA nucleotides; it lacks the 2′ oxygen found in ribose.'],
      ['phosphate group', 'A phosphorus atom bonded to oxygen atoms; phosphate groups contribute charge and can link nucleotide sugars.'],
      ['ATP', 'Adenosine triphosphate, a nucleotide that transfers phosphoryl groups and couples energy to cellular work.'],
      ['GTP', 'Guanosine triphosphate, a nucleotide used in protein synthesis, signaling, and other energy-dependent processes.'],
      ['cyclic AMP (cAMP)', 'A cyclic nucleotide derived from ATP that acts as an intracellular second messenger.'],
      ['coenzyme', 'A small organic molecule, often derived from vitamins, that assists an enzyme; several contain nucleotide-like components.'],
      ['phosphoanhydride bond', 'A linkage between phosphate groups, as in ATP; its hydrolysis can be coupled to cellular processes.']
    ],
    questions: [
      { q: 'Which three components make up a nucleotide?', answers: [
        ['A nitrogenous base, a pentose sugar, and one or more phosphate groups', true, 'A nucleotide combines a base and sugar (together called a nucleoside) with phosphate.'],
        ['An amino acid, a fatty acid, and glycerol', false, 'Those are components associated with other biomolecule classes, not a nucleotide.'],
        ['A base and sugar only, with no phosphate', false, 'A base plus sugar is a nucleoside; adding phosphate makes a nucleotide.'],
        ['Three nitrogenous bases and a peptide chain', false, 'A nucleotide has one base attached to a sugar and phosphate group(s).']] },
      { q: 'Which bases are purines?', answers: [
        ['Adenine and guanine', true, 'Adenine (A) and guanine (G) have two fused rings and are purines.'],
        ['Cytosine and thymine', false, 'Cytosine and thymine are one-ring pyrimidines.'],
        ['Cytosine and uracil', false, 'Both are pyrimidines, not purines.'],
        ['Thymine and uracil', false, 'Both are pyrimidines; thymine is used in DNA and uracil in RNA.']] },
      { q: 'How does a nucleoside differ from a nucleotide?', answers: [
        ['A nucleoside has a base and sugar; a nucleotide also has phosphate', true, 'Adding one or more phosphate groups to a nucleoside gives a nucleotide.'],
        ['A nucleoside has phosphate but a nucleotide does not', false, 'The distinction is the reverse: nucleotide includes phosphate.'],
        ['A nucleotide is a protein and a nucleoside is a lipid', false, 'Both terms describe base-and-sugar molecules; neither is a protein or lipid.'],
        ['They are identical names for a nitrogenous base alone', false, 'A base alone is not a nucleoside; the sugar is also present.']] },
      { q: 'How does ATP commonly help power cellular work?', answers: [
        ['Hydrolysis or phosphoryl transfer is coupled to an energetically unfavorable process', true, 'ATP reactions can be coupled to transport, movement, or biosynthesis. The cell uses the overall coupled reaction rather than treating a bond as an isolated packet of energy.'],
        ['ATP is burned as a fuel that disappears into heat only', false, 'ATP is converted into products such as ADP and phosphate, and its chemistry can be coupled to useful cellular work.'],
        ['ATP stores hereditary information in its base sequence', false, 'DNA and RNA store genetic information. ATP mainly serves as an energy and phosphoryl-group donor.'],
        ['ATP permanently attaches to every enzyme', false, 'Some enzymes bind ATP transiently, but ATP is not permanently attached to every enzyme.']] },
      { q: 'What is a common signaling role for cyclic AMP?', answers: [
        ['It acts as an intracellular second messenger downstream of some receptors', true, 'cAMP relays signals inside cells and can regulate targets such as protein kinase A.'],
        ['It is the sugar in DNA', false, 'DNA contains deoxyribose; cAMP is a cyclic nucleotide messenger.'],
        ['It forms the peptide backbone of enzymes', false, 'Proteins have peptide backbones; cAMP is a nucleotide-derived signaling molecule.'],
        ['It is a membrane fatty-acid tail', false, 'cAMP is water-soluble and functions in signaling, not as a fatty-acid tail.']] }
    ]
  },
  {
    id: 'nucleic-acids', name: 'Nucleic Acids', short: 'NUCLEIC ACIDS', subtitle: 'DNA, RNA & information flow', icon: '≋', topic: 'DNA & RNA STRUCTURE',
    words: [
      ['DNA', 'Deoxyribonucleic acid, a polymer that stores hereditary information in most organisms.'],
      ['RNA', 'Ribonucleic acid, a polymer involved in information transfer, catalysis, regulation, and other cellular roles.'],
      ['base pair', 'A pair of complementary bases held together primarily by hydrogen bonds in a nucleic-acid duplex.'],
      ['double helix', 'The paired, helical structure formed by two antiparallel DNA strands in the classic model.'],
      ['antiparallel', 'Describes paired nucleic-acid strands oriented in opposite 5′-to-3′ directions.'],
      ['phosphodiester bond', 'A covalent linkage between the 3′ hydroxyl of one nucleotide sugar and the 5′ phosphate of the next.'],
      ['complementary strand', 'A nucleic-acid strand whose sequence pairs specifically with another strand, following base-pairing rules.'],
      ['replication', 'The process by which DNA is copied to produce DNA molecules.'],
      ['transcription', 'The synthesis of RNA using a DNA strand as a template.'],
      ['translation', 'The ribosome-mediated decoding of an mRNA sequence into a polypeptide sequence.'],
      ['messenger RNA (mRNA)', 'An RNA molecule that carries coding information used by ribosomes to synthesize a protein.'],
      ['mutation', 'A heritable change in genetic material; effects depend on the change and its biological context.']
    ],
    questions: [
      { q: 'What holds complementary DNA bases together across the two strands?', answers: [
        ['Hydrogen bonds between specific base pairs', true, 'A pairs with T and G with C in standard DNA. Hydrogen bonds help pair the strands, while covalent phosphodiester bonds build each strand’s backbone.'],
        ['Peptide bonds between the bases', false, 'Peptide bonds join amino acids in proteins. DNA bases pair through hydrogen bonds.'],
        ['Phosphodiester bonds between opposite strands', false, 'Phosphodiester bonds connect nucleotides along one strand’s backbone, not across the base-pair interface.'],
        ['Disulfide bonds between sugars', false, 'Disulfide bonds link cysteine residues in proteins.']] },
      { q: 'What does it mean that DNA strands are antiparallel?', answers: [
        ['They run in opposite 5′-to-3′ directions', true, 'One DNA strand runs 5′ to 3′ while its partner runs 3′ to 5′, enabling complementary base pairing and the familiar double helix.'],
        ['They have exactly the same sequence in the same direction', false, 'Complementary strands pair in opposite orientations and have corresponding but not identical sequences.'],
        ['They are joined by peptide bonds', false, 'DNA strands are connected by base-pair interactions; peptide bonds are found in proteins.'],
        ['They contain no sugar-phosphate backbone', false, 'Each DNA strand has a sugar-phosphate backbone linked by phosphodiester bonds.']] },
      { q: 'What is the difference between replication and transcription?', answers: [
        ['Replication copies DNA into DNA; transcription makes RNA from a DNA template', true, 'DNA polymerases replicate DNA, while RNA polymerases transcribe DNA sequence information into RNA.'],
        ['Replication makes protein and transcription makes lipid', false, 'Translation makes protein. Replication copies DNA, and transcription produces RNA.'],
        ['Both processes make only carbohydrates', false, 'Neither process synthesizes carbohydrates; they copy or transcribe nucleic-acid information.'],
        ['Transcription copies RNA into DNA in every cell', false, 'Ordinary transcription uses DNA as a template to synthesize RNA. Reverse transcription occurs in particular biological contexts.']] },
      { q: 'Why is RNA chemically less stable than DNA under many conditions?', answers: [
        ['RNA has a 2′ hydroxyl group that can promote backbone cleavage', true, 'The ribose 2′-OH can participate in reactions that cleave the phosphodiester backbone; DNA’s deoxyribose lacks this group.'],
        ['RNA has no phosphodiester bonds', false, 'RNA has a phosphodiester backbone, like DNA.'],
        ['RNA contains no bases', false, 'RNA contains bases A, G, C, and U.'],
        ['RNA is always double-stranded and DNA is always single-stranded', false, 'RNA is often single-stranded and DNA often double-stranded, but these are not universal rules or the primary chemical explanation.']] },
      { q: 'What does a ribosome do during translation?', answers: [
        ['It reads mRNA codons and catalyzes the joining of amino acids into a polypeptide', true, 'Ribosomes coordinate mRNA and tRNA, decode codons, and catalyze peptide-bond formation during protein synthesis.'],
        ['It duplicates the entire chromosome', false, 'DNA replication duplicates chromosomes; ribosomes synthesize proteins.'],
        ['It turns proteins back into DNA', false, 'Ribosomes translate mRNA into protein; they do not reverse-translate proteins into DNA.'],
        ['It makes phospholipid bilayers directly from RNA', false, 'Ribosomes synthesize polypeptides. Lipid assembly is carried out by other cellular processes.']] }
    ]
  }
];

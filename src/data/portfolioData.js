/**
 * Portfolio data — add new items here.
 *
 * Each entry shape:
 *   id         – unique string
 *   type       – 'experience' | 'education' | 'project' | 'award' | 'event'
 *   date       – display string, e.g. '2024' or '2023–2025'
 *   title      – item title
 *   subtitle   – company / institution / venue
 *   description– one-paragraph summary
 *   tags       – array of keys from TAGS below (for theme filtering)
 *   goals      – array of keys from GOALS below (controls CV download)
 *   highlight  – true = starred / featured item
 *   url        – optional link (omit or '' for no link)
 */

export const TAGS = {
  quantum:     { label: 'Quantum',       color: '#5B21B6', bg: '#EDE9FE' },
  ml:          { label: 'ML / AI',       color: '#1D4ED8', bg: '#DBEAFE' },
  robotics:    { label: 'Robotics',      color: '#92400E', bg: '#FEF3C7' },
  physics:     { label: 'Physics',       color: '#065F46', bg: '#D1FAE5' },
  photonics:   { label: 'Photonics',     color: '#3730A3', bg: '#E0E7FF' },
  software:    { label: 'Software',      color: '#14532D', bg: '#DCFCE7' },
  hardware:    { label: 'Lab / HW',      color: '#7F1D1D', bg: '#FEE2E2' },
  competition: { label: 'Competition',   color: '#701A75', bg: '#FDF4FF' },
};

export const TYPES = {
  experience: { label: 'Work',       color: '#4E567E' },
  education:  { label: 'Education',  color: '#2D6A4F' },
  project:    { label: 'Project',    color: '#7C3AED' },
  award:      { label: 'Award',      color: '#B45309' },
  event:      { label: 'Event',      color: '#0891B2' },
};

export const GOALS = {
  research:          'Research / Academia',
  'ml-engineer':     'ML / AI Engineer',
  'robotics-engineer': 'Robotics Engineer',
  'quantum-engineer': 'Quantum Computing',
  'photonics-rd':    'Photonics & R&D',
};

export const items = [

  // ── WORK EXPERIENCE ──────────────────────────────────────────────────────────

  {
    id: 'amo-2025',
    type: 'experience',
    date: '2025 – Now',
    title: 'Student Assistant – Nanophotonics & Quantum Technology',
    subtitle: 'AMO GmbH · Aachen, Germany',
    description:
      'PIC simulation, fabrication, measurement and analysis to develop new material platforms for photonic integrated circuits.',
    tags: ['photonics', 'hardware', 'quantum', 'physics'],
    goals: ['research', 'photonics-rd', 'quantum-engineer'],
    highlight: true,
    url: '',
  },
  {
    id: 'constructor-tech-2023',
    type: 'experience',
    date: '2023 – 2025',
    title: 'Intern Machine Learning Engineer',
    subtitle: 'Constructor Tech',
    description:
      'Explored physics-based optimizations with Material Science for AI models in conditional generation of images and crystal structures.',
    tags: ['ml', 'physics', 'software'],
    goals: ['ml-engineer', 'research'],
    highlight: true,
    url: '',
  },
  {
    id: 'teacher-2021',
    type: 'experience',
    date: '2021 – 2022',
    title: 'Extracurricular Teacher – Basics of Robot Operating System',
    subtitle: 'Presidential Lyceum of Physics and Mathematics No. 239 · St. Petersburg',
    description:
      'Presented a course on autonomous navigation tasks with RGB-D cameras and LiDARs to high school students.',
    tags: ['robotics', 'software'],
    goals: ['robotics-engineer'],
    highlight: false,
    url: '',
  },

  // ── EDUCATION ─────────────────────────────────────────────────────────────────

  {
    id: 'rwth-2024',
    type: 'education',
    date: '2024 – Now',
    title: 'MSc Physics',
    subtitle: 'RWTH Aachen University · GPA 1.65',
    description:
      'Specializing in nanophotonics, quantum technology, and photonic integrated circuit design and fabrication.',
    tags: ['physics', 'photonics', 'quantum'],
    goals: ['research', 'photonics-rd', 'quantum-engineer'],
    highlight: true,
    url: '',
  },
  {
    id: 'constructor-univ-2023',
    type: 'education',
    date: '2023 – 2024',
    title: 'BSc Physics with minor in Computer Science',
    subtitle: 'Constructor University · GPA 1.12',
    description:
      'Theoretical and applied physics with computational methods, quantum systems, and machine learning.',
    tags: ['physics', 'software', 'quantum'],
    goals: ['research', 'ml-engineer', 'photonics-rd'],
    highlight: false,
    url: '',
  },
  {
    id: 'itmo-2021',
    type: 'education',
    date: '2021 – 2023',
    title: 'Applied and Theoretical Physics',
    subtitle: 'ITMO University · GPA 1.41',
    description:
      'Applied physics track with focus on experimental methods, optics, and quantum systems.',
    tags: ['physics', 'hardware'],
    goals: ['research', 'photonics-rd'],
    highlight: false,
    url: '',
  },

  // ── AWARDS ────────────────────────────────────────────────────────────────────

  {
    id: 'speedfund-2025',
    type: 'award',
    date: '2025 / 26',
    title: 'Speedfund Recipient',
    subtitle: 'RWTH Aachen · supported by Hans Hermann Voss Foundation',
    description:
      'Research funding award supporting advanced studies in physics and nanophotonics at RWTH Aachen University.',
    tags: ['physics', 'photonics'],
    goals: ['research', 'photonics-rd'],
    highlight: true,
    url: '',
  },
  {
    id: 'fraunhofer-2025',
    type: 'award',
    date: '2025',
    title: '1st Place – Fraunhofer ICNAP Hackathon (AC&C Challenge)',
    subtitle: 'Fraunhofer Institute',
    description:
      'Won first place in the AC&C challenge at the Fraunhofer ICNAP Hackathon.',
    tags: ['competition', 'physics', 'ml'],
    goals: ['research', 'ml-engineer'],
    highlight: true,
    url: '',
  },
  {
    id: 'push-quantum-2025',
    type: 'award',
    date: '2025',
    title: '3rd Place – Push Quantum Hackathon (Quandela Challenge)',
    subtitle: 'Push Quantum',
    description:
      'Achieved third place in the Quandela photonic quantum computing challenge.',
    tags: ['competition', 'quantum', 'photonics'],
    goals: ['research', 'quantum-engineer', 'photonics-rd'],
    highlight: true,
    url: '',
  },
  {
    id: 'jetbrains-2020',
    type: 'award',
    date: '2020',
    title: 'Full Scholarship',
    subtitle: 'JetBrains',
    description:
      'Awarded full scholarship by JetBrains for academic excellence.',
    tags: ['software'],
    goals: ['research', 'ml-engineer'],
    highlight: false,
    url: '',
  },

  // ── EVENTS ────────────────────────────────────────────────────────────────────

  {
    id: 'epixfab-2026',
    type: 'event',
    date: '2026',
    title: 'ePIXfab Silicon Photonics Experience Center',
    subtitle: 'Training Workshop',
    description:
      'Hands-on training at the ePIXfab Silicon Photonics Experience Center covering advanced PIC design and fabrication workflows.',
    tags: ['photonics', 'hardware'],
    goals: ['photonics-rd', 'research'],
    highlight: true,
    url: '',
  },
  {
    id: 'quantum-tools-2024',
    type: 'event',
    date: '2024',
    title: 'Workshop: Tools from the Quantum Industry',
    subtitle: 'Industry Workshop',
    description:
      'Explored state-of-the-art tools and frameworks used in the quantum computing industry.',
    tags: ['quantum'],
    goals: ['quantum-engineer', 'research'],
    highlight: false,
    url: '',
  },
  {
    id: 'qhack-2024',
    type: 'event',
    date: '2024',
    title: 'Xanadu QHack 2024',
    subtitle: 'Quantum Hackathon',
    description:
      "Annual quantum computing hackathon focused on PennyLane and photonic quantum computing.",
    tags: ['competition', 'quantum', 'software'],
    goals: ['quantum-engineer', 'research'],
    highlight: false,
    url: '',
  },
  {
    id: 'asml-2023',
    type: 'event',
    date: '2023',
    title: 'ASML Physics Day',
    subtitle: 'Industry Event',
    description:
      'Explored advanced semiconductor lithography and photonics research at ASML.',
    tags: ['photonics', 'physics'],
    goals: ['photonics-rd', 'research'],
    highlight: false,
    url: '',
  },

  // ── PROJECTS & RESEARCH ───────────────────────────────────────────────────────

  {
    id: 'thesis-2024',
    type: 'project',
    date: '2024',
    title: 'Generative Algorithms for Quantum Annealing and Probabilistic Computing',
    subtitle: 'Bachelor Thesis · Constructor University',
    description:
      'Investigated the integration of stochastic hardware with probabilistic software algorithms to reduce resource consumption in training and using generative models. Explored the feasibility of implementing these solutions using widely available technologies.',
    tags: ['quantum', 'ml', 'software', 'physics'],
    goals: ['research', 'quantum-engineer', 'ml-engineer'],
    highlight: true,
    url: '#',
  },
  {
    id: 'nonlinear-optics-2023',
    type: 'project',
    date: '2023',
    title: 'Nonlinear Optical Response of Colloidal Solutions of Dielectric Nanoparticles',
    subtitle: 'Research Physics Project',
    description:
      'Investigated artificial nonlinearity in colloidal solutions of dielectric nanoparticles and the occurrence of hysteresis under total internal reflection. Conducted both experimental and numerical studies.',
    tags: ['photonics', 'physics', 'hardware'],
    goals: ['research', 'photonics-rd'],
    highlight: true,
    url: '#',
  },
  {
    id: 'ir-sensors-2023',
    type: 'project',
    date: '2023',
    title: 'Narrowband IR Sensors for Spectroscopy',
    subtitle: 'Collaborative Integration Challenge',
    description:
      'Designed narrow-band filters based on metal resonant nanostructures (COMSOL) to enhance measurement accuracy in a new sensing technique with microfluidic cell. Obtained transmission spectra of glucose and human blood.',
    tags: ['photonics', 'physics', 'hardware', 'software'],
    goals: ['research', 'photonics-rd'],
    highlight: true,
    url: '#',
  },
  {
    id: 'wire-plasma-2023',
    type: 'project',
    date: '2023',
    title: 'Diffraction in Wire Plasma',
    subtitle: 'Advanced Computation Task',
    description:
      'Calculated diffraction for wire plasma material using the Fabry-Perot model with multiple parametric factors. Utilized Python and Matlab for computations (Technical Electrodynamics course).',
    tags: ['physics', 'software'],
    goals: ['research', 'photonics-rd'],
    highlight: false,
    url: '#',
  },
  {
    id: 'mof-2022',
    type: 'project',
    date: '2022',
    title: 'Thermodynamics of MOF Synthesis',
    subtitle: 'Research Physics Project',
    description:
      'Investigated the influence of thermodynamic parameters on growth and structure of ZIF-8 crystals during solvothermal microwave synthesis. Analyzed samples using Raman spectroscopy and SEM.',
    tags: ['physics', 'hardware'],
    goals: ['research', 'photonics-rd'],
    highlight: false,
    url: '#',
  },
  {
    id: 'specpro-2021',
    type: 'project',
    date: '2021',
    title: 'SpecPro – Telegram Bot for Spectral Analysis',
    subtitle: 'Programming Project',
    description:
      'Developed a Telegram bot for quick interpretation of raw data from spectrography equipment. Features: Dark Field, Lumo, Map, and CIE diagram setups with scientific-based filtering. Containerized and deployed on cloud.',
    tags: ['software', 'physics', 'photonics'],
    goals: ['research', 'ml-engineer', 'photonics-rd'],
    highlight: false,
    url: '#',
  },
  {
    id: 'acoustic-2021',
    type: 'project',
    date: '2021',
    title: 'Acoustic Levitation',
    subtitle: 'Research Physics Project',
    description:
      'Explored lateral movement of particles levitating above an array of ultrasonic sources by altering their relative amplitudes. Conducted qualitative and quantitative descriptions and experimentally studied applicability limits.',
    tags: ['physics', 'hardware'],
    goals: ['research'],
    highlight: false,
    url: '#',
  },
];

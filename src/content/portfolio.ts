import type { Experience, Project } from '../types/portfolio';

export const profile = {
  name: 'Aman Sharma',
  email: 'amancodinghere@gmail.com',
  githubUrl: 'https://github.com/amancodeshere',
  linkedinUrl: 'https://www.linkedin.com/in/amancodeshere',
  location: 'Sydney, Australia',
  headline: 'Software engineering, machine learning, and research',
  biography: [
    'I am studying a Bachelor of Engineering (Honours) in Software Engineering at UNSW Sydney.',
    'My work spans full-stack software, machine learning, computer vision, and natural language processing.',
    'I am currently developing perception systems with sUNSWim Robotics and researching multi-label classification of UNSW research publications against the UN Sustainable Development Goals.',
  ],
};

export const projects: Project[] = [
  {
    slug: 'jobforge',
    title: 'JobForge',
    shortTitle: 'JobForge',
    category: 'Software engineering',
    summary: 'An agent-oriented job discovery and application platform that connects candidate evidence to ranked roles and tailored application materials.',
    description: [
      'JobForge takes a candidate’s CV, career interests, experience level, location, and job preferences to discover and rank relevant roles. It explains matches and can prepare a grounded CV and cover letter for selected positions.',
      'The project combines multi-source retrieval and query planning with deduplication, ranking, caching, and provider fallbacks. An MCP service exposes reusable tools for job search and application preparation.',
    ],
    technologies: ['Python', 'Streamlit', 'OpenAI', 'MCP', 'PostgreSQL', 'Supabase', 'Railway'],
    highlights: [
      { label: 'Search quality', value: '84.2% Precision@10 · 72.8% Recall@10 · 80.7% NDCG@10' },
      { label: 'Automated tests', value: '101' },
      { label: 'Deployment', value: 'Railway' },
    ],
    approach: [
      { title: 'Find and rank roles', body: 'Use multi-source retrieval, query planning, deduplication, and relevance ranking to produce a shortlist of opportunities.' },
      { title: 'Keep recommendations grounded', body: 'Candidate profiles and generated application materials are tied to evidence from the supplied CV and preferences.' },
      { title: 'Build for resilient searches', body: 'Progressive search, caching, and provider fallbacks help the system return useful results when a source is slow or unavailable.' },
    ],
    githubUrl: 'https://github.com/amancodeshere/JobForge',
    role: 'Developer',
    visual: 'forge',
  },
  {
    slug: 'trade-doc-navigator',
    title: 'TradeDocNavigator',
    shortTitle: 'TradeDocNavigator',
    category: 'Software engineering',
    summary: 'A full-stack UBL trade-document and shipment-tracking platform, developed with product ownership across planning, APIs, and data design.',
    description: [
      'TradeDocNavigator supports invoices, UBL despatch advice, and shipment tracking through a React and TypeScript frontend, an Express API, and PostgreSQL.',
      'The work covered roadmap planning, stakeholder communication, REST API development, database design, and live parcel-tracking workflows. The repository documents Docker and GitHub Actions workflows and Railway deployment.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'React', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Railway'],
    highlights: [
      { label: 'Role', value: 'Product Owner' },
      { label: 'Document format', value: 'UBL' },
      { label: 'Deployment', value: 'Railway' },
    ],
    approach: [
      { title: 'Model the document workflow', body: 'Designed normalised PostgreSQL schemas, migrations, indexes, and relational workflows for documents, parties, and shipments.' },
      { title: 'Connect the application', body: 'Built REST APIs and a React interface for trade documents and parcel-tracking workflows.' },
      { title: 'Support reliable delivery', body: 'Used Jest, Supertest, Docker, GitHub Actions, Railway CI/CD, and Agile workflows throughout delivery.' },
    ],
    githubUrl: 'https://github.com/amancodeshere/TradeDocNavigator',
    liveUrl: 'https://tradedocnavigator.up.railway.app',
    role: 'Product Owner',
    visual: 'trade',
  },
  {
    slug: 'job-advertisement-extraction',
    title: 'Job Advertisement Information Extraction',
    shortTitle: 'Job Ad Extraction',
    category: 'Machine learning',
    summary: 'An NLP pipeline that turns raw job-ad HTML into structured information about salary, experience, education, and role requirements.',
    description: [
      'This project explored domain-specific information extraction from job advertisements, converting raw HTML into structured JSON fields.',
      'The work compared CRF and logistic-regression baselines with fine-tuned GPT-2 and GPT-3.5 models. Weights & Biases supported experiment tracking, hyperparameter sweeps, model versioning, and reproducible comparisons.',
    ],
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'Weights & Biases', 'NLP'],
    highlights: [
      { label: 'Input', value: 'Raw job-ad HTML' },
      { label: 'Output', value: 'Structured JSON' },
      { label: 'Models compared', value: 'CRF · Logistic regression · GPT-2 · GPT-3.5' },
    ],
    approach: [
      { title: 'Extract useful fields', body: 'Structure salary, experience, education, and role requirements from job-ad content.' },
      { title: 'Compare modelling approaches', body: 'Benchmark traditional sequence and classification baselines against fine-tuned language models.' },
      { title: 'Track experiments', body: 'Use Weights & Biases to record sweeps, model versions, and comparisons reproducibly.' },
    ],
    githubNote: 'No matching public repository was found in the public GitHub account repositories or code search.',
    role: 'Developer',
    visual: 'nlp',
  },
  {
    slug: 'breast-cancer-ultrasound',
    title: 'Breast Cancer Classification and Segmentation',
    shortTitle: 'Ultrasound Analysis',
    category: 'Machine learning',
    summary: 'A deep-learning pipeline for classifying breast ultrasound images and segmenting lesions.',
    description: [
      'The project applies computer vision to breast ultrasound images, with preprocessing, augmentation, and reproducible data splits supporting both classification and segmentation tasks.',
      'The CV describes a ResNet classifier alongside U-Net and DeepLabV3 segmentation models. Evaluation included accuracy, sensitivity, and intersection over union (IoU).',
    ],
    technologies: ['Python', 'PyTorch', 'NumPy', 'Computer Vision', 'ResNet', 'U-Net', 'DeepLabV3'],
    highlights: [
      { label: 'Image type', value: 'Breast ultrasound' },
      { label: 'Tasks', value: 'Classification · Lesion segmentation' },
      { label: 'Evaluation', value: 'Accuracy · Sensitivity · IoU' },
    ],
    approach: [
      { title: 'Prepare the data', body: 'Use preprocessing, augmentation, and reproducible dataset splits for model development.' },
      { title: 'Classify images', body: 'Implement a ResNet-based classifier for ultrasound image categories.' },
      { title: 'Segment lesions', body: 'Explore U-Net and DeepLabV3 architectures and evaluate segmentation with IoU.' },
    ],
    githubUrl: 'https://github.com/amancodeshere/Breast-Cancer-Classification-and-Segmentation-Using-Deep-Learning-on-Ultrasound-Images',
    githubNote: 'The public account also contains a shorter repository variant; this link points to the full-title repository matching the CV project.',
    role: 'Project contributor',
    visual: 'medical',
  },
  {
    slug: 'hybrid-recipe-recommender',
    title: 'Hybrid Recipe Recommendation System',
    shortTitle: 'Recipe Recommender',
    category: 'Machine learning',
    summary: 'A hybrid recommendation system combining recipe content features with user–item collaborative filtering.',
    description: [
      'The recommender combines content-based and collaborative filtering to suggest recipes using recipes, ratings, reviews, ingredients, and metadata from Kaggle and Hugging Face datasets.',
      'TF-IDF features and cosine similarity support content matching, while a user–item matrix provides collaborative signals. The project was evaluated with Precision@K and Recall@K.',
    ],
    technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'TF-IDF', 'Cosine similarity', 'Recommender systems'],
    highlights: [
      { label: 'Recommendation methods', value: 'Content-based · Collaborative filtering' },
      { label: 'Data sources', value: 'Kaggle · Hugging Face' },
      { label: 'Evaluation', value: 'Precision@K · Recall@K' },
    ],
    approach: [
      { title: 'Combine recipe data', body: 'Bring together recipes, ratings, reviews, ingredients, and metadata from multiple public datasets.' },
      { title: 'Represent recipe content', body: 'Use TF-IDF and cosine similarity to find recipes with similar ingredients and descriptive features.' },
      { title: 'Blend recommendations', body: 'Combine content-based matching with collaborative filtering based on a user–item matrix.' },
    ],
    githubUrl: 'https://github.com/amancodeshere/chefGPT',
    githubNote: 'The public repository README identifies this as the Recipe Recommender System (ChefGPT).',
    role: 'Developer',
    visual: 'recipe',
  },
  {
    slug: 'toohak',
    title: 'Toohak: Real-Time Quiz Game Platform',
    shortTitle: 'Toohak',
    category: 'Software engineering',
    summary: 'A real-time multiplayer quiz platform with live sessions, synchronized host and player state, and scoring.',
    description: [
      'Toohak supports concurrent players, live quiz sessions, question delivery, response capture, and scoring.',
      'Session-based game management and WebSocket synchronization coordinate host and player state transitions, while REST APIs support quiz creation and scoring. The project used Jest, Git workflows, peer review, documentation, and CI practices.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'Express.js', 'React', 'WebSockets', 'Jest'],
    highlights: [
      { label: 'Platform', value: 'Real-time multiplayer quiz game' },
      { label: 'Coordination', value: 'WebSockets · Session-based state' },
      { label: 'Quality practices', value: 'Jest · Peer review · CI' },
    ],
    approach: [
      { title: 'Manage quiz sessions', body: 'Use session-based game management to handle hosts, players, questions, responses, and scoring.' },
      { title: 'Synchronize live play', body: 'Use WebSockets to coordinate host and player state transitions during a session.' },
      { title: 'Provide quiz APIs', body: 'Expose REST APIs for quiz creation and scoring, with Jest and CI practices supporting maintainability.' },
    ],
    githubNote: 'No matching public repository was found in the public GitHub account repositories or code search.',
    role: 'Developer',
    visual: 'quiz',
  },
  {
    slug: 'unsw-sdg-research-classification',
    title: 'Multi-Label NLP Classification of Research Publications',
    shortTitle: 'Research to SDGs',
    category: 'Research',
    summary: 'An honours thesis investigating how NLP can map UNSW research publications to the 17 United Nations Sustainable Development Goals.',
    description: [
      'This honours thesis is developing a multi-label classification system to identify which of the 17 UN Sustainable Development Goals are relevant to UNSW research publications, using research paper abstracts.',
      'The research pipeline covers dataset collection, preprocessing, model benchmarking, and refinement, while investigating deep-learning and language-model approaches.',
    ],
    technologies: ['Python', 'NLP', 'Multi-label classification', 'Deep learning', 'Language models'],
    highlights: [
      { label: 'Institution', value: 'UNSW' },
      { label: 'Supervisor', value: 'Dr Aditya Joshi' },
      { label: 'Labels', value: '17 UN Sustainable Development Goals' },
    ],
    approach: [
      { title: 'Prepare research abstracts', body: 'Build a dataset and preprocessing pipeline for scientific publication abstracts.' },
      { title: 'Benchmark models', body: 'Compare multi-label NLP approaches and refine models for identifying relevant SDGs.' },
      { title: 'Investigate language models', body: 'Explore deep-learning and language-model methods for assigning multiple goals to research text.' },
    ],
    githubUrl: 'https://github.com/amancodeshere/multi-label_classify_sdg',
    githubNote: 'The public repository describes classification of research abstracts with UN Sustainable Development Goals.',
    status: 'Sep 2026 – Present',
    role: 'Honours thesis researcher · Supervisor: Dr Aditya Joshi',
    visual: 'research',
  },
];

export const experiences: Experience[] = [
  {
    company: 'sUNSWim Robotics, UNSW',
    role: 'Software Engineer – Perception',
    location: 'Sydney, Australia',
    period: 'May 2026 – Present',
    description: 'Developing perception systems for underwater robotics competitions.',
    highlights: [
      'Developing Python computer-vision systems with YOLO and OpenCV to detect competition targets underwater.',
      'Training and evaluating object-detection models through dataset consolidation, class remapping, augmentation, and performance analysis.',
      'Optimising YOLO inference for real-time deployment on NVIDIA Jetson while balancing accuracy, latency, and compute constraints.',
      'Integrating perception outputs with ROS 2 mission and control systems in C++ across software, mechanical, and electrical teams.',
    ],
  },
  {
    company: 'Global Exchange',
    role: 'Customer Service Representative',
    location: 'Sydney, Australia',
    period: 'Oct 2025 – Jun 2026',
    description: 'Processed foreign-exchange transactions and supported customers across several channels.',
    highlights: [
      'Processed transactions across multiple currencies while maintaining accuracy and complying with AML and KYC requirements.',
      'Resolved enquiries in person, by phone, and by email while meeting customer-satisfaction and monthly performance KPIs.',
    ],
  },
  {
    company: 'Excel Academics Australia',
    role: 'Mathematics Tutor',
    location: 'Remote',
    period: 'Mar 2025 – Present',
    description: 'Tutor HSC mathematics students.',
    highlights: ['Support advanced problem-solving and critical thinking.'],
  },
  {
    company: 'WuKong Education',
    role: 'Mathematics Teacher',
    location: 'Remote',
    period: 'Feb 2025 – Jan 2026',
    description: 'Delivered online mathematics instruction.',
    highlights: ['Provided regular progress feedback to students and parents.'],
  },
];

export const education = [
  {
    institution: 'University of New South Wales',
    qualification: 'Bachelor of Engineering (Honours) in Software Engineering',
    location: 'Sydney, Australia',
    period: 'May 2023 – Present',
  },
  {
    institution: 'Auckland Grammar School',
    qualification: 'CIE A-Levels',
    location: 'Auckland, New Zealand',
    period: 'Jan 2017 – Dec 2021',
  },
];

export const skillGroups = [
  { label: 'Languages', skills: ['Python', 'C/C++', 'SQL', 'Java', 'JavaScript', 'TypeScript'] },
  { label: 'Software Engineering', skills: ['Node.js', 'Express.js', 'React', 'REST APIs', 'WebSockets', 'Git', 'Docker', 'Postman', 'CI/CD', 'Agile'] },
  { label: 'Databases and Cloud', skills: ['PostgreSQL', 'SQLite', 'AWS', 'Railway', 'Vercel'] },
  { label: 'Machine Learning', skills: ['PyTorch', 'Hugging Face Transformers', 'scikit-learn', 'NLTK', 'TF-IDF', 'Recommender Systems', 'NLP', 'Computer Vision', 'Model Evaluation', 'SageMaker'] },
  { label: 'Developer Tools', skills: ['GitHub Actions', 'GitLab CI', 'Railway', 'Vercel', 'Jupyter Notebook', 'Google Colab', 'Weights & Biases'] },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

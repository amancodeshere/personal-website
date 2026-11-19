import {
  abstractToSdgExperience,
  abstractToSdgProject,
} from "./abstract-2-sdg";
import { additionalProjects } from "./additional-projects";
import type { Experience, Project } from "../types/portfolio";

export const profile = {
  name: "Aman Sharma",
  email: "amancodinghere@gmail.com",
  githubUrl: "https://github.com/amancodeshere",
  linkedinUrl: "https://www.linkedin.com/in/amancodeshere",
  location: "Sydney, Australia",
  headline: "Software engineering, machine learning, and research",
  biography: [
    "I am studying a Bachelor of Engineering (Honours) in Software Engineering at UNSW Sydney.",
    "My work spans full-stack software, machine learning, computer vision, and natural language processing.",
    "I am currently developing perception systems with sUNSWim Robotics and researching multi-label classification of UNSW research publications against the UN Sustainable Development Goals.",
  ],
};

export const projects: Project[] = [
  {
    slug: "jobforge",
    title: "JobForge",
    shortTitle: "JobForge",
    category: "AI",
    summary:
      "An agent-oriented job discovery and application platform that connects candidate evidence to ranked roles and tailored application materials.",
    description: [
      "JobForge was built to help someone work through a job search with the information already in their CV. The workflow takes the candidate’s experience and preferences, finds relevant openings, and explains why each one made the shortlist. The candidate can then choose a role and prepare a tailored CV and cover letter.",
      "The search had to handle several everyday problems. A promising job title can hide a seniority or location mismatch. The same listing can arrive through more than one provider, and a slow source can hold up an otherwise useful search. I treated collecting, checking, and ranking the listings as engineering problems in their own right.",
    ],
    technologies: [
      "Python",
      "Streamlit",
      "OpenAI",
      "MCP",
      "PostgreSQL",
      "Supabase",
      "Railway",
    ],
    highlights: [
      {
        label: "Controlled search benchmark",
        value: "84.2% Precision@10 · 72.8% relevant recall · 80.7% NDCG@10",
      },
      { label: "Automated tests", value: "101" },
      { label: "Deployment", value: "Railway" },
    ],
    approach: [
      {
        title: "Find and rank roles",
        body: "Turn candidate preferences into queries, combine indexed discovery with direct public job boards, and normalise listings before checking eligibility, deduplicating, and scoring them.",
      },
      {
        title: "Keep recommendations grounded",
        body: "Keep the source link attached to each result and ground application materials in the supplied CV. The dashboard and MCP tools expose the workflow so candidates can review the matches and drafts.",
      },
      {
        title: "Build for resilient searches",
        body: "Stream results as independent providers finish. Give providers their own time limits and keep a labelled sample fallback so a failed live search is visible to the candidate.",
      },
    ],
    takeaways: [
      "The 30-brief regression benchmark gave me a concrete way to improve ranking. Top-ten precision moved from 50.4% to 84.2% on the same controlled cases. Two changes exposed what broad relevance scores can hide. A role asking for zero to two years of experience needed to remain eligible for early-career applicants, and Australia-wide remote roles needed to remain eligible for candidates in Australian cities.",
      "The benchmark measures ranking on a fixed corpus. Live coverage and latency depend on the providers, so I kept those questions separate and made room for partial results. That distinction made the search easier to evaluate and gave the interface a clearer way to explain what it had found.",
    ],
    references: [
      {
        label: "Search benchmark and calibration",
        href: "https://github.com/amancodeshere/JobForge/blob/main/docs/evaluation/search-baseline.md",
      },
      {
        label: "Live search design",
        href: "https://github.com/amancodeshere/JobForge/blob/main/docs/live-search.md",
      },
    ],
    githubUrl: "https://github.com/amancodeshere/JobForge",
    liveUrl: "https://jobforge-prod.up.railway.app",
    role: "Developer",
    visual: "forge",
  },
  {
    slug: "trade-doc-navigator",
    title: "TradeDocNavigator",
    shortTitle: "TradeDocNavigator",
    category: "Full stack",
    summary:
      "A full-stack UBL trade-document and shipment-tracking platform, developed with product ownership across planning, APIs, and data design.",
    description: [
      "TradeDocNavigator was built to bring invoices, despatch advice, and parcel tracking into one workflow. A user can create an invoice from line items or a Universal Business Language (UBL) order, download a UBL document, and follow a separate shipment reference when a parcel is sent.",
      "As product owner, I worked on both the roadmap and the implementation. The work involved deciding what each screen needed to communicate and ensuring that the React interface, Express API, and PostgreSQL data model agreed about the same document. A prepared despatch advice and a carrier’s latest tracking update represent different events in that workflow.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "React",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Railway",
    ],
    highlights: [
      { label: "Role", value: "Product Owner" },
      { label: "Document format", value: "UBL" },
      { label: "Deployment", value: "Railway" },
    ],
    approach: [
      {
        title: "Model the document workflow",
        body: "Model documents, parties, shipments, and their line items in PostgreSQL. The invoice view and XML export both use the persisted payable total. When the total differs from the sum of the lines, the export represents the difference as an allowance or charge.",
      },
      {
        title: "Connect the application",
        body: "Use REST APIs to create, edit, and export records. Validate invoice XML against the UBL 2.1 schema and show parcel updates through a separate tracking flow with distinct provider and demo modes.",
      },
      {
        title: "Support reliable delivery",
        body: "Use a dedicated test database to check transaction rollback, account isolation, invoice totals, and XML output. Browser tests follow the workflow from sign-in to editing, downloads, shipment references, and undoing document removal.",
      },
    ],
    takeaways: [
      "Working across planning, the API, and the database gave me practice turning a workflow into rules I could test. An invoice total has to survive creation, edits, and export consistently. An XML schema check covers the shape of the file, while rules for regulated e-invoicing would need their own validation.",
      "The integration tests taught me to check what actually persisted after a request, including what happened when a write failed or another account tried to read a document. Browser tests then checked whether a user could finish the same workflow from the interface.",
    ],
    references: [
      {
        label: "Document workflows and API",
        href: "https://github.com/amancodeshere/TradeDocNavigator#features-and-integration-limits",
      },
      {
        label: "Database integration tests",
        href: "https://github.com/amancodeshere/TradeDocNavigator/blob/main/tests/application.test.js",
      },
    ],
    githubUrl: "https://github.com/amancodeshere/TradeDocNavigator",
    liveUrl: "https://tradedocnavigator.up.railway.app",
    role: "Product Owner",
    visual: "trade",
  },
  {
    slug: "job-advertisement-extraction",
    title: "Job Advertisement Information Extraction",
    shortTitle: "Job Ad Extraction",
    category: "Machine learning",
    summary:
      "An NLP pipeline that turns raw job-ad HTML into structured information about salary, experience, education, and role requirements.",
    description: [
      "A job advertisement reads like prose, even when someone wants to compare it field by field with other listings. This project explored how to extract salary, experience, education, and role requirements from raw advertisement HTML and return them as structured JSON.",
      "The extraction task involved deciding what each field meant before comparing models. Experience can appear as a number of years or as a broader description of seniority, for example. Both can be useful to a reader, but they are different kinds of evidence for a downstream system.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Weights & Biases",
      "NLP",
    ],
    highlights: [
      { label: "Input", value: "Raw job-ad HTML" },
      { label: "Output", value: "Structured JSON" },
      {
        label: "Models compared",
        value: "CRF · GPT-2 · GPT-3.5",
      },
    ],
    approach: [
      {
        title: "Extract useful fields",
        body: "Frame extraction around a defined set of fields and an output that another program can read. HTML is the input, so the pipeline has to account for the difference between the page’s structure and the text that describes the role.",
      },
      {
        title: "Compare modelling approaches",
        body: "Compare a conditional random field baseline with fine-tuned GPT-2 and GPT-3.5 models. A sequence labelling approach tags spans in the text, while a language model can represent the extracted information in a generated response.",
      },
      {
        title: "Track experiments",
        body: "Use Weights & Biases to record hyperparameter sweeps and model versions. Keeping the run configuration with each result helps make model comparisons reproducible.",
      },
    ],
    takeaways: [
      "This work gave me practice defining the extraction target before choosing a model. A useful review asks whether the output can be parsed, whether the field means what the schema says it means, and whether its value is supported by the advertisement.",
      "Benchmarking and experiment tracking also gave me a way to separate a modelling choice from the conditions under which it was tested. A saved run can be revisited alongside its configuration when a result needs explaining or reproducing.",
    ],
    githubNote:
      "Notebooks and project work cannot be shared because they use confidential SEEK datasets.",
    role: "Developer",
    visual: "nlp",
  },
  {
    slug: "breast-cancer-ultrasound",
    title: "Breast Cancer Classification and Segmentation",
    shortTitle: "Ultrasound Analysis",
    category: "Machine learning",
    summary:
      "A deep-learning pipeline for classifying breast ultrasound images and segmenting lesions.",
    description: [
      "Our team built this research prototype to explore two questions about breast ultrasound images. Can a model classify the whole image as normal, benign, or malignant? Can a second model outline the lesion at pixel level? Both questions use the same scans, but they need different labels and different ways to assess errors.",
      "The team used a labelled ultrasound dataset containing images and lesion masks. My work included the ResNet classification pipeline and work with U-Net and DeepLabV3 for segmentation. The team report compares those approaches with other models on the same project dataset.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "NumPy",
      "Computer Vision",
      "ResNet",
      "VGG-19",
      "U-Net",
      "DeepLabV3",
    ],
    highlights: [
      { label: "Image type", value: "Breast ultrasound" },
      { label: "Tasks", value: "Classification · Lesion segmentation" },
      { label: "Evaluation", value: "Accuracy · Sensitivity · IoU" },
    ],
    approach: [
      {
        title: "Prepare the data",
        body: "Keep images aligned with their masks during resizing and preprocessing. Separate training, validation, and test data, and apply rotations, scaling, and flips only to the training split.",
      },
      {
        title: "Classify images",
        body: "Train models to assign one class to the image. The team compared ResNet-50 with VGG-19 and used validation F1 to guide the choice, with VGG-19 performing slightly better on that comparison.",
      },
      {
        title: "Segment lesions",
        body: "Train U-Net variants and DeepLabV3 to predict masks, then assess their overlap with annotated masks using intersection over union and Dice. Compare a single model with combinations of model outputs.",
      },
    ],
    takeaways: [
      "Working on both tasks gave me practice matching a metric to the question. An image classifier can choose the correct category without locating the lesion. In segmentation, even a visually plausible outline can miss part of the annotated region, so mask overlap and the example predictions tell complementary stories.",
      "The report records an IoU of 0.528 for standard U-Net and 0.617 for DeepLabV3, the strongest single segmentation model in that comparison. One ensemble reached 0.645 while a different combination scored 0.488. Those results gave me a concrete example of why a more complex approach needs to earn its place against the baseline. They describe a dataset experiment in a research prototype.",
    ],
    references: [
      {
        label: "Team report and model comparisons",
        href: "https://github.com/amancodeshere/Breast-Cancer-Classification-and-Segmentation-Using-Deep-Learning-on-Ultrasound-Images/blob/main/Breast%20Cancer%20Ultrasound%20Image%20Classification%20and%20Segmentation%20Final%20Report.pdf",
      },
    ],
    githubUrl:
      "https://github.com/amancodeshere/Breast-Cancer-Classification-and-Segmentation-Using-Deep-Learning-on-Ultrasound-Images",
    githubNote:
      "The public account also contains a shorter repository variant; this link points to the full-title repository matching the CV project.",
    role: "Project contributor",
    visual: "medical",
  },
  {
    slug: "hybrid-recipe-recommender",
    title: "Hybrid Recipe Recommendation System",
    shortTitle: "Recipe Recommender",
    category: "Machine learning",
    summary:
      "A hybrid recommendation system combining recipe content features with user–item collaborative filtering.",
    description: [
      "I built ChefGPT to explore how a recipe recommender can make useful suggestions from the ingredients and preferences it has. Someone with a rating history gives the system evidence about their tastes. A new user may only have a recipe or ingredient in mind, so the project also needed a way to match from the content itself.",
      "The ingredients, recipe descriptions, categories, reviews, and ratings came from public datasets on Kaggle and Hugging Face. Combining them was part of the modelling work. The same concept was sometimes stored as a list in one source and as text in another, and rating records carried different information from recipe records.",
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "TF-IDF",
      "Cosine similarity",
      "Recommender systems",
    ],
    highlights: [
      {
        label: "Recommendation methods",
        value: "Content-based · Collaborative filtering",
      },
      { label: "Data sources", value: "Kaggle · Hugging Face" },
      { label: "Evaluation", value: "Precision@K · Recall@K" },
    ],
    approach: [
      {
        title: "Combine recipe data",
        body: "Parse list-like strings into structured fields, clean missing values, and standardise ingredient names and units before bringing the sources together. Build ingredient and category features for recipes with usable content.",
      },
      {
        title: "Represent recipe content",
        body: "Turn ingredient and category terms into TF-IDF vectors. Use cosine similarity to find nearby recipes in that representation, giving the system a starting point when it has no rating history for a user.",
      },
      {
        title: "Blend recommendations",
        body: "Build a user–recipe rating matrix for collaborative filtering. Combine rating-based and content-based signals and inspect the top results with Precision@K, Recall@K, and sample recommendations.",
      },
    ],
    takeaways: [
      "Building both paths made cold start a concrete design problem for me. Ratings can express preferences that ingredients alone miss, but the ratings matrix has little to work with for a new user. Recipe text provides a usable starting point, and the shortlist can become more personal once rating history exists.",
      "The project also made the connection between data cleaning and recommendation quality tangible. If two ingredient names refer to the same thing, treating them as unrelated terms changes the similarity score. That gave me practice looking upstream when a shortlist feels wrong and looking at individual recommendations alongside ranking metrics.",
    ],
    references: [
      {
        label: "Data preparation and recommendation notebook",
        href: "https://github.com/amancodeshere/chefGPT/blob/main/Recipe_Recommender_System.ipynb",
      },
    ],
    githubUrl: "https://github.com/amancodeshere/chefGPT",
    githubNote:
      "The public repository README identifies this as the Recipe Recommender System (ChefGPT).",
    role: "Developer",
    visual: "recipe",
  },
  {
    slug: "toohak",
    title: "Toohak: Real-Time Quiz Game Platform",
    shortTitle: "Toohak",
    category: "Full stack",
    summary:
      "A real-time multiplayer quiz platform with live sessions, synchronized host and player state, and scoring.",
    description: [
      "Toohak was built to let a host run a quiz with multiple players in one live session. The host needs to advance questions, while players need to see the same question, submit a response, and see the score at the right point in the round.",
      "Building the multiplayer workflow meant treating a quiz as a shared sequence of states. The host and player have different screens and actions, but both views depend on which question is active and where the session is in the round. That coordination is the core of the project.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Express.js",
      "React",
      "WebSockets",
      "Jest",
    ],
    highlights: [
      { label: "Platform", value: "Real-time multiplayer quiz game" },
      { label: "Coordination", value: "WebSockets · Session-based state" },
      { label: "Quality practices", value: "Jest · Peer review · CI" },
    ],
    approach: [
      {
        title: "Manage quiz sessions",
        body: "Use session-based game management to connect hosts, players, questions, responses, and scores. Think about transitions such as moving from question delivery to collecting responses and showing the result.",
      },
      {
        title: "Synchronize live play",
        body: "Use WebSockets for live updates between Express and the React interfaces. A persistent connection lets players receive a host-driven state change as it happens, without repeatedly refreshing the page.",
      },
      {
        title: "Provide quiz APIs",
        body: "Use REST APIs for quiz creation and scoring. Support the JavaScript and TypeScript codebase with Jest, peer review, shared documentation, and continuous integration.",
      },
    ],
    takeaways: [
      "This project gave me practice reasoning about a feature from several clients’ perspectives at once. A question transition makes sense only when the host and players agree on the active question and the actions that are available. Thinking through that sequence makes it easier to write a clear interface contract.",
      "It also gave me practice choosing how clients communicate. An explicit request makes sense for creating a quiz, while shared session updates need to reach connected players as state changes. Tests and code review helped make those expectations understandable to the rest of the team.",
    ],
    githubNote: "Source code cannot be shared due to UNSW policy.",
    role: "Developer",
    visual: "quiz",
  },
  abstractToSdgProject,
  ...additionalProjects,
];

export const sunswimExperience = {
  caseStudyHref: "/experience/sunswim",
  company: "sUNSWim Robotics, UNSW",
  role: "Software Engineering Intern",
  location: "Sydney, Australia",
  period: "May 2026 – Present",
  description:
    "Developing perception systems for underwater robotics competitions.",
  highlights: [
    "Developing Python computer-vision systems with YOLO and OpenCV to detect competition targets underwater.",
    "Training and evaluating object-detection models through dataset consolidation, class remapping, augmentation, and performance analysis.",
    "Optimising YOLO inference for real-time deployment on NVIDIA Jetson while balancing accuracy, latency, and compute constraints.",
    "Integrating perception outputs with ROS 2 mission and control systems in C++ across software, mechanical, and electrical teams.",
  ],
} satisfies Experience;

export const experiences: Experience[] = [
  sunswimExperience,
  abstractToSdgExperience,
  {
    company: "Global Exchange",
    role: "Customer Service Representative",
    location: "Sydney, Australia",
    period: "Oct 2025 – Jun 2026",
    description:
      "Processed foreign-exchange transactions and supported customers across several channels.",
    highlights: [
      "Processed transactions across multiple currencies while maintaining accuracy and complying with AML and KYC requirements.",
      "Resolved enquiries in person, by phone, and by email while meeting customer-satisfaction and monthly performance KPIs.",
    ],
  },
  {
    company: "Excel Academics Australia",
    role: "Mathematics Tutor",
    location: "Remote",
    period: "Mar 2025 – Present",
    description: "Tutor HSC mathematics students.",
    highlights: ["Support advanced problem-solving and critical thinking."],
  },
  {
    company: "WuKong Education",
    role: "Mathematics Teacher",
    location: "Remote",
    period: "Feb 2025 – Jan 2026",
    description: "Delivered online mathematics instruction.",
    highlights: ["Provided regular progress feedback to students and parents."],
  },
];

export const education = [
  {
    institution: "University of New South Wales",
    qualification: "Bachelor of Engineering (Honours) in Software Engineering",
    location: "Sydney, Australia",
    period: "May 2023 – Present",
  },
  {
    institution: "Auckland Grammar School",
    qualification: "CIE A-Levels",
    location: "Auckland, New Zealand",
    period: "Jan 2017 – Dec 2021",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "C/C++", "SQL", "Java", "JavaScript", "TypeScript"],
  },
  {
    label: "Software Engineering",
    skills: [
      "Node.js",
      "Express.js",
      "React",
      "REST APIs",
      "WebSockets",
      "Git",
      "Docker",
      "Postman",
      "CI/CD",
      "Agile",
    ],
  },
  {
    label: "Databases and Cloud",
    skills: ["PostgreSQL", "SQLite", "AWS", "Railway", "Vercel"],
  },
  {
    label: "Machine Learning",
    skills: [
      "PyTorch",
      "Hugging Face Transformers",
      "scikit-learn",
      "NLTK",
      "TF-IDF",
      "Recommender Systems",
      "NLP",
      "Computer Vision",
      "Model Evaluation",
      "SageMaker",
    ],
  },
  {
    label: "Developer Tools",
    skills: [
      "GitHub Actions",
      "GitLab CI",
      "Railway",
      "Vercel",
      "Jupyter Notebook",
      "Google Colab",
      "Weights & Biases",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

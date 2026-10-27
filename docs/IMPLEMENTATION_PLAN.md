# Personal portfolio implementation plan

## Objective and evidence

Build an expressive, polished portfolio for Aman Sharma, using an ocean-blue visual direction and the level of craft of https://wodniack.dev. The result must include every distinct project and experience from both supplied CVs, individual project pages, verified project GitHub destinations where available, modular TypeScript source, and a Railway deployment.

Sources inspected on 27 October 2026:

- `/Users/aman/Desktop/Latest CVs/Aman_Sharma_CV_ml.pdf`, both pages, text and embedded URI annotations.
- `/Users/aman/Desktop/Latest CVs/Aman_Sharma_CV_swe.pdf`, both pages, text and embedded URI annotations.
- https://wodniack.dev/, document structure and rendered-page text through the web tool. The parent design investigation owns screenshots and interaction inspection. Its initial screenshot confirms a strong bordered editorial grid, a red reference palette, moving vertical/topographic lines in the upper half, a very heavy condensed all-caps hero, and small serif/sans supporting text.

Known: The union contains six technical projects, one honours thesis, four employment/teaching roles, and two education records. The CVs share a GitHub profile, LinkedIn, email, phone, and JobForge live URL. They do not provide individual repository URLs. Never derive a repository URL from a display title without checking it.

Unknown until inspection: repository availability and ownership; which academic project repositories are public; current live-demo health; personal photography or visual assets; precise reference motion, shader, and breakpoint behavior. The CLI GitHub and Jina attempts in this sandbox failed DNS. The parent agent owns connectivity and authoritative verification.

## Reference findings and design interpretation

Observed in the reference document: a minimal About / Work / Contact navigation; an oversized role-based hero; binary-digit ornament between content zones; a short biography; awards as credibility; a large work collection with numbered identifiers; personal visual material; an emphatic closing contact treatment; and an explicit contrast control. These findings are structural, not proof of animation implementation or exact visual measurements.

Translate its confidence, scale, rhythm, layered composition, and transitions into an original identity. Aman has engineering and ML evidence rather than design awards: replace an awards section with compact project evidence and a chronological experience narrative. Do not copy biography, client work, photos, exact artwork, or achievement claims.

Confirmed direction from the parent: replace the reference red with deep ocean blue and icy text, retain an original bordered editorial grid and condensed all-caps headline with smaller serif/sans contrast. Supporting direction: near-black navy surfaces, vivid ocean/cyan accents, pale ice text, large typographic contrast, thin technical rules, understated depth/grid detail, and a distinctive procedural ocean/flow hero graphic. Six work entries can use larger asymmetric compositions; avoid turning every section into identical rounded cards. Keep real text readable when decorative effects are disabled.

## Architecture decision

Confirmed baseline: Next.js 16.4.3 App Router, React 19, strict TypeScript, CSS custom properties and CSS Modules or a small global token layer. No database or CMS is needed. Prefer CSS and native browser capabilities for effects; introduce a single animation dependency only if justified by the design. Avoid a heavy canvas dependency merely for atmosphere.

```text
src/
  app/
    layout.tsx                 # metadata, fonts, shared shell
    page.tsx                   # composes home sections
    globals.css                # reset, tokens, shared helpers
    projects/[slug]/page.tsx    # generated detail routes
    not-found.tsx
  components/
    layout/                    # SiteHeader, SiteFooter, Container
    sections/                  # Hero, About, SelectedWork, Experience, Contact
    projects/                  # ProjectList, ProjectPreview, ProjectDetail
    visual/                    # OceanField or other optional visual effect
    ui/                        # reusable link, label, reveal primitives
  content/
    portfolio.ts               # exported profile, projects, experience, education, skills
  types/
    portfolio.ts               # interfaces shared by all views
  lib/
    projects.ts                # slug lookup and adjacent-project helpers, only if useful
public/
  cv/                          # supplied CV download assets if included
  images/                      # original local visuals with stable dimensions
```

Keep page files short and declarative. Shared components own repeated markup, content records own facts, visual components own effects, and tokens own colors/type/spacing. Do not build the entire site in one page file. Data should be serializable and easy to edit without touching JSX.

Suggested content contracts:

```ts
type SourceId = 'ml-cv' | 'swe-cv' | 'verified-repository';
type ExternalLink = {
  label: string;
  url: string;
  verifiedAt?: string; // record the actual successful check date
};
type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  summary: string;
  technologies: string[];
  role?: string;
  context?: string;
  highlights: string[];
  metrics?: { value: string; label: string }[];
  links: ExternalLink[];
  sources: SourceId[];
  featured: boolean;
  visualVariant: string;
};
type Experience = {
  id: string;
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string | null;
  highlights: string[];
  kind: 'engineering' | 'employment' | 'teaching';
};
```

Use explicit display dates from the CV rather than falsely precise ISO days. Include the thesis as the seventh project record (`sdg-research-classification`) with category research and ongoing status, and optionally export a derived research view. All seven project detail routes must exist. A missing public repository is represented by absence of a repository link and honest copy, never a fabricated URL or a disabled fake button.

## Content inventory: required source facts

### Identity and education

- Aman Sharma; Sydney, Australia is evidenced by current study and engineering role locations.
- Email `amancodinghere@gmail.com`; GitHub https://github.com/amancodeshere; LinkedIn https://www.linkedin.com/in/amancodeshere.
- UNSW, Bachelor of Engineering (Honours) in Software Engineering, May 2023 - Present, Sydney.
- Auckland Grammar School, CIE A-Levels, January 2017 - December 2021, Auckland, New Zealand.
- Societies: CseSoc, Outdoors Society, CMPSoc, DataSoc, EngSoc, Squash, Cricket. Present briefly if the About composition permits.

### Technical projects: six distinct entries

1. **JobForge** (`jobforge`): Python, Streamlit, OpenAI, MCP, PostgreSQL, Supabase, Railway. Agent-oriented job discovery, CV analysis, application generation, and evidence-based recommendations using reusable MCP agent tools. Multi-source retrieval, query planning, deduplication, ranking. CV reports **84.2% Precision@10**, **72.8% Recall@10**, **80.7% NDCG@10**, and **101 automated tests**. Reliability work includes progressive search, caching, provider fallbacks, user-scoped persistence. Source live URL: https://jobforge-prod.up.railway.app. Verify before publishing. Both CVs.
2. **TradeDocNavigator** (`tradedocnavigator`): JavaScript, Node.js, PostgreSQL, React, Docker, GitHub Actions, Railway. Full-stack UBL trade-document platform. Aman was Product Owner and contributed to roadmap planning, APIs, database design, stakeholder communication. Normalized schemas, migrations, indexes, JOIN-heavy document/party/shipment workflows; REST APIs and live parcel tracking. Jest, Supertest, Docker, CI/CD, Agile. Both CVs.
3. **Job Advertisement Information Extraction** (`job-ad-information-extraction`): Python, PyTorch, Hugging Face, W&B, NLP. Converts raw job-ad HTML to structured JSON for salary, experience, education, role requirements. Benchmarked CRF against fine-tuned GPT-2 and GPT-3.5. Experiment tracking, hyperparameter sweeps, model versioning, reproducible comparisons in Weights & Biases. Both CVs.
4. **Breast Cancer Classification and Segmentation** (`breast-cancer-classification-segmentation`): Python, PyTorch, NumPy, Computer Vision. Breast ultrasound classification and lesion segmentation; preprocessing, augmentation, reproducible splits. ResNet classifier, U-Net and DeepLabV3 segmentation, evaluated with accuracy, sensitivity, IoU. ML CV only. No numeric performance claims supplied.
5. **Toohak: Real-Time Quiz Game Platform** (`toohak`): JavaScript, TypeScript, Express.js, React, WebSockets, Jest. Concurrent multiplayer quiz platform with live sessions, question delivery, response capture, scoring; session management and WebSocket host/player state transitions; REST quiz creation and scoring APIs. Jest, Git, peer review, documentation and CI. SWE CV only. No user-count or latency metrics supplied.
6. **Hybrid Recipe Recommendation System** (`hybrid-recipe-recommendation`): Python, scikit-learn, Pandas, NumPy, Recommender Systems. Combines content-based and collaborative filtering; Kaggle and Hugging Face data for recipes, ratings, reviews, ingredients, metadata; TF-IDF, cosine similarity, user-item matrix. Evaluated with Precision@K and Recall@K. Both CVs. No numeric results supplied.

### Honours research

**Multi-Label NLP Classification of Research Publications**, September 2026 - Present, UNSW, supervisor Dr Aditya Joshi, Sydney. Developing classification of research abstracts against all 17 UN Sustainable Development Goals. Pipeline includes dataset collection, preprocessing, model benchmarks, refinement; investigates deep learning and language-model approaches. Use ongoing language; do not imply completed results or published research.

### Experience: four distinct entries

- **Software Engineer - Perception**, sUNSWim Robotics, UNSW, Sydney, May 2026 - Present. Python, YOLO, OpenCV for competition target detection underwater; training/evaluation through dataset consolidation, class remapping, augmentation, performance analysis; inference optimization for NVIDIA Jetson balancing accuracy/latency/compute; ROS 2 and C++ mission/control integration with multidisciplinary teams.
- **Customer Service Representative**, Global Exchange, Sydney, October 2025 - June 2026. Foreign-exchange transactions with accuracy and AML/KYC requirements; customer enquiries in person, phone, email; satisfaction and monthly KPIs. Do not invent money volumes or KPI attainment percentages.
- **Mathematics Tutor**, Excel Academics Australia, remote, March 2025 - Present. HSC mathematics, advanced problem solving, critical thinking.
- **Mathematics Teacher**, WuKong Education, remote, February 2025 - January 2026. Online mathematics instruction and regular student/parent progress feedback.

### Skills

Languages: Python, C/C++, SQL, Java, JavaScript, TypeScript. Software: Node.js, Express.js, React, REST APIs, WebSockets, Git, Docker, Postman, CI/CD, Agile. Data/cloud: PostgreSQL, SQLite, AWS, Railway, Vercel. ML: PyTorch, Hugging Face Transformers, scikit-learn, NLTK, TF-IDF, recommendation, NLP, computer vision, model evaluation, SageMaker. Tools: GitHub Actions, GitLab CI, Jupyter, Colab, Weights & Biases. Group these for scanning; do not portray every listed tool as expert proficiency.

## Concrete task split and integration contract

The parent owns orchestration, final visual direction, scaffolding/dependency decisions, reference browser investigation, credentials, Git integration, and Railway CLI deployment. The user explicitly requested a planner, implementers, and reviewer with specified model roles; this document does not authorize extra agents.

1. **Planner (this document):** deliver source inventory, architecture, task ownership, evidence boundaries, and acceptance criteria. No application source edits.
2. **Content/detail implementer:** owns `src/types/portfolio.ts`, `src/content/portfolio.ts`, `src/components/projects/`, and `src/app/projects/[slug]/page.tsx`. Populate all seven project records (six technical projects and honours research), experience, education, skills. Verify repositories by inspecting the GitHub account and actual repository contents; record title-to-URL mapping in `docs/LINK_VERIFICATION.md`. Project detail pages expose summary, role/context where evidenced, technical approach/highlights, stack, real results where supplied, external links and previous/next navigation. Use shared design tokens; coordinate any route metadata exports with parent.
3. **Home/interaction implementer:** owns `src/components/sections/`, `src/components/visual/`, and associated scoped styles. Compose expressive hero, work collection, about, experience/research, contact, accessible motion. Consume exported content, not duplicate it. Parent owns `app/page.tsx` composition unless delegated explicitly.
4. **Parent integration:** owns shared layout, navigation/footer, global tokens, package and framework configuration, assets, downloads, SEO/metadata, error page, responsive integration, build, launch and Railway deployment.
5. **Reviewer:** reviews final source and running UI for regressions, accuracy, usability, accessibility, responsive fit, visual craft, link destinations and deployment readiness. Fixes return to file owners; reviewer must not silently accept missing CV entries or invented claims.

Agree initial exports `profile`, `projects`, `research`, `experiences`, `education`, `skillGroups`; stable slugs are listed above. Parent should establish global CSS variables before parallel component work. File ownership prevents accidental overwrite. Each worker stages and commits only their own files using the requested `feat:<description>` format. Do not use `git add .` while peers are editing.

## Acceptance criteria

### Content and navigation

- All seven projects are visible on home or a clearly reachable complete work list; seven unique project URLs load directly and after refresh, including the honours research project.
- Both one-CV-only projects are included; honours thesis, all four roles, both education entries are represented.
- Homepage links and detail pages read from one typed data source. No fabricated metrics, employers, dates, credentials, screenshots, repositories, publications or user testimonials.
- Each repository CTA resolves to the actual relevant repository, not a search page or unrelated profile. Missing/private repos are explicitly tracked in verification notes and have no misleading CTA.
- Email and professional-profile links work. Project navigation, global section navigation, footer, mobile menu, contact and CV downloads have usable destinations.

### Design and interaction

- Ocean-blue palette is consistent across home and detail pages with strong text contrast and visible focus styles.
- Typography, composition, atmosphere and motion demonstrate the reference's level of intention while using original content and visuals.
- Desktop (approximately 1440 px), tablet (768 px), and narrow mobile (375 px) render without horizontal overflow, clipped headings, overlapping controls, inaccessible work items or illegible text.
- All interactive content supports keyboard and touch; no hover-only essential information. Navigation remains understandable without animation.
- `prefers-reduced-motion` removes parallax/continuous movement and keeps reveal content visible. Effects clean up listeners/animation frames and avoid sustained expensive work offscreen.
- Decorative art is hidden from assistive technology, meaningful images have accurate alt text, heading order is coherent, and buttons/links use correct semantics.

### Engineering and launch

- Strict TypeScript and production build pass. Run applicable lint/type checks defined by the chosen scaffold and targeted browser verification for routing, mobile navigation, keyboard behavior, reduced motion and external CTAs.
- Core project content and navigation remain usable if optional visual effects fail. Images have dimensions and sensible loading behavior; no large unnecessary runtime assets.
- Every route has a meaningful document title and description. Public assets contain only intended portfolio material, with no secrets, `.env`, credentials, private source documents or unrelated desktop files.
- Railway uses the assigned port, production start command and intended build command. Parent deploys with Railway CLI and verifies HTTPS home, one direct nested project URL, asset loading, and a fresh request/refresh in the deployed environment.
- Report actual deployment URL and verification outcome; do not claim deployment from a successful local build alone.

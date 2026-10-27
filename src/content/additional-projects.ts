import type { Project } from "../types/portfolio";

export const additionalProjects: Project[] = [
  {
    slug: "music-rec",
    title: "Content-Based Music Recommendation",
    shortTitle: "Music Recommendation",
    category: "Machine learning",
    summary:
      "A topic-aware music recommender that combines lyric classification with per-topic TF-IDF profiles and cosine-similarity ranking.",
    description: [
      "This coursework notebook studies a content-based recommendation pipeline over 1,500 songs labelled with five lyrical themes. It compares classical text classifiers with fine-tuned BERT models, then uses predicted topics to organise recommendation candidates.",
      "User profiles are built from keyword-selected lyrics within each topic. New songs are ranked against the matching profile by cosine similarity, with simulated user histories used to examine ranking quality and diversity.",
    ],
    technologies: [
      "Python",
      "Jupyter Notebook",
      "scikit-learn",
      "TF-IDF",
      "LinearSVC",
      "Hugging Face Transformers",
      "BERT",
      "DistilBERT",
    ],
    highlights: [
      { label: "Corpus", value: "1,500 songs · 5 topics" },
      { label: "Classification", value: "LinearSVC · BERT · DistilBERT" },
      { label: "Ranking", value: "Topic profiles · cosine similarity" },
    ],
    approach: [
      {
        title: "Prepare lyric features",
        body: "Clean and stem lyrics, combine them with track metadata, and represent text with count and TF-IDF features.",
      },
      {
        title: "Classify song themes",
        body: "Compare Naive Bayes and LinearSVC baselines with fine-tuned transformer classifiers using stratified cross-validation.",
      },
      {
        title: "Rank by user interests",
        body: "Build separate TF-IDF profiles for each topic and rank candidate songs by cosine similarity to the corresponding profile.",
      },
    ],
    githubUrl: "https://github.com/amancodeshere/Music-Rec",
    role: "Developer",
    visual: "music",
  },
  {
    slug: "data-exfiltration-prevention",
    title: "Data Exfiltration Prevention",
    shortTitle: "Data Exfiltration Prevention",
    category: "Cyber security",
    summary:
      "A Python network-monitoring prototype that captures and analyses packets, raises alerts for suspicious activity, and presents activity in a web dashboard.",
    description: [
      "AwesomeDEP monitors IPv4 TCP packets and checks each source address against a country allowlist and a blacklist, using a GeoIP lookup as part of that decision. Suspicious packets are recorded in SQLite and trigger an alert.",
      "When a suspicious packet is found, the program attempts to block outgoing traffic with macOS PF and asks for an admin or override password to restore the default firewall configuration. A Flask and Flask-SocketIO dashboard provides a view of logged activity; the README warns that the blocking behavior can interrupt internet access.",
    ],
    technologies: [
      "Python",
      "Scapy",
      "Flask",
      "Flask-SocketIO",
      "SQLite",
      "HTML",
    ],
    highlights: [
      { label: "Monitoring", value: "Packet capture and analysis" },
      { label: "Response", value: "Suspicious-activity alerts" },
      { label: "Visibility", value: "Web dashboard · SQLite" },
    ],
    approach: [
      {
        title: "Observe network traffic",
        body: "Capture packets with Scapy and inspect network activity for patterns that may warrant attention.",
      },
      {
        title: "Record and alert",
        body: "Store network activity in SQLite and surface suspicious events through the alerting workflow.",
      },
      {
        title: "Review activity",
        body: "Use a Flask and Socket.IO dashboard to monitor and visualise recorded network events.",
      },
    ],
    githubUrl: "https://github.com/amancodeshere/Data-Exfiltration-Prevention",
    role: "Developer",
    visual: "security",
  },
  {
    slug: "sudo-win",
    title: "sudo_win",
    shortTitle: "sudo_win",
    category: "Competitions",
    summary:
      "A C++20 UNSW Battlecode bot using remembered-map routing, survival search, and coordinated rescue and resource strategies.",
    description: [
      "sudo_win is a feature-organised C++20 UNSW Battlecode bot. Its current strategy uses persistent map memory, remembered pearl and frontier routing, body-aware survival search, and validated sprint and rescue-split decisions.",
      "Stable and experimental strategy profiles keep routing changes and population-expansion ideas separate. CMake and Catch2 support regression tests, while sandbox benchmarks and replay reviews guide strategy iteration.",
    ],
    technologies: [
      "C++20",
      "UNSW Battlecode",
      "unswbc 1.2.5",
      "CMake",
      "Catch2",
      "Pathfinding",
    ],
    highlights: [
      { label: "Competition", value: "UNSW Battlecode" },
      { label: "Language", value: "C++20" },
      { label: "Strategy", value: "Map memory · survival · rescue splits" },
    ],
    approach: [
      {
        title: "Navigate from remembered state",
        body: "Use persistent map memory with remembered pearl and frontier routes to plan movement across partially observed game maps.",
      },
      {
        title: "Prioritise survival",
        body: "Use body-aware survival search and validated escape and sprint decisions to manage movement risk.",
      },
      {
        title: "Coordinate resources",
        body: "Apply rescue splits and resource-aware strategies while keeping experimental strategy profiles distinct from the stable profile.",
      },
    ],
    githubUrl: "https://github.com/amancodeshere/sudo_win",
    role: "Developer",
    visual: "battlecode",
  },
  {
    slug: "botfluencer",
    title: "Botfluencer",
    shortTitle: "Botfluencer",
    category: "Competitions",
    summary:
      "A Capture the Narrative 2026 team workspace with a durable Python and PostgreSQL baseline for future bot strategies.",
    description: [
      "Botfluencer provides a team-oriented foundation for Capture the Narrative 2026. The repository pins the official SDK and describes async adapters that follow its wire contracts, with Railway-hosted PostgreSQL as the durable data layer.",
      "Its documented default combines mock inputs, replay, and a no-op action mode: fixture observations can be persisted without generating drafts or taking actions. Real publishing is unavailable in this baseline.",
    ],
    technologies: [
      "Python 3.13",
      "uv",
      "PostgreSQL",
      "Railway",
      "Capture the Narrative SDK 0.5.0",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "pytest",
      "Ruff",
      "mypy",
    ],
    highlights: [
      { label: "Competition", value: "Capture the Narrative 2026" },
      { label: "Default mode", value: "Mock · replay · no-op" },
      { label: "Data layer", value: "Railway-hosted PostgreSQL" },
    ],
    approach: [
      {
        title: "Follow the SDK contract",
        body: "Pin the official competition SDK and shape async adapters around its documented wire contracts.",
      },
      {
        title: "Make development safe by default",
        body: "Use mock observations, replay, and no-op actions so fixture data can be exercised without publishing or acting.",
      },
      {
        title: "Persist a team baseline",
        body: "Use a shared PostgreSQL service and documented checks to support future strategy work and team operations.",
      },
    ],
    githubUrl: "https://github.com/amancodeshere/botfluencer",
    role: "Developer",
    visual: "botfluencer",
  },
  {
    slug: "spin-the-block",
    title: "Spin the Block",
    shortTitle: "Spin the Block",
    category: "Games",
    summary:
      "An online multiplayer property game with private rooms, custom city boards, team play, and server-enforced rent shootouts.",
    description: [
      "Spin the Block is a complete online property game built around private invite rooms, public matchmaking, bots, auctions, trades, and configurable rules. Players move across original city boards, claim districts, collect rent, and negotiate with other crews.",
      "The React and Vite client connects to an Express and Socket.IO server with a shared game engine. The server controls game state and validates actions, while room snapshots support recovery after a restart. The README documents a live Railway deployment.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Socket.IO",
      "Railway",
    ],
    highlights: [
      { label: "Multiplayer", value: "Private rooms · public play · bots" },
      { label: "Gameplay", value: "Property strategy · rent shootouts" },
      { label: "Boards", value: "Original city maps · custom maps" },
    ],
    approach: [
      {
        title: "Build the shared game loop",
        body: "Connect a React and Vite client to an Express and Socket.IO service for room-based multiplayer play.",
      },
      {
        title: "Keep game rules authoritative",
        body: "Run dice, movement, legal actions, trades, and duel decisions on the server with a shared game engine.",
      },
      {
        title: "Support persistent rooms",
        body: "Save room snapshots and restore them after restarts, with Railway configuration for the production service.",
      },
    ],
    githubUrl: "https://github.com/amancodeshere/spin-the-block",
    liveUrl: "https://spin-the-block-production.up.railway.app",
    role: "Developer",
    visual: "block",
  },
  {
    slug: "midnight-run",
    title: "Midnight Run",
    shortTitle: "Midnight Run",
    category: "Games",
    summary:
      "An original arcade pinball game with a fixed-step physics simulation, illustrated night-drive table, and verified score runs.",
    description: [
      "Midnight Run is a fully playable pinball game inspired by late-1980s arcade machines. It pairs an original illustrated playfield and synthesized sound with keyboard and touch controls, multiball, lane bonuses, and a persistent local personal best.",
      "The game advances its rules and physics at fixed high frequencies independent of rendering. For ranked games, the server issues a seeded run ticket and replays recorded inputs to compute the authoritative score; PostgreSQL stores player names and verified results in production.",
    ],
    technologies: [
      "JavaScript",
      "HTML Canvas",
      "Node.js",
      "PostgreSQL",
      "Custom physics simulation",
      "Web Audio API",
    ],
    highlights: [
      { label: "Game", value: "Original arcade pinball" },
      { label: "Simulation", value: "240 Hz rules · 480 Hz collision steps" },
      { label: "Score integrity", value: "Server replay verification" },
    ],
    approach: [
      {
        title: "Simulate the table",
        body: "Advance physics at deterministic fixed steps, including ball motion, flippers, collisions, and table features.",
      },
      {
        title: "Connect play to scoring",
        body: "Model lanes, targets, multiball, saves, tilt, and bonus as a deterministic game lifecycle.",
      },
      {
        title: "Verify ranked runs",
        body: "Record player inputs against a server-issued seed and replay them server-side before accepting a score.",
      },
    ],
    githubUrl: "https://github.com/amancodeshere/pinball",
    role: "Developer",
    visual: "pinball",
  },
];

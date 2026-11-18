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
      "This coursework project explored whether the themes in song lyrics could be useful for discovery. The notebook uses 1,500 songs with five topic labels and asks two questions. Can a model identify the theme from the text? Can those themes help the system rank songs for someone with particular interests?",
      "The distinction matters because topic classification and recommendation serve different purposes. Predicting that two songs share a theme gives the recommender a candidate set. The user profile then provides the information needed to rank songs within that set.",
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
        body: "Clean and stem lyrics, then compare count and TF-IDF representations. The preprocessing gives classical classifiers a vocabulary they can work with and lets the notebook test the effect of vocabulary size.",
      },
      {
        title: "Classify song themes",
        body: "Compare Naive Bayes and LinearSVC with fine-tuned BERT and DistilBERT. Use stratified cross-validation and macro metrics so the smaller topic classes still matter in the comparison.",
      },
      {
        title: "Rank by user interests",
        body: "Build separate TF-IDF profiles from keyword-selected lyrics in each topic. Rank new songs by cosine similarity to the relevant profile, then evaluate the order and diversity of the shortlist in a simulated listening history.",
      },
    ],
    takeaways: [
      "On this dataset, the TF-IDF and LinearSVC baseline was competitive with the fine-tuned transformers. That gave me an example of a model choice where dataset size, label granularity, and compute mattered as much as the name of the architecture. The classifier chosen for the recommender was one the notebook had already tested.",
      "Limiting each profile to its highest-weighted terms also affected simulated users differently. A short profile was enough for some histories, while one benefited from keeping all terms. That comparison helped me see why tuning the classifier and evaluating the final ranking are separate jobs.",
    ],
    references: [
      {
        label: "Classifier comparisons and simulated ranking results",
        href: "https://github.com/amancodeshere/Music-Rec/blob/main/README.md",
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
      "AwesomeDEP was built as a defensive prototype for making suspicious network activity visible and responding to it. The project connects packet observation to a decision, an alert, and a dashboard where someone can review what was recorded.",
      "The monitor operates on IPv4 TCP packets and uses source IP rules, including a GeoIP-based country allowlist and an IP blacklist. Those signals are useful for triage and provide limited context about the traffic itself. The prototype made it possible to follow the rule decision through to the event an operator would see.",
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
        body: "Capture packets with Scapy, inspect the source address of IPv4 TCP traffic, and evaluate it against the configured rules.",
      },
      {
        title: "Record and alert",
        body: "Store flagged activity in SQLite and raise an alert. The macOS PF response attempts to interrupt outbound traffic, and the documented recovery flow gives the user a way to restore access.",
      },
      {
        title: "Review activity",
        body: "Use Flask and Flask-SocketIO to give the recorded events a browser view, so someone can review activity without watching the packet capture directly.",
      },
    ],
    takeaways: [
      "The project gave me practice tracing a defensive signal through capture, a rule decision, persistence, and operator feedback. The dashboard matters because the person reviewing an alert needs a record of the decision after the packet is gone.",
      "The README’s warning about interrupted internet access captures the main trade-off. A coarse IP rule can trigger a broad response, which makes false positives and recovery part of the design. Working through that response made the operational cost of a rule as important to consider as the detection itself.",
    ],
    references: [
      {
        label: "Packet monitor and rule decisions",
        href: "https://github.com/amancodeshere/Data-Exfiltration-Prevention/blob/main/network_monitor/main.py",
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
      "Our team built sudo_win for UNSW Battlecode, where a bot has to make decisions from an incomplete view of the board and under a per-turn compute budget. It needs to find resources, keep its own units alive, and respond when an opponent or a changing board makes a promising route unsafe.",
      "The project developed from writing individual movement strategies into evaluating how they interact over a whole match. The C++20 code separates map memory, routing, survival, resource decisions, and other features. The replay reviews document the cases that justified revisiting those strategies.",
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
        body: "Use remembered positions of pearls and unexplored frontiers to plan across a partly visible map. When a portal exit is outside current vision, distinguish a remembered observation from what the bot can currently confirm.",
      },
      {
        title: "Prioritise survival",
        body: "Consider body geometry and possible escape moves alongside route length. Test sprint, splitting, and collision scenarios in isolation, then exercise the complete bot under the judge sandbox’s compute budget.",
      },
      {
        title: "Use replays to choose the next change",
        body: "Compare strategies across maps, seeds, and both sides. Replay reviews look at how a loss developed, and the benchmark reports resource use and runtime failures alongside match outcomes.",
      },
    ],
    takeaways: [
      "One uploaded-version review found that the recorded self- and other-body collisions had no visibly safe first step in the final observation. That moved the question earlier in the replay. When did the route commit the bot to a position it could no longer escape?",
      "The later validation notes also record mixed competitive results for a candidate that passed correctness checks. This was useful practice in separating evidence that a change behaves as intended from evidence that it improves play. Keeping the baseline and reviewing losses made both judgments more concrete.",
    ],
    references: [
      {
        label: "Replay review and routing failures",
        href: "https://github.com/amancodeshere/sudo_win/blob/main/algo_bot/REPLAY_V3_REVIEW.md",
      },
      {
        label: "Sandbox benchmarks and validation",
        href: "https://github.com/amancodeshere/sudo_win/tree/main/algo_bot",
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
      "We built Botfluencer as a shared engineering workspace for Capture the Narrative 2026. The team needed a repeatable environment where contributors could work on competition strategies and inspect their behaviour using the same platform contracts, configuration, and saved observations.",
      "The baseline runs with mock inputs, replay, and a no-op action mode. This makes it possible to exercise the software and record fixture observations in PostgreSQL before using any separately gated competition workflows. The project’s architecture also documents how the team handled worker ownership and interrupted work.",
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
        body: "Pin the competition SDK and isolate its wire contracts behind asynchronous adapters. Keep platform calls, strategy decisions, persistence, and operator reporting in separate parts of the application.",
      },
      {
        title: "Make development safe by default",
        body: "Use fixtures and replay to examine software behaviour repeatedly. Make no-op the default, and run database tests against a dedicated database so test runs and application records remain isolated.",
      },
      {
        title: "Persist a team baseline",
        body: "Deduplicate observations in PostgreSQL and persist work status so the application can recover after a restart. Record interrupted actions as unknown until there is evidence about the outcome.",
      },
    ],
    takeaways: [
      "The recovery model gave me practice thinking about the difference between a failed request and an unknown outcome. A worker can stop after an external service accepts a request but before the result is recorded. Keeping that state explicit prevents a restart from treating every interrupted action as a routine retry.",
      "The project also gave me practice defining what a test actually demonstrates. A replay can show that the code behaves consistently on a known input, and a dedicated database can expose persistence errors. Those checks measure software behaviour. Competition outcomes are a separate question.",
    ],
    references: [
      {
        label: "Architecture, replay, and recovery",
        href: "https://github.com/amancodeshere/botfluencer/blob/main/docs/architecture.md",
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
      "I built Spin the Block around the idea of an online property game friends could join in a private room, with public play and bots when a group is short a player. Original city boards, auctions, trades, and configurable rules make the board a shared space for decisions between turns.",
      "An online table adds work beyond implementing the rules. Players need to see the same outcome, know whose turn it is, and be able to recover their seat after a disconnect. The board, current action, and other players are also competing for screen space on a phone.",
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
        body: "Connect a React and Vite client to an Express and Socket.IO server. Use the room to coordinate players, bots, and spectators while the shared engine resolves the rules.",
      },
      {
        title: "Keep game rules authoritative",
        body: "Keep dice rolls, movement, legal actions, and trades server-side. The browser displays the result and asks to make the next move. The engine can test rule decisions without going through the UI.",
      },
      {
        title: "Support persistent rooms",
        body: "Save room snapshots to a persistent volume and use saved seat credentials to restore a connection to the same room. The documented deployment coordinates rooms in memory on one replica, with disk snapshots for restart recovery.",
      },
    ],
    takeaways: [
      "The playtest makes the difference between correct rules and a good turn clear. One audit reproduced a rapid series of roll clicks that resolved as one roll and restored a player’s seat after a reload. The same report found that bids could keep resetting the auction clock, stretching an otherwise valid turn.",
      "A later viewport audit documented that a mobile player could see the main turn control while the board sat well below the fold. These checks gave me practice evaluating the whole player experience and turning issues into specific changes to investigate, alongside engine and multiplayer integration tests.",
    ],
    references: [
      {
        label: "Gameplay and reconnection playtest",
        href: "https://github.com/amancodeshere/spin-the-block/blob/main/game-audit/02_PLAYTEST_REPORT.md",
      },
      {
        label: "Desktop and mobile viewport audit",
        href: "https://github.com/amancodeshere/spin-the-block/blob/main/LEAD_GAME_DESIGNER_PHASE4_REPORT.md",
      },
      {
        label: "Multiplayer integration tests",
        href: "https://github.com/amancodeshere/spin-the-block/blob/main/tests/multiplayer.test.js",
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
      "I built Midnight Run to bring the feel of late-1980s arcade pinball into a browser with an original night-drive table. The illustrated playfield, synthesized sounds, and dot-matrix display are part of that feel. Flipper response, ball movement, and consistent table rules are what make it playable.",
      "Pinball gave me two related problems to work on. The simulation had to behave consistently even when the screen rendered at a different rate, and a ranked score needed evidence the server could check. Both problems depended on making the same game repeatable.",
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
        body: "Run inputs and rules at 240 Hz and use 480 Hz collision substeps. Render separately and interpolate positions between simulation updates so visual frame rate can vary independently of the game clock.",
      },
      {
        title: "Connect play to scoring",
        body: "Keep scoring and table rules separate from drawing and sound. Test how lane bonuses, target locks, multiball, ball saves, and tilt interact over a full game.",
      },
      {
        title: "Verify ranked runs",
        body: "Issue a seed and run ticket, record the player’s inputs against simulation ticks, and replay them on the server to compute the score. Store verified results in PostgreSQL.",
      },
    ],
    takeaways: [
      "A fixed clock was useful for both play feel and verification. Pausing can freeze simulated time without changing the render loop, and a replay can run from the same seed and reproduce a completed game. The tests check that a supplied score does not affect the replay’s result.",
      "A physics change also changes what old inputs mean. The project preserves earlier engines so a ticket issued before an upgrade can still be replayed with the rules and geometry it started with. That gave me a practical example of version compatibility tied to a real user workflow.",
    ],
    references: [
      {
        label: "Table rules and fixed-step physics",
        href: "https://github.com/amancodeshere/pinball#physics",
      },
      {
        label: "Score replay and compatibility tests",
        href: "https://github.com/amancodeshere/pinball/blob/main/tests/replay.test.mjs",
      },
    ],
    githubUrl: "https://github.com/amancodeshere/pinball",
    role: "Developer",
    visual: "pinball",
  },
];

import { test } from "node:test";
import assert from "node:assert/strict";

const base = process.env.TEST_BASE_URL ?? "http://localhost:3000";
const cases = [
  ["/", "Aman Sharma"],
  ["/projects", "JobForge"],
  ["/about", "Auckland Grammar"],
  ["/experience", "WuKong"],
  ["/projects/jobforge", "84.2%"],
  ["/projects/trade-doc-navigator", "Product Owner"],
  ["/projects/job-advertisement-extraction", "GPT-2"],
  ["/projects/breast-cancer-ultrasound", "DeepLabV3"],
  ["/projects/hybrid-recipe-recommender", "Precision@K"],
  ["/projects/toohak", "WebSocket"],
  ["/projects/unsw-sdg-research-classification", "Aditya Joshi"],
  ["/projects/music-rec", "1,500 songs"],
  ["/projects/data-exfiltration-prevention", "Scapy"],
  ["/projects/sudo-win", "C++20"],
  ["/projects/botfluencer", "Capture the Narrative 2026"],
  ["/projects/spin-the-block", "Socket.IO"],
  ["/projects/midnight-run", "480 Hz"],
  ["/projects/games", "Games"],
];

for (const [path, evidence] of cases) {
  test(`direct request ${path} serves its CV evidence and page title`, async () => {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200, `${path} HTTP status`);
    const html = await response.text();
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.ok(html.includes(evidence), `Missing evidence: ${evidence}`);
    assert.match(html, /<main[\s>]/);
    assert.doesNotMatch(
      html,
      /<figcaption[\s>]/,
      "Project image caption bars must not render",
    );
    if (path === "/projects/job-advertisement-extraction") {
      assert.doesNotMatch(
        html,
        /logistic[-\s]*regression/i,
        "Removed model reference must not return",
      );
    }
    const emails = [...html.matchAll(/href="mailto:([^"?]+)[^"]*"/g)].map(
      (match) => match[1],
    );
    assert.ok(emails.length > 0, "Public contact link is missing");
    assert.ok(
      emails.every((email) => email === "amancodinghere@gmail.com"),
      "Unexpected public contact address",
    );
  });
}

for (const [slug, reason] of [
  ["toohak", "Source code cannot be shared due to UNSW policy."],
  [
    "job-advertisement-extraction",
    "Notebooks and project work cannot be shared because they use confidential SEEK datasets.",
  ],
]) {
  test(`${slug} respects the owner's source-sharing restriction`, async () => {
    const html = await (await fetch(new URL(`/projects/${slug}`, base))).text();
    assert.ok(html.includes(reason));
    assert.doesNotMatch(html, /VIEW SOURCE ON GITHUB|OPEN LIVE PROJECT/);
    assert.doesNotMatch(
      html,
      /href="https:\/\/github\.com\/amancodeshere\/(?:Toohak|toohak|job-advertisement-extraction)"/,
    );
  });
}

test("unknown project returns a real 404", async () => {
  const response = await fetch(new URL("/projects/nonexistent-project", base));
  assert.equal(response.status, 404);
});

test("project image assets ship with the standalone application", async () => {
  const paths = [
    "/projects/jobforge-results.webp",
    "/projects/tradedocnavigator-live.webp",
    "/projects/ultrasound-segmentation-examples.png",
    "/projects/recipe-food.webp",
    "/projects/spin-the-block.webp",
    "/projects/midnight-run.webp",
    "/projects/sudo-win-battlecode-board.webp",
    "/projects/ctn-official-competition.webp",
  ];
  await Promise.all(
    paths.map(async (path) => {
      const response = await fetch(new URL(path, base));
      assert.equal(response.status, 200, `Missing project image: ${path}`);
      assert.match(response.headers.get("content-type") ?? "", /^image\//);
      assert.ok(
        (await response.arrayBuffer()).byteLength > 1000,
        `Empty project image: ${path}`,
      );
    }),
  );
});

const categorizedProjects = [
  ["jobforge", "AI", "JobForge"],
  ["music-rec", "Machine learning", "Music-Rec"],
  [
    "data-exfiltration-prevention",
    "Cyber security",
    "Data-Exfiltration-Prevention",
  ],
  ["sudo-win", "Competitions", "sudo_win"],
  ["botfluencer", "Competitions", "botfluencer"],
  ["spin-the-block", "Games", "spin-the-block"],
  ["midnight-run", "Games", "pinball"],
];

test("projects have the requested categories and exact source links", async () => {
  await Promise.all(
    categorizedProjects.map(async ([slug, category, repository]) => {
      const html = await (
        await fetch(new URL(`/projects/${slug}`, base))
      ).text();
      assert.ok(
        html.includes(`<span>${category}</span>`),
        `${slug}: missing category`,
      );
      assert.ok(
        html.includes(`href="https://github.com/amancodeshere/${repository}"`),
        `${slug}: missing source`,
      );
    }),
  );
});

test("homepage and default catalogue keep Games opt-in", async () => {
  const [homeResponse, projectsResponse] = await Promise.all([
    fetch(new URL("/", base)),
    fetch(new URL("/projects", base)),
  ]);
  const [homeHtml, projectsHtml] = await Promise.all([
    homeResponse.text(),
    projectsResponse.text(),
  ]);
  assert.ok(homeHtml.includes('href="/projects/games"'));
  assert.ok(projectsHtml.includes('href="/projects/games"'));
  assert.match(projectsHtml, /Games\s*<span>2<\/span>/);
  assert.match(projectsHtml, /All\s*<span>11<\/span>/);
  assert.doesNotMatch(projectsHtml, /aria-pressed="false"[^>]*>Games/);

  const gameSlugs = ["spin-the-block", "midnight-run"];
  for (const html of [homeHtml, projectsHtml]) {
    for (const slug of gameSlugs) {
      assert.doesNotMatch(html, new RegExp(`href="/projects/${slug}"`));
    }
  }

  const cardSlugs = new Set(
    [...projectsHtml.matchAll(/href="\/projects\/([^"/?]+)"/g)]
      .map((match) => match[1])
      .filter((slug) => slug !== "games"),
  );
  assert.equal(cardSlugs.size, 11);
  const categories = [
    ...projectsHtml.matchAll(
      /<h2[^>]*class="catalogue-heading"[^>]*>([^<]+)<\/h2>/g,
    ),
  ].map((match) => match[1]);
  assert.equal(categories.length, 6);
  assert.ok(!categories.includes("Games"));
});

test("Games topic lists only its two projects and links back to Projects", async () => {
  const html = await (await fetch(new URL("/projects/games", base))).text();
  assert.ok(html.includes('href="/projects">Back to Projects'));
  const gameSlugs = new Set(
    [...html.matchAll(/href="\/projects\/([^"/?]+)"/g)].map(
      (match) => match[1],
    ),
  );
  assert.deepEqual([...gameSlugs].sort(), ["midnight-run", "spin-the-block"]);
  assert.ok(html.includes("Midnight Run"));
  assert.ok(html.includes("Spin the Block"));
});

test("detail navigation stays within its visible project collection", async () => {
  const [
    regularResponse,
    lastRegularResponse,
    gameResponse,
    otherGameResponse,
  ] = await Promise.all([
    fetch(new URL("/projects/jobforge", base)),
    fetch(new URL("/projects/botfluencer", base)),
    fetch(new URL("/projects/spin-the-block", base)),
    fetch(new URL("/projects/midnight-run", base)),
  ]);
  const [regularHtml, lastRegularHtml, gameHtml, otherGameHtml] =
    await Promise.all([
      regularResponse.text(),
      lastRegularResponse.text(),
      gameResponse.text(),
      otherGameResponse.text(),
    ]);
  assert.ok(
    regularHtml.includes(
      'class="next-project" href="/projects/trade-doc-navigator"',
    ),
  );
  assert.doesNotMatch(
    regularHtml,
    /class="next-project" href="\/projects\/(?:spin-the-block|midnight-run)"/,
  );
  assert.ok(
    lastRegularHtml.includes('class="next-project" href="/projects/jobforge"'),
  );
  assert.doesNotMatch(
    lastRegularHtml,
    /href="\/projects\/(?:spin-the-block|midnight-run)"/,
  );
  assert.ok(gameHtml.includes('href="/projects/games">GAMES</a>'));
  assert.ok(
    gameHtml.includes('class="next-project" href="/projects/midnight-run"'),
  );
  assert.ok(
    otherGameHtml.includes(
      'class="next-project" href="/projects/spin-the-block"',
    ),
  );
});

test("archive exposes six non-game discipline sections and 11 project links", async () => {
  const html = await (await fetch(new URL("/projects", base))).text();
  for (const category of [
    "Full stack",
    "AI",
    "Machine learning",
    "Research",
    "Cyber security",
    "Competitions",
  ]) {
    assert.ok(
      html.includes(`>${category}</h2>`),
      `Missing category section: ${category}`,
    );
  }
  const links = new Set(
    [...html.matchAll(/href="(\/projects\/[^"?]+)"/g)]
      .map((match) => match[1])
      .filter((href) => href !== "/projects/games"),
  );
  assert.equal(links.size, 11);
});

test("competition previews use actual Battlecode and official CTN images", async () => {
  for (const [slug, asset] of [
    ["sudo-win", "sudo-win-battlecode-board.webp"],
    ["botfluencer", "ctn-official-competition.webp"],
  ]) {
    const html = await (await fetch(new URL(`/projects/${slug}`, base))).text();
    assert.ok(html.includes(asset), `${slug}: missing real competition image`);
    assert.doesNotMatch(html, /Illustrative remembered map|Observation ledger/);
  }
});

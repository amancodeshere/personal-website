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

const newProjects = [
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

test("new projects have the requested categories and exact source links", async () => {
  await Promise.all(
    newProjects.map(async ([slug, category, repository]) => {
      const html = await (
        await fetch(new URL(`/projects/${slug}`, base))
      ).text();
      assert.ok(html.includes(category), `${slug}: missing category`);
      assert.ok(
        html.includes(`href="https://github.com/amancodeshere/${repository}"`),
        `${slug}: missing source`,
      );
    }),
  );
});

test("archive exposes the new discipline sections and all 13 project links", async () => {
  const html = await (await fetch(new URL("/projects", base))).text();
  for (const category of ["Cyber security", "Competitions", "Games"]) {
    assert.ok(
      html.includes(`>${category}</h2>`),
      `Missing category section: ${category}`,
    );
  }
  const links = new Set(
    [...html.matchAll(/href="(\/projects\/[^"?]+)"/g)].map((match) => match[1]),
  );
  assert.equal(links.size, 13);
});

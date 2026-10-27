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

for (const slug of ["toohak", "job-advertisement-extraction"]) {
  test(`${slug} respects the owner's source-sharing restriction`, async () => {
    const html = await (await fetch(new URL(`/projects/${slug}`, base))).text();
    assert.ok(
      html.includes(
        "Source code and deployment are no longer available to share.",
      ),
    );
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

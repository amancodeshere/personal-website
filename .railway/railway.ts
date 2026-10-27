import { defineRailway, project, service } from "railway/iac";
// This repository manages only its own resources in the environment. Other
// repositories export their own partial name.
// See https://docs.railway.com/infrastructure-as-code#multi-repo-projects
export const partial = "portfolio";
export default defineRailway(() => {
  const portfolio = service("portfolio", {
    build: {
      buildEnvironment: "V3",
      builder: "DOCKERFILE",
      dockerfilePath: "Dockerfile",
    },
    healthcheck: "/",
    healthcheckTimeout: 120,
    replicas: { "us-west2": 1 },
  });

  return project("aman-sharma-portfolio", {
    variables: { managed: false },
    resources: [portfolio],
  });
});

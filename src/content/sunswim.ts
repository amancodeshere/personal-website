import { sunswimExperience } from "./portfolio";

export const sunswim = {
  experience: sunswimExperience,
  title: "sUNSWim Robotics",
  summary:
    "Teaching an underwater robot to see, act on what it sees, and show its work to the people at the surface.",
  cover: {
    src: "/experience/sunswim/gate.webp",
    alt: "A cyan gate detection box over a competition gate on the floor of a blue pool",
    width: 960,
    height: 960,
    caption: "Gate prediction on a validation frame",
  },
  evaluation: [
    {
      src: "/experience/sunswim/flares.webp",
      alt: "Two flare predictions at different distances in a tiled pool",
      width: 960,
      height: 960,
      caption: "Two flare predictions against pool markings",
    },
    {
      src: "/experience/sunswim/pool-gate.webp",
      alt: "A bounding box around the upper part of a close-up gate in the UNSW pool",
      width: 960,
      height: 540,
      caption: "Close-up gate prediction from the UNSW pool",
    },
  ],
  dashboard: {
    src: "/experience/sunswim/dashboard.webp",
    alt: "The sUNSWim dashboard showing the approach phase, depth, heading, battery, camera overlay and a position estimate warning",
    width: 1440,
    height: 1030,
    caption:
      "The team’s qualifier dashboard in sample mode, with recorded simulator data and example estimates.",
  },
  chapters: [
    ["perception", "Perception"],
    ["mission-control", "Mission & control"],
    ["dashboard", "Operator dashboard"],
    ["reflections", "Reflections"],
  ],
} as const;

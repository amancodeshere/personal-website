import { sunswim } from "../../content/sunswim";
import { AbstractToSdgFeature } from "../case-studies/AbstractToSdgFeature";
import { CaseStudyFeature } from "../case-studies/CaseStudyFeature";

export function ExperienceFeatures({ heading }: { heading?: "h2" | "h3" }) {
  const { title, cover, experience } = sunswim;

  return (
    <div className="experience-features">
      <CaseStudyFeature
        title={title}
        href={experience.caseStudyHref}
        role={experience.role}
        period={experience.period}
        summary="Underwater object detection, mission software and the dashboard we built to see what the robot was doing."
        cover={cover}
        heading={heading}
      />
      <AbstractToSdgFeature section="experience" heading={heading} />
    </div>
  );
}

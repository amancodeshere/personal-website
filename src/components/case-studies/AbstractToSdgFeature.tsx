import {
  abstractToSdgCover,
  abstractToSdgExperience,
  thesisProjectHref,
  thesisTitle,
} from "../../content/abstract-2-sdg";
import { CaseStudyFeature } from "./CaseStudyFeature";

export function AbstractToSdgFeature({
  section,
  heading,
}: {
  section: "experience" | "projects";
  heading?: "h2" | "h3";
}) {
  const { caseStudyHref, role, period } = abstractToSdgExperience;

  return (
    <CaseStudyFeature
      title={thesisTitle}
      href={section === "experience" ? caseStudyHref : thesisProjectHref}
      role={role}
      period={period}
      summary={
        section === "experience"
          ? abstractToSdgExperience.description
          : "A proposed catalogue where readers can find UNSW papers by sustainability goal and authors can review the tags on their work."
      }
      cover={abstractToSdgCover}
      heading={heading}
    />
  );
}

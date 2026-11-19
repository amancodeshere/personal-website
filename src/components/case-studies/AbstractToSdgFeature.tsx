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
      summary="Mapping UNSW research to the Sustainable Development Goals, from the first model experiments to a catalogue shaped by author review."
      cover={abstractToSdgCover}
      heading={heading}
    />
  );
}

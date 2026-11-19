import type { Metadata } from "next";
import { AbstractToSdgCaseStudy } from "../../../components/case-studies/AbstractToSdgCaseStudy";
import {
  abstractToSdgExperience,
  thesisTitle,
} from "../../../content/abstract-2-sdg";

export const metadata: Metadata = {
  title: `${thesisTitle} | Honours Thesis Experience`,
  description:
    "Aman Sharma’s UNSW honours thesis, from the literature review and SDG classification experiments to a proposed catalogue with researcher review.",
  alternates: { canonical: abstractToSdgExperience.caseStudyHref },
};

export default function AbstractToSdgExperiencePage() {
  return <AbstractToSdgCaseStudy section="experience" />;
}

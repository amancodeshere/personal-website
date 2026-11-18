import type { Metadata } from "next";
import "./globals.css";
import controls from "../components/layout/InteractiveControls.module.css";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";

const siteTitle = "Aman Sharma | Software Engineering and Machine Learning";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Aman Sharma",
  },
  description:
    "The work, research, and experience of Aman Sharma, a software engineering student at UNSW Sydney.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: siteTitle,
    description:
      "Engineering at the intersection of software, machine learning, and research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={controls.controls}>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

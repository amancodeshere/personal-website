import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Aman Sharma — Software & Machine Learning",
    template: "%s — Aman Sharma",
  },
  description:
    "The work, research, and experience of Aman Sharma, a software engineering student at UNSW Sydney.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Aman Sharma — Software & Machine Learning",
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
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

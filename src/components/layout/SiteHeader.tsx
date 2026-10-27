"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "../../content/portfolio";

const links = [
  { href: "/#work", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header frame-x">
        <Link href="/" className="brand-name" onClick={() => setOpen(false)}>
          <b>AMAN SHARMA</b>
          <span>Software engineering · Sydney</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d={open ? "M5 5l14 14M19 5 5 19" : "M3 7h18M3 12h18M3 17h18"}
            />
          </svg>
        </button>
        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={
                (link.href === "/#work" && pathname.startsWith("/projects")) ||
                (link.label === "Experience" && pathname === "/experience")
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          className="header-social"
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Aman Sharma on GitHub"
        >
          GitHub
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 12 12 4M5 4h7v7" />
          </svg>
        </a>
      </header>
    </>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/projects', label: 'Work' },
  { href: '/experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header frame-x">
    <Link className="brand-mark" href="/" aria-label="Aman Sharma home" onClick={() => setOpen(false)}><span>AS</span><i /></Link>
    <Link href="/" className="brand-name"><b>AMAN SHARMA</b><span>SOFTWARE / MACHINE LEARNING</span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span>{open ? 'Close' : 'Menu'}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d={open ? 'M5 5l14 14M19 5 5 19' : 'M3 7h18M3 12h18M3 17h18'} /></svg></button>
    <nav id="primary-navigation" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
      {links.map((link) => <Link key={link.href} href={link.href} aria-current={(link.href === '/projects' && pathname.startsWith('/projects')) || (link.href === '/experience' && pathname === '/experience') ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}
    </nav>
    <a className="availability" href="mailto:amancodinghere@gmail.com"><span className="status-dot" /> OPEN TO OPPORTUNITIES</a>
  </header>;
}

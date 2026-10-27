import Link from 'next/link';

export default function NotFound() {
  return <section className="not-found frame-x"><p className="page-note">404 / WRONG CURRENT</p><h1>Nothing<br/><em>down here.</em></h1><p>That page may have moved or the address may be off.</p><Link className="text-link" href="/">RETURN HOME <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M10 4l6 6-6 6" /></svg></Link></section>;
}

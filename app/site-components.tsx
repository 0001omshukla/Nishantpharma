import Link from "next/link";
import { contact } from "./content";

export function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

export function CheckIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10 3 3 7-7" /></svg>;
}

function PhoneIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.2 2.8 8 6.6 6.5 8.1c1.2 2.4 3 4.2 5.4 5.4l1.5-1.5 3.8 2.8-.8 2.2c-.3.7-1 1.1-1.8 1-6.7-.9-11.7-5.9-12.6-12.6-.1-.8.3-1.5 1-1.8l2.2-.8Z" /></svg>;
}

function MailIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="4" width="15" height="12" rx="1" /><path d="m3 5 7 5 7-5" /></svg>;
}

function LocationIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16 8c0 4-6 9-6 9S4 12 4 8a6 6 0 1 1 12 0Z" /><circle cx="10" cy="8" r="2" /></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16.2 13.9A7 7 0 0 0 4.4 6.6a7 7 0 0 0-.5 7.6L3 17l2.9-.8a7 7 0 0 0 10.3-2.3Z" /><path d="M7.2 6.8c.3-.2.6-.1.8.3l.8 1.7c.1.3.1.5-.1.7l-.6.7c.8 1.5 1.9 2.6 3.4 3.3l.7-.8c.2-.2.5-.3.7-.1l1.7.8c.3.2.4.5.3.8-.3.8-1.1 1.4-2 1.4-3.3-.3-7.8-4.5-7.9-7.7 0-.6.8-1.2 1.2-1.1Z" /></svg>;
}

function ClockIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7" /><path d="M10 6v4l3 2" /></svg>;
}

const links = [
  ["home", "Home", "/"], ["about", "About", "/about"], ["products", "Products", "/products"],
  ["government", "Government Supplies", "/government-supplies"], ["why", "Why Us", "/why-us"],
  ["gallery", "Gallery", "/gallery"], ["contact", "Contact", "/contact"],
] as const;

const productMenu = [
  ["Pharmaceuticals", "/products#pharmaceuticals"],
  ["Surgical & Medical", "/products#surgical-medical-supplies"],
  ["Office & School", "/products#office-school-supplies"],
  ["Cleaning & Sanitation", "/products#cleaning-sanitation"],
  ["Safety & Security", "/products#safety-security-supplies"],
  ["Electrical & Utility", "/products#electrical-utility-supplies"],
  ["Furniture & Infrastructure", "/products#furniture-infrastructure"],
  ["Vehicles & Mobility", "/products#vehicles-mobility"],
] as const;

const governmentMenu = [
  ["Municipal Supplies", "/government-supplies#municipal-supplies"],
  ["Cleaning & Sanitation", "/government-supplies#cleaning-sanitation-equipment"],
  ["Waste Management", "/government-supplies#waste-management-products"],
  ["Dustbins", "/government-supplies#dustbins"],
  ["E-Rickshaws", "/government-supplies#e-rickshaws"],
  ["Safety Equipment", "/government-supplies#safety-equipment"],
  ["Office & Stationery", "/government-supplies#office-stationery-supplies"],
  ["School & Educational", "/government-supplies#school-educational-supplies"],
] as const;

function DesktopNavItem({ navKey, label, href, active, menu }: { navKey: string; label: string; href: string; active: string; menu?: readonly (readonly [string, string])[] }) {
  return <div className={`nav-item ${menu ? "has-menu" : ""}`}>
    <Link className={active === navKey ? "active" : ""} href={href}>{label}{menu && <span className="nav-chevron">⌄</span>}</Link>
    {menu && <div className="mega-menu"><div className="mega-menu-head"><span>Browse categories</span><Link href={href}>View all <ArrowIcon /></Link></div><div className="mega-menu-grid">{menu.map(([item, itemHref]) => <Link key={item} href={itemHref}>{item}<ArrowIcon /></Link>)}</div></div>}
  </div>;
}

export function SiteHeader({ active }: { active: string }) {
  return <>
    <div className="topline"><div className="shell topline-inner"><div className="topline-contact"><a href={contact.phoneHref}><PhoneIcon />{contact.phone}</a><a href={`mailto:${contact.email}`}><MailIcon />{contact.email}</a></div><span className="topline-label">Government, Healthcare &amp; Institutional Supply</span></div></div>
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Nishant Pharma home"><img src="/media/nishant-pharma-logo.png" alt="Nishant Pharma logo" /><span><b>Nishant Pharma</b><small>Government · Institutional · Healthcare</small></span></Link>
        <nav aria-label="Primary navigation">{links.map(([key, label, href]) => <DesktopNavItem key={key} navKey={key} label={label} href={href} active={active} menu={key === "products" ? productMenu : key === "government" ? governmentMenu : undefined} />)}</nav>
        <Link className="header-cta" href="/contact">Request quote <ArrowIcon /></Link>
      </div>
      <div className="mobile-nav shell" aria-label="Mobile navigation">{links.map(([key, label, href]) => <Link key={key} className={active === key ? "active" : ""} href={href}>{label}</Link>)}</div>
    </header>
  </>;
}

export function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy?: string; image?: string }) {
  return <section className="page-hero"><div className="shell page-hero-grid"><div className="section-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div>{image ? <img className="page-hero-image" src={image} alt="" /> : <p className="page-hero-copy">{copy}</p>}</div>{copy && image && <div className="shell"><p className="page-hero-copy below-image-copy">{copy}</p></div>}</section>;
}

export function QuoteCta({ title, copy }: { title: string; copy: string }) {
  return <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Request a quotation</p><h2>{title}</h2><p>{copy}</p></div><div className="actions"><a className="button button-gold" href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp us <ArrowIcon /></a><Link className="button button-outline-light" href="/contact">Contact details</Link></div></div></section>;
}

export function SiteFooter() {
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
  return <>
    <footer className="site-footer"><div className="shell footer-grid">
      <div><Link href="/" className="brand brand-footer"><img src="/media/nishant-pharma-logo.png" alt="Nishant Pharma logo" /><span><b>Nishant Pharma</b><small>Government · Institutional · Healthcare</small></span></Link><p>From healthcare to government procurement, dependable supply solutions across multiple categories.</p></div>
      <div><h3>Company</h3><Link href="/about">About us</Link><Link href="/why-us">Why us</Link><Link href="/gallery">Product gallery</Link></div>
      <div><h3>Supply</h3><Link href="/products">All products</Link><Link href="/government-supplies">Government supplies</Link><Link href="/contact">Request a quotation</Link></div>
      <div className="footer-contact"><h3>Contact</h3>
        <a className="footer-contact-row" href={maps} target="_blank" rel="noreferrer"><LocationIcon /><span>{contact.address}</span></a>
        <a className="footer-contact-row" href={contact.phoneHref}><PhoneIcon /><span>{contact.phone}</span></a>
        <a className="footer-contact-row" href={contact.whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon /><span>WhatsApp {contact.phone}</span></a>
        <a className="footer-contact-row" href={`mailto:${contact.email}`}><MailIcon /><span>{contact.email}</span></a>
        <div className="footer-contact-row"><ClockIcon /><span>Mon to Sat, 9:30 AM to 8:00 PM</span></div>
        <a className="footer-directions" href={maps} target="_blank" rel="noreferrer">Get directions on Google Maps <ArrowIcon /></a>
      </div>
    </div><div className="shell footer-bottom"><span>© 2026 Nishant Pharma</span><span>Healthcare · Government · Municipal · Institutional</span></div></footer>
    <div className="floating-actions"><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href={`mailto:${contact.email}`}>Email</a></div>
  </>;
}

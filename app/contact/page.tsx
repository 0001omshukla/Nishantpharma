import { contact, images } from "../content";
import { PageHero, SiteFooter, SiteHeader } from "../site-components";
import ContactForm from "./contact-form";

export default function ContactPage() {
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`;
  return <><SiteHeader active="contact" /><main><PageHero eyebrow="Contact" title="Contact Us" image={images.office} />
    <section className="section-pad"><div className="shell contact-grid"><aside className="contact-panel"><p className="eyebrow eyebrow-light">Contact Details</p><h2>Reach us directly</h2><div className="contact-item"><small>Phone / WhatsApp</small><a href={contact.phoneHref}>{contact.phone}</a></div><div className="contact-item"><small>Email</small><a href={`mailto:${contact.email}`}>{contact.email}</a></div><div className="contact-item"><small>Address</small><p>{contact.address}</p></div><div className="contact-item"><small>Working hours</small><p>Monday to Saturday<br />9:30 AM to 8:00 PM</p></div><div className="contact-actions"><a className="button button-gold" href={contact.whatsapp} target="_blank" rel="noreferrer">Open WhatsApp</a><a className="button button-outline-light" href={contact.phoneHref}>Call now</a></div></aside><ContactForm /></div></section>
    <section className="section-pad section-soft"><div className="shell location-grid"><div><p className="eyebrow">Find Us</p><h2>Our location</h2><p>{contact.address}</p><a className="button button-primary" href={maps} target="_blank" rel="noreferrer">Get directions</a></div><div className="map-card"><iframe src={mapEmbed} title="Nishant Pharma location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>
    <section className="cta-section"><div className="shell cta-inner"><div><h2>Prefer to talk it through?</h2><p>Call or message us during working hours and we will take your requirement over the phone.</p></div><a className="button button-gold" href={contact.phoneHref}>{contact.phone}</a></div></section>
  </main><SiteFooter /></>;
}

"use client";

import { FormEvent, useState } from "react";
import { contact } from "../content";

export default function ContactForm() {
  const [name, setName] = useState(""); const [organisation, setOrganisation] = useState(""); const [phone, setPhone] = useState(""); const [email, setEmail] = useState(""); const [product, setProduct] = useState(""); const [message, setMessage] = useState("");
  const body = () => `Hello Nishant Pharma,\n\nName: ${name}\nOrganization: ${organisation || "Not provided"}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\nProduct / Requirement: ${product || "Not provided"}\nMessage: ${message}`;
  function whatsapp(event: FormEvent) { event.preventDefault(); window.open(`${contact.whatsapp}?text=${encodeURIComponent(body())}`, "_blank", "noopener,noreferrer"); }
  function byEmail() { if (!name || !phone || !message) return; window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Supply enquiry from ${name}`)}&body=${encodeURIComponent(body())}`; }
  return <form className="quote-form" onSubmit={whatsapp}><p className="eyebrow">Enquiry Form</p><h2>Send your requirement</h2><p>Fields marked with an asterisk are required. Everything else helps us quote more accurately.</p><div className="form-grid">
    <div className="field"><label htmlFor="name">Name *</label><input id="name" required value={name} onChange={e => setName(e.target.value)} /></div><div className="field"><label htmlFor="organisation">Organization</label><input id="organisation" value={organisation} onChange={e => setOrganisation(e.target.value)} /></div><div className="field"><label htmlFor="phone">Phone *</label><input id="phone" required inputMode="tel" value={phone} onChange={e => setPhone(e.target.value)} /></div><div className="field"><label htmlFor="email">Email</label><input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} /></div><div className="field field-full"><label htmlFor="product">Product / Requirement</label><input id="product" value={product} onChange={e => setProduct(e.target.value)} /></div><div className="field field-full"><label htmlFor="message">Message *</label><textarea id="message" required value={message} onChange={e => setMessage(e.target.value)} /></div><div className="field-full form-actions"><button className="button button-primary" type="submit">Send Enquiry</button><button className="button button-secondary" type="button" onClick={byEmail}>Send by Email</button></div>
    <p className="form-note field-full"><b>How this form works.</b> There is no mail server connected to this website yet, so nothing is sent silently in the background. Send Enquiry opens WhatsApp with your details already written out, and Send by Email opens your email app addressed to us. In both cases you press send yourself. The field names are set up so a form backend can be connected later without changing the layout.</p>
  </div></form>;
}

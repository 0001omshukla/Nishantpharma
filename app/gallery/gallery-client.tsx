"use client";

import { useState } from "react";
import { images } from "../content";

const items = [
  ["Pharmaceutical Range", "Medical", images.pharma], ["Surgical Instruments", "Surgical", images.surgical], ["Hospital Supplies", "Medical", images.hospital], ["Wholesale Cartons", "Medical", images.cartons], ["OT Instruments", "Surgical", images.ot], ["Wound Dressings", "Medical", images.dressings], ["Precision Tools", "Surgical", images.tools],
  ["Outdoor Dustbins", "Municipal", images.waste], ["Waste Segregation Bins", "Municipal", images.wasteIndoor], ["Cleaning & Maintenance Kit", "Municipal", images.cleaning], ["E-Rickshaws", "Government", images.erickshaw], ["Scooters & Mobility", "Government", images.scooters], ["Street Lighting", "Electrical", images.lighting], ["Civic & Public Facilities", "Government", images.garbageTruck], ["Tender Requirement Supply", "Government", images.warehouse], ["Bulk Dispatch Cartons", "Government", images.cartons], ["Steel Wire & Infrastructure Materials", "Government", images.steelWire],
  ["Reflective Safety Jackets", "Safety", images.safety], ["Safety Helmets", "Safety", images.helmets], ["PPE & Face Masks", "Safety", images.ppeKit], ["Protective Gloves", "Safety", images.gloves], ["Office Stationery", "Office", images.stationery], ["Files & Registers", "Office", images.office], ["Printers & Accessories", "Office", images.computer], ["School & Educational Supplies", "Institutional", images.classroom], ["Institutional Furniture", "Institutional", images.furniture], ["Storage Racks", "Institutional", images.racks], ["LED Lighting", "Electrical", images.ledStreetLight], ["Cables & Fittings", "Electrical", images.lighting], ["Water & Sanitation Products", "Municipal", images.wasteVehicle],
] as const;
const filters = ["All", "Medical", "Surgical", "Government", "Municipal", "Safety", "Office", "Electrical", "Institutional"];

export default function GalleryClient() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<(typeof items)[number] | null>(null);
  const visible = filter === "All" ? items : items.filter(item => item[1] === filter);
  return <>
    <div className="gallery-filters" aria-label="Gallery filters">{filters.map(name => <button key={name} className={filter === name ? "active" : ""} onClick={() => setFilter(name)}>{name}</button>)}</div>
    <div className="gallery-grid">{visible.map((item, i) => <button className={`gallery-item ${i % 7 === 0 ? "wide" : ""}`} key={`${item[0]}-${i}`} onClick={() => setOpen(item)}><img src={item[2]} alt={item[0]} /><span><small>{item[1]}</small>{item[0]}</span></button>)}</div>
    {open && <div className="lightbox" role="dialog" aria-modal="true" aria-label={open[0]} onClick={() => setOpen(null)}><button aria-label="Close image">×</button><figure onClick={event => event.stopPropagation()}><img src={open[2]} alt={open[0]} /><figcaption><small>{open[1]}</small>{open[0]}</figcaption></figure></div>}
  </>;
}

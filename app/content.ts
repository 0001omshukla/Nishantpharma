export const contact = {
  phone: "+91 96515 66005",
  phoneHref: "tel:+919651566005",
  whatsapp: "https://wa.me/919651566005",
  email: "nishantpharma.6005@gmail.com",
  address: "Shukla Market, Nimdipur, Akbarpur, Ambedkar Nagar, Uttar Pradesh 224168",
};

export const images = {
  pharma: "/media/pharmaceutical-products.jpg",
  surgical: "/media/surgical-supplies.jpg",
  hospital: "/media/hospital-supplies.jpg",
  cartons: "/media/wholesale-cartons.jpg",
  pharmacy: "/media/pharmacy-stock.jpg",
  ot: "/media/ot-instruments.jpg",
  dressings: "/media/wound-dressings.jpg",
  tools: "/media/precision-tools.jpg",
  erickshaw: "/media/electric-rickshaws.jpg",
  waste: "/media/waste-bins-outdoor.jpg",
  wasteIndoor: "/media/waste-segregation-indoor.jpg",
  garbageTruck: "/media/municipal-garbage-truck.jpg",
  wasteVehicle: "/media/municipal-waste-vehicle.jpg",
  safety: "/media/safety-equipment.jpg",
  helmets: "/media/safety-helmets.jpg",
  ppeKit: "/media/nishant-ppe-kit.png",
  lighting: "/media/solar-street-light.jpg",
  scooters: "/media/electric-scooters.jpg",
  gloves: "/media/protective-gloves.jpg",
  stationery: "/media/office-stationery.jpg",
  computer: "/media/office-computer.jpg",
  racks: "/media/storage-racks.jpg",
  steelWire: "/media/steel-wire-coils.png",
  ledStreetLight: "/media/led-street-light.jpeg",
  classroom: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Empty_Classroom.JPG?width=1400",
  cleaning: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Janitorial_Services_in_Frederick_MD.jpg?width=1400",
  office: "https://cdn1.npcdn.net/userfiles/21639/image/Office-supplies-and-equipment1.jpg",
  warehouse: "https://ps-philgeps.gov.ph/home/images/news-attachment/2021/midyr_inventory/header.jpg",
  furniture: "https://gomagcdn.ro/domains2/alfavega.ro/files/product/original/pupitru-optima-reglabil-clasa-pregatitoare-639911.jpg",
};

export const productCategories = [
  { title: "Pharmaceuticals", description: "Generic and branded medicines sourced through manufacturers and authorised distributors.", items: ["Tablets", "Capsules", "Syrups", "Injectables", "Generic medicines", "Branded medicines", "Healthcare products"], image: images.pharma },
  { title: "Surgical & Medical Supplies", description: "Instruments, disposables and consumables for clinics, hospitals and operation theatres.", items: ["Surgical instruments", "Surgical disposables", "Gloves", "Masks", "Syringes", "Gauze", "Bandages", "OT consumables", "Hospital consumables"], image: images.surgical },
  { title: "Government & Institutional Supplies", description: "Broad procurement support for departments, institutions and public sector requirements.", items: ["General government procurement items", "Institutional supplies", "Public sector requirements", "Bulk procurement products"], image: images.garbageTruck },
  { title: "Office & School Supplies", description: "Everyday consumables and record keeping material for offices, schools and institutions.", items: ["Stationery", "Office supplies", "School supplies", "Printers and accessories", "Files and registers", "General office consumables"], image: images.office },
  { title: "Cleaning & Sanitation", description: "Sanitation, hygiene and waste handling products for municipal and institutional use.", items: ["Dustbins", "Cleaning equipment", "Sanitation products", "Waste management products", "Hygiene products"], image: images.wasteIndoor },
  { title: "Safety & Security Supplies", description: "Personal protective equipment and site safety items for staff and field teams.", items: ["Safety equipment", "PPE", "Reflective jackets", "Helmets", "Safety accessories", "Emergency and safety products"], image: images.safety },
  { title: "Electrical & Utility Supplies", description: "Lighting, wiring and utility items for buildings, campuses and public facilities.", items: ["Electrical items", "Lighting products", "Cables and accessories", "Utility equipment", "General maintenance supplies"], image: images.lighting },
  { title: "Furniture & Infrastructure", description: "Seating, desks, storage and infrastructure related supplies for institutional spaces.", items: ["Office furniture", "Institutional furniture", "School furniture", "Storage products", "General infrastructure supplies"], image: images.furniture },
  { title: "Vehicles & Mobility", description: "Mobility and utility vehicles for municipal, civic and institutional operations.", items: ["E-rickshaws", "Scooters", "Utility vehicles", "Mobility equipment"], image: images.erickshaw },
  { title: "Other Government Procurement", description: "Requirements that sit outside the categories above can be quoted on request. Share your specification or tender line list and we will source against it.", items: ["Requirement based sourcing", "Tender line items", "Mixed category orders", "Custom specification supply"], image: images.wasteVehicle },
];

export const governmentCategories = [
  ["Government Medical Supplies", "Equipment and consumables for public health centres, dispensaries and departmental clinics."],
  ["Pharmaceuticals", "Tablets, capsules, syrups and injectables supplied against departmental requirement lists."],
  ["Surgical & Hospital Supplies", "Instruments, disposables, dressings and OT consumables for hospitals and health facilities."],
  ["Municipal Supplies", "Civic and municipal products for wards, offices and public facility upkeep."],
  ["Cleaning & Sanitation Equipment", "Cleaning tools, hygiene consumables and sanitation equipment for public premises."],
  ["Waste Management Products", "Segregation bins, collection containers and waste handling accessories."],
  ["Dustbins", "Indoor, outdoor and large wheeled dustbins in a range of capacities and materials."],
  ["E-Rickshaws", "Battery operated three wheelers for passenger, loader and municipal utility use."],
  ["Scooters & Mobility Products", "Two wheelers and mobility equipment for departmental and field staff movement."],
  ["Safety Equipment", "Helmets, reflective jackets, protective gear and site safety accessories."],
  ["Office & Stationery Supplies", "Stationery, files, registers, printer consumables and daily office material."],
  ["School & Educational Supplies", "Classroom material, school stationery and educational institution requirements."],
  ["Electrical & Utility Products", "LED lighting, cables, fittings and general electrical maintenance items."],
  ["Furniture", "Office, school and institutional furniture including seating, desks and storage."],
  ["Infrastructure & Maintenance", "Storage systems, racks, hardware and general upkeep material for facilities."],
  ["General Procurement Items", "Mixed or non standard requirement lists quoted against your written specification."],
] as const;

export const whyCards = [
  ["Wide Product Range", "From pharmaceuticals and surgical products to government, municipal and institutional procurement, our catalogue spans the categories most buyers need."],
  ["One Supplier, Multiple Requirements", "Consolidate different procurement categories through a single supplier instead of coordinating separate vendors for each line item."],
  ["Bulk Supply", "We support institutional and bulk procurement requirements, with quantities worked out against your requirement list."],
  ["Reliable Sourcing", "Products are sourced through appropriate manufacturers, distributors and suppliers for the category concerned."],
  ["Quality Focus", "Professional product selection and quality focused procurement, checked against the specification shared with us."],
  ["Timely Response", "Fast quotation and clear order communication so you know where your requirement stands."],
  ["Competitive Pricing", "Competitive rates for bulk and institutional requirements, including repeat orders."],
  ["Customer Support", "Easy communication through WhatsApp, phone and email, with a single point of contact."],
] as const;

export function whatsappFor(topic: string) {
  return `${contact.whatsapp}?text=${encodeURIComponent(`Hello Nishant Pharma, I would like to enquire about ${topic}.`)}`;
}

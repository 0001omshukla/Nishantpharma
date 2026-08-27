import { images, productCategories, whatsappFor } from "../content";
import { ArrowIcon, PageHero, QuoteCta, SiteFooter, SiteHeader } from "../site-components";

export default function ProductsPage() {
  return <><SiteHeader active="products" /><main><PageHero eyebrow="Product Range" title="Our Product Categories" copy="Healthcare, government, municipal, education, office, utility, infrastructure and mobility requirements in one organised supply range." image={images.office} />
    <section className="section-pad"><div className="shell product-list">{productCategories.map((category, i) => <article id={category.title.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} className="product-row" key={category.title}><div className="product-row-image"><img src={category.image} alt={category.title} /><span>{String(i + 1).padStart(2, "0")}</span></div><div><h2>{category.title}</h2><p>{category.description}</p><ul>{category.items.map(item => <li key={item}>{item}</li>)}</ul><a href={whatsappFor(category.title)} target="_blank" rel="noreferrer">Enquire now <ArrowIcon /></a></div></article>)}</div></section>
    <section className="section-pad section-soft"><div className="shell stock-showcase"><div><p className="eyebrow">From Our Stock</p><h2>Pharmaceutical and surgical supply</h2><p>Photographs of the medicines, instruments, dressings and hospital consumables we handle day to day.</p></div><div><img src={images.pharmacy} alt="Pharmaceutical stock" /><img src={images.ot} alt="Surgical instruments and OT supplies" /><img src={images.dressings} alt="Wound dressings and hospital consumables" /></div></div></section>
    <QuoteCta title="Ready to request a quotation?" copy="Send your product list on WhatsApp or email and we will respond with availability and rates." />
  </main><SiteFooter /></>;
}

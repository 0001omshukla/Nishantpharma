import { images } from "../content";
import { PageHero, QuoteCta, SiteFooter, SiteHeader } from "../site-components";
import GalleryClient from "./gallery-client";

export default function GalleryPage() {
  return <><SiteHeader active="gallery" /><main><PageHero eyebrow="Gallery" title="Product & Supply Gallery" copy="Photographs of our pharmaceutical and surgical stock, together with illustrated references for the government, municipal, safety, office, electrical and institutional categories we supply. Use the filters to narrow the view." image={images.safety} />
    <section className="section-pad"><div className="shell"><GalleryClient /><p className="image-credit">Additional category photography is used as a visual reference for the types of government and institutional supplies handled.</p></div></section>
    <QuoteCta title="Looking for something you have seen here?" copy="Send the category or item name on WhatsApp and we will share details and pricing." />
  </main><SiteFooter /></>;
}

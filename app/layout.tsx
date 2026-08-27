import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishant Pharma | Government, Institutional & Healthcare Supplies",
  description: "Multi-category government, municipal, institutional and healthcare procurement support from Nishant Pharma in Akbarpur, Uttar Pradesh.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Roel Nentjes — De Werkplaats van Morgen";
const description = "Roel Nentjes onderzoekt, tekent, bouwt en levert: van presentaties en AI-verkenningen tot architectuur, roadmaps en werkende digitale producten.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "www.nentjes.nl";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = new URL("/og.png", origin).toString();

  return {
    title,
    description,
    openGraph: {
      title: "Van wat er draait naar wat er werkt.",
      description,
      url: origin,
      siteName: "Roel Nentjes",
      locale: "nl_NL",
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Van wat er draait naar wat er werkt — Roel Nentjes" }],
    },
    twitter: { card: "summary_large_image", title: "Van wat er draait naar wat er werkt.", description, images: [socialImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}

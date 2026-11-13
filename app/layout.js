import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rovor-studio.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ROVOR — Architecture Beyond Time",
    template: "%s — ROVOR Architecture Studio",
  },
  description: "ROVOR is an independent architecture and spatial design studio exploring space, material, and light through thoughtful architectural design.",
  applicationName: "ROVOR Architecture Studio",
  keywords: ["ROVOR", "architecture", "architecture studio", "spatial design", "interior architecture", "architectural visualization"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ROVOR — Architecture Beyond Time",
    description: "An independent architecture and spatial design studio.",
    siteName: "ROVOR Architecture Studio",
    url: siteUrl,
    type: "website",
    images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "ROVOR Architecture Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROVOR — Architecture Beyond Time",
    description: "An independent architecture and spatial design studio.",
    images: ["/opengraph-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: "#171916",
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

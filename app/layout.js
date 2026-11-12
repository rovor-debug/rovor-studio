import "./globals.css";

export const metadata = {
  title: {
    default: "ROVOR — Architecture Beyond Time",
    template: "%s — ROVOR Architecture Studio",
  },
  description: "ROVOR is an independent architecture studio exploring space, material, and light through thoughtful architectural and spatial design.",
  applicationName: "ROVOR Architecture Studio",
  keywords: ["ROVOR", "architecture", "architecture studio", "spatial design", "interior architecture"],
  openGraph: {
    title: "ROVOR — Architecture Beyond Time",
    description: "An independent architecture and spatial design studio.",
    siteName: "ROVOR Architecture Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROVOR — Architecture Beyond Time",
    description: "An independent architecture and spatial design studio.",
  },
};

export const viewport = {
  themeColor: "#111111",
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

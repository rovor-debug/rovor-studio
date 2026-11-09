import "./globals.css";

export const metadata = {
  title: "ROVOR — Architecture & Spatial Design",
  description: "ROVOR is an independent architecture and spatial design studio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

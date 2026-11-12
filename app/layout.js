import "./globals.css";

export const metadata = {
  title: "ROVOR — Architecture with a point of view",
  description: "Independent architecture and spatial design studio. Thoughtful spaces shaped by context, material and light.",
  applicationName: "ROVOR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

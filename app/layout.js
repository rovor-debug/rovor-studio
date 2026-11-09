import "./globals.css";

export const metadata = {
  title: "ROVOR — Architecture Beyond Time",
  description: "ROVOR is an independent architecture and spatial design studio exploring space, material, and light.",
  applicationName: "ROVOR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import Navbar from "./Component/Components/Navbar";
import Footer from "./Component/Components/Footer";
import "./Global.css";

export const metadata = {
  title: "ROVOR Architecture Studio",
  description:
    "Architecture studio focused on design, concept development and remote collaboration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

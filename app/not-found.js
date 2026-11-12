import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudioExperience from "@/components/StudioExperience";

export default function NotFound() {
  return (
    <StudioExperience>
      <Navbar />
      <main className="not-found">
        <p className="eyebrow">404 / Page not found</p>
        <h1>This space<br /><em>is still undefined.</em></h1>
        <p>The page you are looking for may have moved or no longer exists.</p>
        <Link className="text-link" href="/">Return to the homepage <span>↗</span></Link>
      </main>
      <Footer />
    </StudioExperience>
  );
}

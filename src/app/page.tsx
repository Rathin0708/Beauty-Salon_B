import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { getDictionary } from "@/lib/i18n";

export default function Home() {
  const t = getDictionary();

  return (
    <>
      <Navbar t={t} />
      <main className="flex-1">
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Gallery t={t} />
        <Testimonials t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <FloatingActions />
    </>
  );
}

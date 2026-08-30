import Navbar from "@/components/site/Navbar.jsx";
import Hero from "@/components/site/Hero.jsx";
import Stats from "@/components/site/Stats.jsx";
import Domains from "@/components/site/Domains.jsx";
import LabSetupCallout from "@/components/site/LabSetupCallout.jsx";
import ToolsStrip from "@/components/site/ToolsStrip.jsx";
import FAQAccordion from "@/components/site/FAQAccordion.jsx";
import CTASection from "@/components/site/CTASection.jsx";
import Footer from "@/components/site/Footer.jsx";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <Domains />
      <LabSetupCallout />
      <ToolsStrip />
      <FAQAccordion />
      <CTASection />
      <Footer />
    </main>
  );
}

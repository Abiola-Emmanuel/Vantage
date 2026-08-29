import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar.jsx";
import Hero from "@/components/site/Hero.jsx";
import Stats from "@/components/site/Stats.jsx";
import Domains from "@/components/site/Domains.jsx";
import LabSetupCallout from "@/components/site/LabSetupCallout.jsx";
import ToolsStrip from "@/components/site/ToolsStrip.jsx";
import FAQAccordion from "@/components/site/FAQAccordion.jsx";
import CTASection from "@/components/site/CTASection.jsx";
import Footer from "@/components/site/Footer.jsx";

const title = "Redteam Ref — Offensive & Defensive Security Reference";
const description =
  "A hands-on reference library of OSINT, malware analysis, digital forensics and social engineering tools, documented from real lab work.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
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

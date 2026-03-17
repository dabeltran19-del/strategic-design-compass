import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Section, { SectionTitle } from "@/components/Section";
import ImpactList from "@/components/ImpactList";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
};

const ImpactIndustries = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgOpacity = Math.max(0, 0.13 - scrollY / 2000);

  return (
    <Layout>
      <section className="relative py-[12vh] md:py-[18vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/impact_background.png')",
            opacity: bgOpacity,
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <span className="caps-label block mb-6">Selected Examples</span>
            <h1 className="font-serif text-[clamp(2rem,6vw,4rem)] font-medium leading-[1.05] tracking-tight max-w-5xl">
              Impact across Industries
            </h1>
          </motion.div>
        </div>
      </section>
      <Section>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <SectionTitle>Overview</SectionTitle>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[65ch] mb-16">
              A selection of projects demonstrating how strategic design creates measurable impact across diverse sectors — from government to consumer technology, from financial services to insurance.
            </p>

            {[
              {
                category: "GovTech",
                title: "Judicial Innovation — LAB ENJ",
                image: "/impact_enj.png",
                impacts: [
                  { metric: "Institutional Adoption:", description: "The Judicial Branch formally adopted the winning projects to carry them out, a result of the rigorous mentoring and viability checks performed during the process." },
                  { metric: "Institutional Transformation:", description: "Successfully positioned Design Thinking as a formal problem-solving framework within the Judiciary." },
                  { metric: "Cultural Shift:", description: "Catalyzed a fundamental mindset shift by prioritizing agility and user-centricity in the design of judicial services." },
                  { metric: "Evidence-Based Strategy:", description: "Replaced abstract assumptions with a culture of prototyping and validation, ensuring that new services were tested with real feedback before implementation." },
                ],
              },
              {
                category: "Consumer Electronics",
                title: "Samsung Electronics — Organizational Alignment",
                image: "/process_map.png",
                impacts: [
                  { metric: "Increased Adoption:", description: "The redesign turned a mandatory obligation into a high-engagement service, significantly improving how employees interacted with corporate guidelines." },
                  { metric: "Unified Workflow:", description: "By aligning Legal with the rest of the company, with the team we eliminated departmental fragmentation, creating a more efficient and collaborative environment for managing the program." },
                  { metric: "Scalable Framework:", description: "We delivered a structured model for internal service design that the company could later apply to other complex corporate initiatives." },
                ],
              },
              {
                category: "FinTech",
                title: "DolarApp — Go-to-Market",
                image: "/dolarapp_impact.png",
                impacts: [
                  { metric: "Robust Strategic Roadmap:", description: "Allowed the fintech to launch with a clear understanding of the Colombian user's mental models." },
                  { metric: "Structured Onboarding Process:", description: "Both legally sound and culturally resonant." },
                ],
              },
              {
                category: "InsurTech",
                title: "Seguros Mundial — Trust-based Design",
                image: "/seguros_mundial_impact.png",
                impacts: [
                  { metric: "Enhanced Brand Trust:", description: "By improving clarity and transparency, we strengthened the bond between the brand and its clients." },
                  { metric: "Sales Growth through Confidence:", description: "Significant improvement in sales, driven by a redesigned experience that prioritized user confidence and a more human, realistic approach to insurance." },
                ],
              },
            ].map((project, i) => (
              <div key={i} className="mb-20">
                <div className="border-t border-border pt-8">
                  <span className="caps-label">{project.category}</span>
                  <h3 className="mt-4 font-serif text-2xl font-medium mb-8">{project.title}</h3>
                  <ImpactList items={project.impacts} />
                  <div className="mt-8 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ImpactIndustries;
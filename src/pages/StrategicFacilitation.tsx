import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
};

const StrategicFacilitation = () => {
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
            backgroundImage: "url('/empathy_map.png')",
            opacity: bgOpacity,
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <span className="caps-label block mb-6">Methodology in Practice</span>
            <h1 className="font-serif text-[clamp(2rem,6vw,4rem)] font-medium leading-[1.05] tracking-tight max-w-5xl">
              Strategic Facilitation & Co-design
            </h1>
          </motion.div>
        </div>
      </section>
      <Section>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <SectionTitle>The Approach</SectionTitle>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                I have experience enabling teams to navigate complexity by "managing the room", leveraging expert facilitation, co-design, and systems thinking to guide stakeholders and multidisciplinary experts through the design process. By extracting collective intelligence and utilizing visual thinking, I navigate resistance to change and ensure that every participant is aligned toward shared strategic goals and actionable outcomes. My approach combines the rigor of strategic alignment with the speed of agile delivery, transforming abstract challenges into tangible, high-impact solutions.
              </p>
            </div>
            <div className="mt-12">
              <ArtifactPlaceholder label="Facilitation Framework Diagram" />
            </div>
            <div className="mt-20">
              <SectionTitle>Core Principles</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    title: "Systems Thinking & Analysis",
                    desc: "I approach challenges by mapping the entire ecosystem, identifying how internal departments, regulatory frameworks, and end-users interact. This allows me to pinpoint systemic bottlenecks rather than just treating symptoms.",
                  },
                  {
                    title: "Co-design",
                    desc: "I facilitate the \"hands-on\" translation of abstract problems into visual solutions through Empathy Mapping and Ideation Frameworks. By involving stakeholders in the design process, I ensure the final strategy has internal buy-in and structural viability.",
                  },
                  {
                    title: "Agile Service Delivery",
                    desc: "I use Journey Mapping and Service Blueprinting to visualize the end-to-end experience, ensuring that every touchpoint is optimized for both the user and the business. This allows for a phased, agile implementation that reduces risk and builds trust.",
                  },
                ].map((p, i) => (
                  <div key={i} className="border-t border-border pt-6">
                    <span className="caps-label">0{i + 1}</span>
                    <h3 className="mt-3 font-serif text-lg font-medium">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ArtifactPlaceholder label="Workshop Setup Photo" />
              <ArtifactPlaceholder label="Co-design Session Output" />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default StrategicFacilitation;
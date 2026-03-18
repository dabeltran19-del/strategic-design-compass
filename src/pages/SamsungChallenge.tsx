import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";
import ImpactList from "@/components/ImpactList";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
};

const SamsungChallenge = () => {
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
            backgroundImage: "url('/samsung_logo_hero.png')",
            opacity: bgOpacity,
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <span className="caps-label block mb-6">Consumer Electronics</span>
            <h1 className="font-serif text-[clamp(2rem,6vw,4rem)] font-medium leading-[1.05] tracking-tight max-w-5xl">
              Samsung Electronics — Organizational Alignment
            </h1>
          </motion.div>
        </div>
      </section>
      <Section>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <SectionTitle>The Challenge</SectionTitle>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                Samsung Electronics faced a common challenge in large-scale organizations: siloed teams working toward misaligned goals. Product, Legal, and Operations each had their own priorities, creating friction in delivering seamless user experiences.
              </p>
              <p>
                We were brought in to bridge these gaps — designing a collaborative strategy process that would align diverse stakeholders around shared outcomes without losing the specialized expertise each team contributed.
              </p>
            </div>
            <div className="mt-12">
              <ArtifactPlaceholder label="Organizational Friction Map" />
            </div>

            <div className="mt-20">
              <SectionTitle>My Role</SectionTitle>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
                <p>
                  As Strategic Designer, we facilitated cross-functional alignment sessions, designed collaborative frameworks, and created visual tools that made complex interdependencies visible and actionable.
                </p>
              </div>
            </div>

            <div className="mt-20">
              <SectionTitle>Strategic Impact</SectionTitle>
              <ImpactList
                items={[
                  { metric: "3 departments", description: "aligned on shared delivery roadmap" },
                  { metric: "Reduced handoff friction", description: "between Product and Operations teams" },
                  { metric: "Visual alignment tools", description: "adopted for ongoing cross-team coordination" },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default SamsungChallenge;
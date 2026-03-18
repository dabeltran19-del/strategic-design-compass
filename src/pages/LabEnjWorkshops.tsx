import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProjectSubNav from "@/components/ProjectSubNav";
import Section, { SectionTitle } from "@/components/Section";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
};

const LabEnjWorkshops = () => {
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
            backgroundImage: "url('/hero_cocreation.png')",
            opacity: bgOpacity,
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <span className="caps-label block mb-6">LAB ENJ · Co-design</span>
            <h1 className="font-serif text-[clamp(2rem,6vw,4rem)] font-medium leading-[1.05] tracking-tight max-w-5xl">
              Judicial Co-creation Workshops
            </h1>
          </motion.div>
        </div>
      </section>
      <ProjectSubNav />
      <Section>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <SectionTitle index="02">The Co-creation Process</SectionTitle>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                To redesign how legal services are delivered, we focused on the people leading the system. I designed and facilitated workshops and training programs for Judges and Senior Officials over a period of three years.
              </p>
              <div className="space-y-6 mt-2">
                {[
                  {
                    label: "The Approach",
                    text: "I guided judicial leaders through the process of rethinking their services, moving from a strictly formalist and bureaucratic approach to one centered on the user's journey.",
                  },
                  {
                    label: "Breaking the Protocol",
                    text: "",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                    <p>
                      <span className="font-semibold text-foreground">{item.label}:</span>{" "}
                      {item.label === "Breaking the Protocol" ? (
                        <>
                          We introduced a disruptive way of working for a traditionally rigid institution. I led officials through hands-on sessions where they stepped out of their formal roles to engage with visual thinking, collaborative mapping, and the use of post-its to externalize complex problems. This <em>hands-on</em> environment was key to breaking down hierarchical silos and fostering collective intelligence.
                        </>
                      ) : (
                        item.text
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src="/workshop_photo_01.png" alt="Workshop Photo 01" className="w-full object-cover" />
              <img src="/workshop_photo_02.png" alt="Workshop Photo 02" className="w-full object-cover" />
            </div>
            <div className="mt-12 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              <div className="flex gap-3">
                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                <p>
                  <span className="font-semibold text-foreground">The Tools:</span>{" "}
                  We used design methodologies to navigate resistance to change and help officials identify efficiency gaps in their daily operations.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <img src="/service_blueprint_workshop.png" alt="Service Blueprint" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default LabEnjWorkshops;
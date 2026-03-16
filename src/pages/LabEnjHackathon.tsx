import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import ProjectSubNav from "@/components/ProjectSubNav";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";
import ImpactList from "@/components/ImpactList";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
};

const LabEnjHackathon = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgOpacity = Math.max(0, 0.13 - scrollY / 2000);

  return (
  <Layout>
    {/* Hero with fading background image */}
    <section className="relative py-[12vh] md:py-[18vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/headhsot.jpg')",
          opacity: bgOpacity,
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp}>
          <span className="caps-label block mb-6">LAB ENJ · Impact</span>
          <h1 className="font-serif text-[clamp(2rem,6vw,4rem)] font-medium leading-[1.05] tracking-tight max-w-5xl">
            The Open Innovation National Hackathon
          </h1>
        </motion.div>
      </div>
    </section>
    <ProjectSubNav />
    <Section>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <SectionTitle index="03">The Hackathon</SectionTitle>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              To bring fresh perspectives into the system, we organized and led the first National Judicial Hackathons (2021 and 2022). The initiative consisted of guiding multidisciplinary teams of students, supported by judicial officials and guided by our mentorship team.
            </p>
            <p>
              Teams were provided with strategic briefs on real judicial bottlenecks to solve during an intensive 8-week period. 
            </p>
          </div>
          <div className="mt-12">
            <ArtifactPlaceholder label="Hackathon Event Documentation" />
          </div>
          <div className="mt-20">
            <SectionTitle>Strategic Impact</SectionTitle>
            <ImpactList
              items={[
                { metric: "5", description: "Major Universities" },
                { metric: "60+", description: "Students from", inlineMetric: "5", descriptionAfter: "different programs" },
                { metric: "30+", description: "Judicial branch officials" },
              ]}
            />
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ArtifactPlaceholder label="Journey Map — Before" />
            <ArtifactPlaceholder label="Journey Map — After" />
          </div>

          {/* My Role */}
          <div className="mt-20">
            <SectionTitle>My Role</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-lg text-muted-foreground leading-relaxed">
              {[
                {
                  label: "Methodological Guidance",
                  text: "I led and mentored the teams throughout the entire 8-week journey, serving as the primary guide for the design process and the implementation of the Business Model Canvas.",
                },
                {
                  label: "End-to-End Management",
                  text: "I organized the entire project lifecycle, from initial ideation to the final pitch, providing constant feedback to ensure all solutions were both innovative and structurally sound.",
                },
                {
                  label: "Strategic Training",
                  text: "I was responsible for presenting and teaching the design tools to the teams, ensuring they knew how to apply them to transform abstract problems into viable prototypes.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                  <p>
                    <span className="font-semibold text-foreground underline underline-offset-2">{item.label}:</span>{" "}
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  </Layout>
  );
};

export default LabEnjHackathon;
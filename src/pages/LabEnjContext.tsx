import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import ProjectSubNav from "@/components/ProjectSubNav";
import { PageHero } from "@/components/Section";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";

const LabEnjContext = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgOpacity = Math.max(0, 0.13 - scrollY / 2000);

  return (
    <Layout>
      {/* Hero with scroll-fading background */}
      <section className="relative py-[12vh] md:py-[18vh] overflow-hidden">
        {/* Scroll-fading background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/LabENJContext_Background.jpeg')",
            opacity: bgOpacity,
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
        <div className="relative">
          <PageHero title="LAB ENJ — Context & Role" subtitle="Judicial Innovation · Dominican Republic" />
        </div>
      </section>
      
      <ProjectSubNav />
      <Section>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <SectionTitle index="01">Context</SectionTitle>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              We designed and led LAB ENJ, a pioneering Justice Innovation Lab in the Dominican Republic. Created as a strategic collaboration with the National School of the Judiciary (ENJ), the lab was built to modernize the Judicial Branch by introducing agile methodologies and human-centered design into a traditionally rigid institution.
            </p>
            <p>
              The challenge was immense: a deeply hierarchical institution with complex regulatory requirements, serving millions of citizens who often find the judicial system opaque and inaccessible.
            </p>
          </div>
          <div className="mt-12">
            <ArtifactPlaceholder label="Ecosystem Map v.01" />
          </div>

          <div className="mt-20">
            <SectionTitle index="02">My Role</SectionTitle>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                As part of the founding leadership team, I co-designed the entire innovation strategy. I acted as a bridge between high-level judicial officials and the citizens’ needs, ensuring that innovation was both structurally sound and impactful.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <ArtifactPlaceholder label="Stakeholder Map" />
          </div>
        </div>
      </div>
    </Section>
    </Layout>
  );
};

export default LabEnjContext;
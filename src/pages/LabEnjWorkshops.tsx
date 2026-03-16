import Layout from "@/components/Layout";
import ProjectSubNav from "@/components/ProjectSubNav";
import { PageHero } from "@/components/Section";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";

const LabEnjWorkshops = () => (
  <Layout>
    <PageHero title="Judicial Co-creation Workshops" subtitle="LAB ENJ · Co-design" />
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
            <ArtifactPlaceholder label="Workshop Photo 01" />
            <ArtifactPlaceholder label="Workshop Photo 02" />
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
            <ArtifactPlaceholder label="Service Blueprint v.02" />
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default LabEnjWorkshops;
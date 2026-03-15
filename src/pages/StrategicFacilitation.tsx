import Layout from "@/components/Layout";
import { PageHero } from "@/components/Section";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";

const StrategicFacilitation = () => (
  <Layout>
    <PageHero title="Strategic Facilitation & Co-design" subtitle="Methodology in Practice" />
    <Section>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <SectionTitle>The Approach</SectionTitle>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              Strategic facilitation is the art of creating the conditions for aligned decision-making. We design and lead sessions that transform diverse — often conflicting — perspectives into coherent strategies.
            </p>
            <p>
              Our facilitation practice draws from systems thinking, participatory design, and organizational development. Every workshop is a carefully choreographed experience designed to surface insights, build consensus, and generate actionable outcomes.
            </p>
          </div>
          <div className="mt-12">
            <ArtifactPlaceholder label="Facilitation Framework Diagram" />
          </div>
          <div className="mt-20">
            <SectionTitle>Core Principles</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: "Radical Inclusivity", desc: "Every voice matters. We design for hierarchy-free participation." },
                { title: "Structured Emergence", desc: "We create frameworks that allow insights to emerge organically." },
                { title: "Tangible Outputs", desc: "Every session produces artifacts: maps, blueprints, roadmaps." },
                { title: "Systemic Alignment", desc: "Individual insights are woven into systemic strategies." },
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

export default StrategicFacilitation;

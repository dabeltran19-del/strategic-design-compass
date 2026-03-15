import Layout from "@/components/Layout";
import { PageHero } from "@/components/Section";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";
import ImpactList from "@/components/ImpactList";

const SamsungChallenge = () => (
  <Layout>
    <PageHero title="Samsung Electronics — Organizational Alignment" subtitle="Consumer Electronics" />
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

export default SamsungChallenge;

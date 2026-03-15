import Layout from "@/components/Layout";
import { PageHero } from "@/components/Section";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";

const SamsungProcess = () => (
  <Layout>
    <PageHero title="Samsung — The Process" subtitle="Consumer Electronics · Process" />
    <Section>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <SectionTitle index="01">Discovery & Mapping</SectionTitle>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              We began by mapping the existing workflows across Product, Legal, and Operations. Through stakeholder interviews and process audits, we identified where misalignment was creating the most friction.
            </p>
          </div>
          <div className="mt-12">
            <ArtifactPlaceholder label="Process Mapping Workshop" />
          </div>

          <div className="mt-20">
            <SectionTitle index="02">Collaborative Strategy Sessions</SectionTitle>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                We designed and facilitated a series of strategy sessions that brought all three departments into the same room. Each session was structured to surface tensions constructively and channel them into aligned decisions.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ArtifactPlaceholder label="Strategy Session Photo 01" />
              <ArtifactPlaceholder label="Strategy Session Photo 02" />
            </div>
          </div>

          <div className="mt-20">
            <SectionTitle index="03">Alignment Tools & Outputs</SectionTitle>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                We created a suite of visual alignment tools — responsibility matrices, decision flows, and shared roadmaps — that made complex interdependencies visible and actionable for ongoing use.
              </p>
            </div>
            <div className="mt-12">
              <ArtifactPlaceholder label="Alignment Roadmap v.03" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default SamsungProcess;

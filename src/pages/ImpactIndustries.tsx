import Layout from "@/components/Layout";
import { PageHero } from "@/components/Section";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";
import ImpactList from "@/components/ImpactList";

const ImpactIndustries = () => (
  <Layout>
    <PageHero title="Impact across Industries" subtitle="Selected Examples" />
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
              impacts: [
                { metric: "200+ participants", description: "engaged in national hackathon" },
                { metric: "40% reduction", description: "in citizen friction points" },
                { metric: "5 courts", description: "adopted our innovation framework" },
              ],
            },
            {
              category: "Consumer Electronics",
              title: "Samsung Electronics — Organizational Alignment",
              impacts: [
                { metric: "Cross-functional alignment", description: "across Product, Legal, and Operations" },
                { metric: "Streamlined delivery", description: "through collaborative strategy workshops" },
              ],
            },
            {
              category: "FinTech",
              title: "DolarApp — Go-to-Market",
              impacts: [
                { metric: "Market entry strategy", description: "for cross-border payment platform" },
                { metric: "User acquisition framework", description: "grounded in behavioral research" },
              ],
            },
            {
              category: "InsurTech",
              title: "Seguros Mundial — Trust-based Design",
              impacts: [
                { metric: "Trust-building framework", description: "for digital insurance adoption" },
                { metric: "Conversion uplift", description: "through transparency-first design" },
              ],
            },
          ].map((project, i) => (
            <div key={i} className="mb-20">
              <div className="border-t border-border pt-8">
                <span className="caps-label">{project.category}</span>
                <h3 className="mt-4 font-serif text-2xl font-medium mb-8">{project.title}</h3>
                <ImpactList items={project.impacts} />
                <div className="mt-8">
                  <ArtifactPlaceholder label={`${project.title} — Key Artifact`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </Layout>
);

export default ImpactIndustries;

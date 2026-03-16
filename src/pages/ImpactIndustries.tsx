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
                { metric: "Institutional Adoption:", description: "The Judicial Branch formally adopted the winning projects to carry them out, a result of the rigorous mentoring and viability checks performed during the process." },
                { metric: "Institutional Transformation:", description: "Successfully positioned Design Thinking as a formal problem-solving framework within the Judiciary." },
                { metric: "Cultural Shift:", description: "Catalyzed a fundamental mindset shift by prioritizing agility and user-centricity in the design of judicial services." },
                { metric: "Evidence-Based Strategy:", description: "Replaced abstract assumptions with a culture of prototyping and validation, ensuring that new services were tested with real feedback before implementation." },
              ],
            },
            {
              category: "Consumer Electronics",
              title: "Samsung Electronics — Organizational Alignment",
              impacts: [
                { metric: "Increased Adoption: ", description: "The redesign turned a mandatory obligation into a high-engagement service, significantly improving how employees interacted with corporate guidelines." },
                { metric: "Unified Workflow:", description: "By aligning Legal with the rest of the company, with the team we eliminated departmental fragmentation, creating a more efficient and collaborative environment for managing the program." },
                { metric: "Scalable Framework::", description: "We delivered a structured model for internal service design that the company could later apply to other complex corporate initiatives." },
              ],
            },
            {
              category: "FinTech",
              title: "DolarApp — Go-to-Market",
              impacts: [
                { metric: "Robust Strategic Roadmap:", description: "Allowed the fintech to launch with a clear understanding of the Colombian user’s mental models" },
                { metric: "Structured Onboarding Process:", description: "Both legally sound and culturally resonant." },
              ],
            },
            {
              category: "InsurTech",
              title: "Seguros Mundial — Trust-based Design",
              impacts: [
                { metric: "Enhanced Brand Trust:", description: "By improving clarity and transparency, we strengthened the bond between the brand and its clients." },
                { metric: "Sales Growth through Confidence:", description: "Significant improvement in sales, driven by a redesigned experience that prioritized user confidence and a more human, realistic approach to insurance." },
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

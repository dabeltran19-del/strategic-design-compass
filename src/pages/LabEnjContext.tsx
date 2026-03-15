import Layout from "@/components/Layout";
import ProjectSubNav from "@/components/ProjectSubNav";
import { PageHero } from "@/components/Section";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";

const LabEnjContext = () => (
  <Layout>
    <PageHero title="LAB ENJ — Context & Role" subtitle="Judicial Innovation · Brazil" />
    <ProjectSubNav />
    <Section>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <SectionTitle index="01">Context</SectionTitle>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              LAB ENJ is an innovation lab within Brazil's National School of Judges (ENJ), dedicated to modernizing the judiciary through design thinking and co-creation. We were tasked with transforming how judicial services are conceived, delivered, and experienced by citizens.
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
                As Strategic Designer, we led the end-to-end transformation process — from stakeholder mapping and systems analysis to facilitating co-design workshops with judges, clerks, and citizens.
              </p>
              <p>
                We defined the innovation methodology, designed the workshop frameworks, and coordinated the national hackathon that brought together over 200 participants from across Brazil.
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

export default LabEnjContext;

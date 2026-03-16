import Layout from "@/components/Layout";
import ProjectSubNav from "@/components/ProjectSubNav";
import { PageHero } from "@/components/Section";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";

const LabEnjWorkshops = () => (
  <Layout>
    <PageHero title="Judicial Co-creation & Training" subtitle="LAB ENJ · Co-design" />
    <ProjectSubNav />
    <Section>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <SectionTitle index="02">The Co-creation Process</SectionTitle>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              We designed and facilitated a series of co-creation workshops that brought judges, court clerks, IT specialists, and citizens together to reimagine judicial services. Each workshop followed a carefully structured methodology blending design thinking with institutional awareness.
            </p>
            <p>
              The workshops moved through three phases: Empathy & Discovery, Ideation & Prototyping, and Validation & Roadmapping. We ensured every participant had a voice, regardless of hierarchy.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ArtifactPlaceholder label="Workshop Photo 01" />
            <ArtifactPlaceholder label="Workshop Photo 02" />
          </div>
          <div className="mt-12">
            <ArtifactPlaceholder label="Service Blueprint v.02" />
          </div>
          <div className="mt-20">
            <SectionTitle index="03">Key Outcomes</SectionTitle>
            <ul className="space-y-4">
              {[
                "Aligned 14 cross-functional stakeholders across 3 judicial districts",
                "Generated 47 service improvement ideas, 12 prioritized for implementation",
                "Created a replicable workshop framework now used across 5 state courts",
                "Reduced average case-processing friction points by identifying 8 critical bottlenecks",
              ].map((item, i) => (
                <li key={i} className="border-l-2 border-accent pl-6 py-2 text-lg text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default LabEnjWorkshops;

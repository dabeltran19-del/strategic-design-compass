import Layout from "@/components/Layout";
import ProjectSubNav from "@/components/ProjectSubNav";
import { PageHero } from "@/components/Section";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";
import ImpactList from "@/components/ImpactList";

const LabEnjHackathon = () => (
  <Layout>
    <PageHero title="The Open Innovation National Hackathon" subtitle="LAB ENJ · Impact" />
    <ProjectSubNav />
    <Section>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <SectionTitle index="03">The Hackathon</SectionTitle>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              We designed and orchestrated a national-scale hackathon that challenged participants to reimagine how citizens interact with the judicial system. Over 200 participants from 15 states competed to create solutions that would make justice more accessible.
            </p>
            <p>
              The hackathon was structured around real pain points identified during our co-creation workshops, ensuring that innovation was grounded in genuine user needs rather than speculative technology.
            </p>
          </div>
          <div className="mt-12">
            <ArtifactPlaceholder label="Hackathon Event Documentation" />
          </div>
          <div className="mt-20">
            <SectionTitle>Strategic Impact</SectionTitle>
            <ImpactList
              items={[
                { metric: "200+", description: "participants from 15 Brazilian states" },
                { metric: "32", description: "solution prototypes developed in 48 hours" },
                { metric: "3 solutions", description: "adopted into the national judicial innovation roadmap" },
                { metric: "40%", description: "reduction in identified citizen friction points" },
                { metric: "5 state courts", description: "now using our replicable innovation framework" },
              ]}
            />
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ArtifactPlaceholder label="Journey Map — Before" />
            <ArtifactPlaceholder label="Journey Map — After" />
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default LabEnjHackathon;

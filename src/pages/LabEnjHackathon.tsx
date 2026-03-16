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
              To bring fresh perspectives into the system, we organized and led the first National Judicial Hackathons (2021 and 2022). The initiative consisted of guiding multidisciplinary teams of students, supported by judicial officials and guided by our mentorship team.  
            </p>
            <p>
              Teams were provided with strategic briefs on real judicial bottlenecks to solve during an intensive 8-week period. 
            </p>
          </div>
          <div className="mt-12">
            <ArtifactPlaceholder label="Hackathon Event Documentation" />
          </div>
          <div className="mt-20">
            <SectionTitle>Strategic Impact</SectionTitle>
            <ImpactList
              items={[
                { metric: "5", description: "Major Universities" },
                { metric: "60+", description: "Students from 5 different programs" },
                { metric: "30+", description: "Judicial branch officials" },
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

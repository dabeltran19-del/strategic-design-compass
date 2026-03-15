import Layout from "@/components/Layout";
import { PageHero } from "@/components/Section";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";
import ImpactList from "@/components/ImpactList";

const BusinessDesign = () => (
  <Layout>
    <PageHero title="Business Design — Growth Strategy" subtitle="FinTech & InsurTech" />
    <Section>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          {/* DolarApp */}
          <SectionTitle>DolarApp — Go-to-Market</SectionTitle>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              DolarApp is a cross-border payment platform enabling Latin American users to hold, send, and spend dollars seamlessly. We were engaged to design the go-to-market strategy for their expansion into new markets.
            </p>
            <p>
              Our approach combined behavioral research with competitive analysis to identify the key trust barriers and adoption drivers for a product that handles people's money across borders.
            </p>
          </div>
          <div className="mt-12">
            <ArtifactPlaceholder label="Go-to-Market Strategy Map" />
          </div>
          <div className="mt-8">
            <ImpactList
              items={[
                { metric: "Market entry strategy", description: "validated through user research across 3 countries" },
                { metric: "Acquisition framework", description: "built on trust-first behavioral insights" },
                { metric: "Competitive positioning", description: "defined against 12 regional players" },
              ]}
            />
          </div>

          {/* Seguros Mundial */}
          <div className="mt-24">
            <SectionTitle>Seguros Mundial — Trust-based Design</SectionTitle>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                Seguros Mundial is a traditional insurance company navigating digital transformation. We designed a trust-building framework that helped them translate their offline credibility into digital confidence.
              </p>
              <p>
                Insurance is fundamentally a trust product — people pay for a promise. Our design strategy centered on making that promise tangible, transparent, and verifiable at every digital touchpoint.
              </p>
            </div>
            <div className="mt-12">
              <ArtifactPlaceholder label="Trust Framework Blueprint" />
            </div>
            <div className="mt-8">
              <ImpactList
                items={[
                  { metric: "Trust-first design system", description: "applied across 4 digital products" },
                  { metric: "Transparency features", description: "that reduced support tickets by surfacing policy details" },
                  { metric: "Conversion uplift", description: "through redesigned onboarding flow" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default BusinessDesign;

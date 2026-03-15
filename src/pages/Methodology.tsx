import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { PageHero } from "@/components/Section";
import Section, { SectionTitle } from "@/components/Section";
import ArtifactPlaceholder from "@/components/ArtifactPlaceholder";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
};

const methodologies = [
  {
    index: "01",
    title: "Systems Thinking",
    description:
      "We see organizations as interconnected systems, not isolated parts. By mapping relationships, feedback loops, and leverage points, we identify where small interventions create outsized impact. This lens prevents the common trap of solving symptoms while ignoring root causes.",
  },
  {
    index: "02",
    title: "Expert Co-design",
    description:
      "Innovation cannot be imposed — it must be co-created. We design participatory processes that bring together domain experts, users, and stakeholders to generate solutions that are technically sound, organizationally viable, and genuinely user-centered.",
  },
  {
    index: "03",
    title: "Agile Delivery",
    description:
      "Strategy without execution is speculation. We structure delivery in iterative cycles that test assumptions early, incorporate feedback continuously, and adapt to emerging realities. This ensures that strategic vision translates into tangible, measurable outcomes.",
  },
];

const Methodology = () => (
  <Layout>
    <PageHero title="Methodology" subtitle="How We Work" />
    <Section>
      <SectionTitle>Three Pillars</SectionTitle>
      <div className="space-y-24">
        {methodologies.map((m) => (
          <motion.div key={m.index} {...fadeInUp} className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <span className="caps-label">{m.index}</span>
              <h3 className="mt-3 font-serif text-2xl font-medium">{m.title}</h3>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-5">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[65ch]">{m.description}</p>
              <div className="mt-8">
                <ArtifactPlaceholder label={`${m.title} Diagram`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section>
      <SectionTitle>The Process in Practice</SectionTitle>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              These three pillars are not sequential phases — they are concurrent lenses. At any point in a project, we are thinking systemically, co-creating with stakeholders, and delivering iteratively.
            </p>
            <p>
              This integration ensures that strategy remains grounded in reality, that innovation is inclusive and viable, and that delivery adapts to the complexity of the environment.
            </p>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Methodology;

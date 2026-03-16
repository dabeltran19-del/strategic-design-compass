import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import Section, { SectionTitle } from "@/components/Section";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-[20vh] md:py-[30vh]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6">
          <motion.div {...fadeInUp} className="col-span-12 md:col-span-10">
            <span className="caps-label block mb-8">Strategic Design Portfolio</span>
            <h1 className="font-serif text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[1.05] tracking-tight">
              Enabling teams to navigate complexity through expert facilitation, co&#8209;design, systems&nbsp;thinking, and agile&nbsp;delivery.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Cover Letter */}
      <Section>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionTitle>About</SectionTitle>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-serif text-3xl font-medium mb-8">I'm Laura Heshusius</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                I am a Strategic Designer dedicated to leading innovation within complex ecosystems. I focus on connecting business objectives with human needs to design practical, high-impact strategies.
              </p>
              <p>
                By orchestrating collaboration between multidisciplinary teams, I help organizations navigate friction and align diverse stakeholders toward shared goals. My expertise lies in transforming rigid, high-stakes systems into seamless journeys, ensuring that innovation is always viable, compliant, and user-centered.
              </p>
              <p>
                Currently, I am expanding my skills at POLI.Design — Politecnico di Milano, focusing on building new businesses and strategies through design.
              </p>
            </div>
            {/* Signature placeholder */}
            <div className="mt-12 text-muted-foreground/30 font-serif italic text-2xl">
              Laura
            </div>
          </div>
        </div>
      </Section>

      {/* Full-width image */}
      <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            [ Portrait / Studio Photo ]
          </span>
        </div>
      </div>

      {/* What I Do */}
      <Section>
        <SectionTitle>What I Do</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12">
          {[
            {
              index: "01",
              title: "Strategic Design",
              description: "I focus on connecting business objectives with human needs to design practical, high-impact strategies. By navigating complex ecosystems and institutional frameworks, I ensure that every solution is structurally solid, compliant, and perfectly aligned with business reality.",
            },
            {
              index: "02",
              title: "Service Transformation",
              description: "I specialize in redesigning how services are delivered by simplifying complexity and building trust. Through co-creation and user research, I translate technical or legal friction into competitive advantages that drive adoption and business ROI.",
            },
            {
              index: "03",
              title: "Strategic Integration",
              description: "I lead projects that transform complex services by bridging the gap between teams like Product, Legal, and Operations. My role is to break down silos and align everyone's goals to ensure a seamless journey that works for both the business and the user.",
            },
          ].map((item) => (
            <motion.div key={item.index} {...fadeInUp}>
              <span className="caps-label">{item.index}</span>
              <h3 className="mt-4 font-serif text-xl font-medium">{item.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Key Projects */}
      <Section>
        <SectionTitle>Key Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProjectCard
            title="LAB ENJ"
            category="Judicial Innovation"
            description="Transforming Brazil's judiciary through co-design, open innovation, and systems thinking."
            link="/lab-enj/context"
          />
          <ProjectCard
            title="Samsung Electronics"
            category="Organizational Alignment"
            description="Aligning cross-functional teams to deliver seamless product experiences."
            link="/samsung"
          />
          <ProjectCard
            title="Strategic Facilitation"
            category="Co-design & Workshops"
            description="Orchestrating complex stakeholder alignment through expert facilitation methods."
            link="/facilitation"
          />
          <ProjectCard
            title="Business Design"
            category="Growth Strategy"
            description="Go-to-market strategy and trust-based design for FinTech and InsurTech."
            link="/business-design"
          />
        </div>
      </Section>
    </Layout>
  );
};

export default Index;

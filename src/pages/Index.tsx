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
              Strategic Designer & Innovation Consultant
            </div>
          </div>
        </div>
      </Section>

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
            description="We designed and led LAB ENJ, a pioneering Justice Innovation Lab in the Dominican Republic. Created as a strategic collaboration with the National School of the Judiciary (ENJ), the lab was built to modernize the Judicial Branch by introducing agile methodologies and human-centered design into a traditionally rigid institution.  "
            link="/lab-enj/context"
          />
          <ProjectCard
            title="Samsung Electronics"
            category="Organizational Alignment"
            description="The organization sought to redesign its internal compliance program to ensure authentic adoption across all business units. The existing framework was perceived as a rigid, mandatory burden, creating a significant disconnect between legal requirements and the employees' daily reality. Our goal was to transform this static protocol into a human-centered service that felt integrated rather than imposed."
            link="/samsung"
          />
          <ProjectCard
            title="Strategic Facilitation"
            category="Co-design & Workshops"
            description='I have experience enabling teams to navigate complexity by "managing the room", leveraging expert facilitation, co-design, and systems thinking to guide stakeholders and multidisciplinary experts through the design process. By extracting collective intelligence and utilizing visual thinking, I navigate resistance to change and ensure that every participant is aligned toward shared strategic goals and actionable outcomes. My approach combines the rigor of strategic alignment with the speed of agile delivery, transforming abstract challenges into tangible, high-impact solutions.'
            link="/facilitation"
          />
          <ProjectCard
            title="Business Design"
            category="Growth Strategy"
            description='I applied Service Design methodologies to solve growth-related challenges, specifically focusing on reducing entry barriers in complex financial and insurance products. My work aligned user needs with business KPIs to drive conversion and trust.'
            link="/business-design"
          />
        </div>
      </Section>
    </Layout>
  );
};

export default Index;

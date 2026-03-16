import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
};

export const Section = ({ children, className = "" }: SectionProps) => (
  <motion.section {...fadeInUp} className={`py-8 md:py-12 ${className}`}>
    <div className="max-w-7xl mx-auto px-6">
      {children}
    </div>
  </motion.section>
);

export const SectionTitle = ({ children, index }: { children: React.ReactNode; index?: string }) => (
  <div className="border-b border-border pb-4 mb-12">
    {index && <span className="caps-label block mb-2">{index}</span>}
    <h2 className="font-serif text-2xl font-medium">{children}</h2>
  </div>
);

export const PageHero = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="py-[15vh] md:py-[20vh]">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div {...fadeInUp}>
        {subtitle && <span className="caps-label block mb-6">{subtitle}</span>}
        <h1 className="font-serif text-[clamp(2rem,6vw,4rem)] font-medium leading-[1.05] tracking-tight max-w-5xl">
          {title}
        </h1>
      </motion.div>
    </div>
  </div>
);

export default Section;
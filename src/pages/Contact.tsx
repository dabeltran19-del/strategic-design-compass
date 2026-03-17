import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Section from "@/components/Section";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
};

const Contact = () => (
  <Layout>
    <section className="py-[12vh] md:py-[18vh]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp}>
          <span className="caps-label block mb-6">Get in Touch</span>
          <h1 className="font-serif text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[1.05] tracking-tight">
            Let's Connect
          </h1>
        </motion.div>
      </div>
    </section>

    <Section>
      <div className="grid grid-cols-12 gap-6 md:gap-12">

        {/* Left — intro */}
        <motion.div {...fadeInUp} className="col-span-12 md:col-span-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm always open to new collaborations, projects, and conversations about strategic design. Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Right — contact details */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">

          <motion.div {...fadeInUp} className="border-t border-border pt-6">
            <p className="caps-label mb-3">Email</p>
            
              href="mailto:lauraheshusius6@gmail.com"
              className="font-serif text-xl font-medium link-underline"
            >
              lauraheshusius6@gmail.com
            </a>
          </motion.div>

          <motion.div {...fadeInUp} className="border-t border-border pt-6">
            <p className="caps-label mb-3">Mobile</p>
            
              href="tel:+393515869476"
              className="font-serif text-xl font-medium link-underline"
            >
              +39 3515869476
            </a>
          </motion.div>

          <motion.div {...fadeInUp} className="border-t border-border pt-6">
            <p className="caps-label mb-3">WhatsApp</p>
            
              href="https://wa.me/573213099169"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-xl font-medium link-underline"
            >
              +57 3213099169
            </a>
          </motion.div>

          <motion.div {...fadeInUp} className="border-t border-border pt-6">
            <p className="caps-label mb-3">LinkedIn</p>
            
              href="https://www.linkedin.com/in/laura-heshusius-g-023566140/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-xl font-medium link-underline"
            >
              laura-heshusius-g
            </a>
          </motion.div>

          <motion.div {...fadeInUp} className="border-t border-border pt-6">
            <p className="caps-label mb-3">Currently Based</p>
            <p className="font-serif text-xl font-medium">Milano, Italy</p>
          </motion.div>

          <motion.div {...fadeInUp} className="border-t border-border pt-6">
            <p className="caps-label mb-3">Studies</p>
            
              href="https://www.polidesign.net/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-xl font-medium link-underline"
            >
              POLI.Design — Politecnico di Milano
            </a>
          </motion.div>

        </div>
      </div>
    </Section>
  </Layout>
);

export default Contact;
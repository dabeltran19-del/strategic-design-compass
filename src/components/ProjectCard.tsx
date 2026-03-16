import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  link: string;
  image?: string;
}

const ProjectCard = ({ title, category, description, link, image }: ProjectCardProps) => (
  <Link to={link}>
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="group flex flex-col border-t border-border pt-8 pb-8 h-full transition-colors duration-400 hover:border-foreground"
    >
      <span className="caps-label">{category}</span>
      <h3 className="mt-4 font-serif text-3xl font-medium">{title}</h3>
      <p className="mt-4 max-w-md text-muted-foreground text-lg">{description}</p>
      <div className="mt-auto pt-12 aspect-video bg-muted border border-border overflow-hidden flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="font-mono text-[10px] text-muted-foreground/50">[ ARTIFACT: {title.toUpperCase()} ]</span>
        )}
      </div>
    </motion.div>
  </Link>
);

export default ProjectCard;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ title, category, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to="/projects/project-one" aria-label="Single Project">
        <div className="bg-secondary-light dark:bg-ternary-dark shadow-md hover:shadow-xl mb-10 sm:mb-0 transition-all cursor-pointer">
          <div>
            <img src={image} className="border-none" alt="Single Project" />
          </div>
          <div className="px-4 py-6 text-center">
            <p>{title}</p>
            <span>{category}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;

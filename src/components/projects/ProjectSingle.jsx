import { motion } from "framer-motion";

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
      <div className="bg-secondary-light dark:bg-ternary-dark shadow-md hover:shadow-xl mb-10 sm:mb-0 transition-all cursor-pointer">
        <div>
          <img
            src={image}
            className="border-none"
            alt={`Project of - ${title}`}
            width={336}
            height={293}
          />
        </div>
        <div className="px-4 py-6 text-center">
          <p>{title}</p>
          <span>{category}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;

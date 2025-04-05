import { motion } from "framer-motion";

const ProjectSingle = ({ title, category, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="shadow-md hover:shadow-xl transition-all cursor-pointer">
        <div>
          <img
            src={image}
            className="border-none"
            alt={`Project of - ${title}`}
          />
        </div>
        <div className="px-4 py-6 text-base text-center sm:text-sm">
          <p>{title}</p>
          <span>{category}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;

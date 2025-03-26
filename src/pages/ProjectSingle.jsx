import { motion } from "framer-motion";
import { useParams } from "react-router-dom"; // Import useParams
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import { SingleProjectProvider } from "../context/SingleProjectContext";

const ProjectSingle = () => {
  const { projectId } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="mx-auto mt-5 sm:mt-10 container"
    >
      <SingleProjectProvider>
        <ProjectHeader projectId={projectId} />
        <ProjectGallery projectId={projectId} />
        <ProjectInfo projectId={projectId} />
      </SingleProjectProvider>
    </motion.div>
  );
};

export default ProjectSingle;

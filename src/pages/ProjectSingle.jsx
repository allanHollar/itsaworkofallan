import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import { SingleProjectProvider } from "../context/SingleProjectContext";
import AppPreFooter from "../components/shared/AppPreFooter/AppPreFooter";
import AppFooter from "../components/shared/AppFooter/AppFooter.jsx";

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
      className="mx-auto mt-[74px]"
    >
      <SingleProjectProvider>
        <ProjectHeader projectId={projectId} />
        <ProjectGallery projectId={projectId} />
        <ProjectInfo projectId={projectId} />
      </SingleProjectProvider>

      <AppPreFooter />
      <AppFooter />
    </motion.div>
  );
};

export default ProjectSingle;

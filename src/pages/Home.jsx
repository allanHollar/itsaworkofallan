// External libraries
import { motion } from "framer-motion";

// Context Providers
import { AboutMeProvider } from "../context/AboutMeContext";
import { ResumeProvider } from "../context/ResumeContext";
import { ProjectsProvider } from "../context/ProjectsContext";

// Page Sections / Components
import AppBanner from "../components/shared/AppBanner/AppBanner";
import AboutMeBio from "../components/about/AboutMeBio";
import CoreSkills from "../components/shared/CoreSkills/CoreSkills";
import WorkHistory from "../components/shared/WorkHistory/WorkHistory";
import ProjectsGrid from "../components/projects/ProjectsGrid";

// Layout / Utility Components
import HorizontalRule from "../components/shared/HorizontalRule";
import AppPreFooter from "../components/shared/AppPreFooter/AppPreFooter";
import AppFooter from "../components/shared/AppFooter/AppFooter.jsx";

const Home = () => {
  return (
    <div className="top-0 pt-[74px] w-full">
      <AppBanner />
      <AboutMeProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
          className="bg-[#1B1212] w-full"
        >
          <AboutMeBio />
        </motion.div>
      </AboutMeProvider>
      <ResumeProvider>
        <CoreSkills />
      </ResumeProvider>
      <HorizontalRule />
      <ResumeProvider>
        <WorkHistory />
      </ResumeProvider>
      <HorizontalRule />
      <ProjectsProvider>
        <ProjectsGrid />
      </ProjectsProvider>
      <AppPreFooter />
      <AppFooter />
    </div>
  );
};

export default Home;

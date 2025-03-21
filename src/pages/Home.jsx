import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectsProvider } from "../context/ProjectsContext";
import { AboutMeProvider } from "../context/AboutMeContext";
import { ResumeProvider } from "../context/ResumeContext";
import AppBanner from "../components/shared/AppBanner/AppBanner";
import Button from "../components/reusable/Button";
import AboutMeBio from "../components/about/AboutMeBio";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import CoreSkills from "../components/shared/CoreSkills/CoreSkills";
import { HorizontalRule } from "../components/shared/HorizontalRule";

const Home = () => {
  return (
    <div className="w-full">
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
        <CoreSkills />
      </ResumeProvider>
    </div>
  );
};

export default Home;

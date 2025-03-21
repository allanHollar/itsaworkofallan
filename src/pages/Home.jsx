import { motion } from "framer-motion";

import AboutMeBio from "../components/about/AboutMeBio";
import AppBanner from "../components/shared/AppBanner/AppBanner";
import CoreSkills from "../components/shared/CoreSkills/CoreSkills";
import { HorizontalRule } from "../components/shared/HorizontalRule";
import WorkHistory from "../components/shared/WorkHistory/WorkHistory";
import { AboutMeProvider } from "../context/AboutMeContext";
import { ResumeProvider } from "../context/ResumeContext";

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
        <WorkHistory />
      </ResumeProvider>
      <HorizontalRule />
    </div>
  );
};

export default Home;

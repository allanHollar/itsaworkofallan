// External libraries
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

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
import AppFooter from "../components/shared/AppFooter/AppFooter";

const Home = () => {
  return (
    <div className="top-0 pt-[74px] w-full">
      <Helmet>
        <title>It's a work of Allan! 🙂</title>
        <meta
          name="description"
          content="Senior Frontend Engineer & UX/UI Enthusiast – Portfolio of Allan Ritumban"
        />
        <meta
          name="keywords"
          content="Frontend Engineer, UX/UI, Allan Ritumban, React, Portfolio"
        />
        <meta name="author" content="Allan Ritumban" />

        {/* Open Graph (social sharing) */}
        <meta property="og:title" content="It's a Work of Allan" />
        <meta
          property="og:description"
          content="Senior Frontend Engineer & UX/UI Enthusiast – Portfolio of Allan Ritumban"
        />
        <meta
          property="og:image"
          content="https://itsaworkofallan.me/og-image.jpg"
        />
        <meta property="og:url" content="https://itsaworkofallan.me" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="It's a Work of Allan" />
        <meta
          name="twitter:image"
          content="https://itsaworkofallan.me/og-image.jpg"
        />
        <meta
          name="twitter:description"
          content="Senior Frontend Engineer & UX/UI Enthusiast – Portfolio of Allan Ritumban"
        />
        <meta
          name="twitter:image"
          content="https://itsaworkofallan.me/og-image.jpg"
        />
      </Helmet>

      <AppBanner />
      <AboutMeProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectsProvider } from "../context/ProjectsContext";
import { AboutMeProvider } from "../context/AboutMeContext";
import AppBanner from "../components/shared/AppBanner/AppBanner";
import Button from "../components/reusable/Button";
import AboutMeBio from "../components/about/AboutMeBio";
import AboutCounter from "../components/about/AboutCounter";
import AboutClients from "../components/about/AboutClients";
import ProjectsGrid from "../components/projects/ProjectsGrid";

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

        {/** Counter without paddings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
        >
          <AboutCounter />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
          className="mx-auto container"
        >
          <AboutClients />
        </motion.div>
      </AboutMeProvider>
      <ProjectsProvider>
        <ProjectsGrid />
      </ProjectsProvider>
      <div className="flex justify-center mt-8 sm:mt-10">
        <Link
          to="/projects"
          className="flex items-center bg-indigo-500 hover:bg-indigo-600 shadow-lg hover:shadow-xl px-6 py-3 rounded-lg focus:ring-1 focus:ring-indigo-900 font-general-medium text-lg text-white sm:text-xl duration-300"
          aria-label="More Projects"
        >
          <Button title="More Projects" />
        </Link>
      </div>
    </div>
  );
};

export default Home;

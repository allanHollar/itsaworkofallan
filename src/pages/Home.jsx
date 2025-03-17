import { Link } from "react-router-dom";
import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import Button from "../components/reusable/Button";

const Home = () => {
  return (
    <div className="mx-auto">
      <AppBanner></AppBanner>

      <ProjectsProvider>
        <ProjectsGrid></ProjectsGrid>
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

import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";
import { Link } from "react-router-dom";
import ProjectSingle from "./ProjectSingle";
import HappyNinja from "../../images/happy-ninja.webp";

const ProjectsGrid = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <section
      id="projects"
      className="mx-auto mt-8 sm:mt-10 py-5 sm:py-10 container"
    >
      <div className="text-center">
        <h3 className="mb-5 text-[#5A5A5A] text-4xl tracking-wide happy-monkey-regular">
          <span className="border-[#efd5b4] border-b-4">Built & Shipped!</span>
        </h3>

        <img
          className="block mx-auto mb-5"
          src={HappyNinja}
          alt="Happy Ninja"
          width={100}
          height={100}
        />
      </div>

      <div className="sm:gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 mb-5">
        {Object.keys(projects).map((projectId) => {
          const project = projects[projectId];
          return (
            <Link to={`/projects/${projectId}`} key={projectId}>
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsGrid;

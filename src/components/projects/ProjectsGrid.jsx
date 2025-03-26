import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectSingle from "./ProjectSingle";
import HappyNinja from "../../images/happy-ninja.webp";

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    searchProjectsByTitle,
    selectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  return (
    <section className="mx-auto mt-8 sm:mt-10 py-5 sm:py-10 container">
      <div className="text-center">
        <h3 className="mb-3 text-[#5A5A5A] text-3xl tracking-wide">
          Built & Shipped!
        </h3>
        <img
          className="block mx-auto"
          src={HappyNinja}
          alt="Happy Ninja"
          width="75"
        />
      </div>

      <div className="sm:gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
              />
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
              />
            ))
          : projects.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
              />
            ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;

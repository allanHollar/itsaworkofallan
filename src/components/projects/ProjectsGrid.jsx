import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  return (
    <section className="mx-auto mt-5 sm:mt-10 py-5 sm:py-10 container">
      <div className="text-center">
        <p className="mb-1 font-general-medium text-2xl text-ternary-dark sm:text-4xl dark:text-ternary-light">
          Projects portfolio
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <h3 className="mb-3 font-general-regular text-center text-md text-secondary-dark sm:text-xl dark:text-ternary-light">
          Search projects by title or filter by category
        </h3>
        <div className="flex justify-between gap-3 pb-3 border-primary-light dark:border-secondary-dark border-b">
          <div className="flex justify-between gap-2">
            <span className="sm:block hidden bg-primary-light dark:bg-ternary-dark shadow-sm p-2.5 rounded-xl cursor-pointer">
              <FiSearch className="w-5 h-5 text-ternary-dark dark:text-ternary-light"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="bg-secondary-light dark:bg-ternary-dark sm:px-4 py-2 pr-1 pl-3 border border-gray-200 dark:border-secondary-dark rounded-lg font-general-medium text-primary-dark text-sm sm:text-md dark:text-ternary-light"
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
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

import { useContext } from "react";

import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectRelatedProjects = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="mt-10 sm:mt-20 pt-10 sm:pt-14 border-t-2">
      <p className="mb-10 sm:mb-14 font-bold font-general-regular text-3xl text-left">
        {singleProjectData.RelatedProject.title}
      </p>

      <div className="gap-10 grid grid-cols-1 sm:grid-cols-4">
        {singleProjectData.RelatedProject.Projects.map((project) => {
          return (
            <img
              src={project.img}
              className="rounded-xl cursor-pointer"
              alt={project.title}
              key={project.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;

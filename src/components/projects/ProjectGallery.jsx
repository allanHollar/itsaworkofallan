import { useContext } from "react";

import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const projectId = "project-one";
  const projectData = singleProjectData[projectId];

  return (
    <div className="sm:gap-10 grid grid-cols-1 sm:grid-cols-3 mt-12">
      {projectData.projectImages.map((project) => {
        return (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <img
              src={project.img}
              className="shadow-lg sm:shadow-none cursor-pointer"
              alt={project.title}
              key={project.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGallery;

import { useContext } from "react";

import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectSingleHeader = ({ projectId }) => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const project = projectId;
  const projectData = singleProjectData[project];

  return (
    <div className="mx-auto container">
      <h2 className="mb-4 pt-5 text-[#5A5A5A] text-3xl tracking-wide happy-monkey-regular">
        <span className="border-[#efd5b4] border-b-4">
          {projectData.projectHeader.title}
        </span>
      </h2>
      <div className="flex">
        <div className="flex items-center mr-5">
          <span>⏳ {projectData.projectHeader.tenure}</span>
        </div>

        <div className="flex items-center">
          <span>🥷🏼 {projectData.projectHeader.jobTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleHeader;

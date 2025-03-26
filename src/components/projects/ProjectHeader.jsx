import { useContext } from "react";
import { FiBookmark, FiUserCheck } from "react-icons/fi";

import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectSingleHeader = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const projectData = singleProjectData.projectOne;

  return (
    <div>
      <h2 className="mb-4 font-semibold text-[#5A5A5A] text-3xl tracking-wide">
        <span className="border-[#efd5b4] border-b-4">
          {projectData.projectHeader.title}
        </span>
      </h2>
      <div className="flex">
        <div className="flex items-center mr-10">
          <FiBookmark className="mr-1" />
          <span>{projectData.projectHeader.tenure}</span>
        </div>

        <div className="flex items-center">
          <FiUserCheck className="mr-1" />
          <span>{projectData.projectHeader.jobTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleHeader;

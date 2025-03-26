import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const projectData = singleProjectData.projectOne;

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <h4 className="mb-1 font-semibold tracking-wide">
            {projectData.projectInfo.clientHeading}
          </h4>
          <ul className="leading-loose">
            {projectData.projectInfo.companyInfo.map((info) => {
              return (
                <li key={info.id}>
                  {info.title === "Website" ? (
                    <>
                      <span>{info.title}: </span>
                      <a href={info.details}> {info.details}</a>{" "}
                    </>
                  ) : (
                    <>
                      <span>{info.title}: </span>
                      {info.details}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <h4 className="mb-1 font-semibold tracking-wide">
            {projectData.projectInfo.technologies[0].title}
          </h4>
          <p>{projectData.projectInfo.technologies[0].techs.join(", ")}</p>
        </div>
      </div>

      {/*  Single project right section */}
      <div className="mt-10 sm:mt-0 w-full sm:w-2/3 text-left">
        <h3 className="mb-5 text-xl tracking-wide">
          {projectData.projectInfo.projectDetailsHeading}
        </h3>
        {projectData.projectInfo.projectDetails.map((details) => {
          return (
            <p className="mb-4" key={details.id}>
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;

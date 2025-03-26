import { useState, createContext } from "react";
import { projectsData as projectsDataJson } from "../data/projectsData";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const [singleProjectData, setSingleProjectData] = useState(projectsDataJson);

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;

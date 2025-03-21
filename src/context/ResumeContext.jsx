import { useState, createContext } from "react";

import { resumeData } from "../data/resumeData";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resume] = useState(resumeData);

  return (
    <ResumeContext.Provider
      value={{
        resume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContext;

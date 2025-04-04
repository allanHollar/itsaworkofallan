import { useState, createContext, ReactNode } from "react";
import { projectsData } from "../data/projects";
import { ProjectData } from "../types/types";

interface ProjectsContextType {
  projects: ProjectData;
}

interface ProjectsProviderProps {
  children: ReactNode;
}

export const ProjectsContext = createContext<ProjectsContextType | null>(null);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [projects] = useState(projectsData);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

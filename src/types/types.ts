export interface ResumeItem {
  bgColor: string;
  completed: number;
  id: number;
  title: string;
}

export interface Resume {
  languages: ResumeItem[];
  technologiesAndTools: string[];
  softSkills: string[];
  workHistory: WorkExperience[];
}

export interface WorkExperience {
  company: string;
  jobTitle: string;
  tenure: string;
  responsibilities: string[];
}

export interface AboutMeItem {
  id: number;
  bio: string;
}

export interface ProjectHeader {
  title: string;
  publishDate: string;
  tags: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  projectHeader?: ProjectHeader;
}

export type ProjectData = Record<string, Project>;

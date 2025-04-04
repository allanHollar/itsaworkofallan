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

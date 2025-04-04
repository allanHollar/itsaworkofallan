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
}

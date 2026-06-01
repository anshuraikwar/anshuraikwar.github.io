export type ExperienceData = {
  [company: string]: {
    role: string;
    duration: string;
    responsibilities?: (string | { text: string; subpoints?: string[] })[];
    skills?: string[];
  }
};
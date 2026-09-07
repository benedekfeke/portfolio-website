export type ProjectCategory = 
  | 'all'
  | 'full-stack'
  | 'frontend'
  | 'systems'
  | 'open-source';

export interface Project {
  id: string;
  slug: string;
  title: string;
  clientOrOrg?: string;
  role: string;
  year: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  fullOverview: string;
  problemStatement?: string;
  keyHighlights: string[];
  technologies: string[];
  imagePlaceholderUrl: string;
  imageAlt: string;
  objectFit?: 'cover' | 'contain';
  featured?: boolean;
  aspectRatio?: '16/10' | '4/3' | '1/1';
  githubUrl?: string;
  liveDemoUrl?: string;
  architectureDetails?: { label: string; value: string }[];
  isPlaceholder: boolean;
}

export type SkillCategory = 
  | 'languages'
  | 'backend'
  | 'frontend'
  | 'devops'
  | 'testing'
  | 'architecture';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  categoryLabel: string;
  /**
   * Proficiency level from 0 to 100. Easily customizable in code.
   */
  proficiency: number;
  levelLabel: 'Advanced' | 'Intermediate' | 'Beginner' | 'Basics' | 'Completed' | 'Expert' | 'Proficient' | 'Familiar';
  yearsExperience?: string;
  note?: string;
}

export interface LearningTopic {
  id: string;
  title: string;
  area: string;
  status: 'In Progress' | 'Deep Dive' | 'Completed' | 'in progress–Practice' | string;
  keyTakeaway: string;
  resources: string;
  targetDate?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gradeOrHonors?: string;
  description: string;
  coursework: string[];
  capstoneOrThesis?: string;
}

export interface MilestoneItem {
  period: string;
  role: string;
  organization: string;
  summary: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  verificationUrl: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period?: string;
  description?: string;
}

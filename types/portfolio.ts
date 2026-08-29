export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  repositoryUrl: string;
  image: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  skills: string[];
  image: string;
  credentialId?: string;
}

export interface Experience {
  period: string;
  organization: string;
  title: string;
  description: string;
}

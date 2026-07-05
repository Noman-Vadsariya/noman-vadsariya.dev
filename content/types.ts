export type Discipline = "SWE" | "ML" | "Data-Eng";

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  disciplines: Discipline[];
  highlights: string[];
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
  coursework?: string[];
};

export type Profile = {
  name: string;
  shortName: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl?: string;
};

export type Award = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  count?: number;
};

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  period: string;
  summary: string;
  disciplines: Discipline[];
  tech: string[];
  cover?: string;
  links?: { label: string; url: string }[];
};

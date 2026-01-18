
export type About = {
  name: string;
  role: string;
  location: string;
  phone: string;
  title: string;
  subtitle: string;

};

export type EducationItem = {
  school: string;
  degree: string;
  start: string; // "09/2018"
  end: string;   // "01/2023"
  location: string;
  highlights: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
};

export type ProjectItem = {
  name: string;
  start: string;
  end: string;
  bullets: string[];
  href?: string;
  github?: string;
};

export type SkillItem = {
  name: string;
  level: string;
};

export type LanguageItem = {
  name: string;
  level: string;
};

export type CertificateItem = {
  name: string;
  certificate: string;
};

export type RoleTitle = {
  title: string[];
};

export type MyNetworks = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

export type ResumeData = {
  about: About;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillItem[];
  languages: LanguageItem[];
  certificates: CertificateItem[];
  roleTitles: RoleTitle;
  myNetworks: MyNetworks[];
};


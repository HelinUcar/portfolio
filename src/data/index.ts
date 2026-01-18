import type { ResumeData } from "./types";

import { aboutTr } from "./tr/basics";
import { educationTr } from "./tr/education";
import { experienceTr } from "./tr/experience";
import { projectsTr } from "./tr/projects";
import { skillsTr } from "./tr/skills";
import { languagesTr } from "./tr/languages";
import { certificatesTr } from "./tr/certificates";
import { roleTitlesTr } from "./tr/roletitles";

import { aboutEn } from "./en/basics";
import { educationEn } from "./en/education";
import { experienceEn } from "./en/experience";
import { projectsEn } from "./en/projects";
import { skillsEn } from "./en/skills";
import { languagesEn } from "./en/languages";
import { certificatesEn } from "./en/certificates";
import { roleTitlesEn } from "./en/roletitles";

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react"

export const MyNetworks = [{
  name: "Github",
  icon: IconBrandGithub,
  href: "https://github.com/HelinUcar/",
},
{
  name: "Linkedin",
  icon: IconBrandLinkedin,
  href: "https://www.linkedin.com/in/helin-duygu-u%C3%A7ar-64043617b/",
},
{
  name: "Email",
  icon: IconMail,
  href: "helinduyguucar@gmailcom",
},
{
  name: "Instagram",
  icon: IconBrandInstagram,
  href: "https://www.instagram.com/helinducr/",
},
];

export type Lang = "tr" | "en";

export const RESUME: Record<Lang, ResumeData> = {
  tr: {
    about: aboutTr,
    education: educationTr,
    experience: experienceTr,
    projects: projectsTr,
    skills: skillsTr,
    languages: languagesTr,
    certificates: certificatesTr,
    roleTitles: roleTitlesTr,
    myNetworks: MyNetworks,
  },
  en: {
    about: aboutEn,
    education: educationEn,
    experience: experienceEn,
    projects: projectsEn,
    skills: skillsEn,
    languages: languagesEn,
    certificates: certificatesEn,
    roleTitles: roleTitlesEn,
    myNetworks: MyNetworks,
  },



};

export const DEFAULT_LANG = "tr";
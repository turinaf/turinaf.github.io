export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "January 2024-present",
    title: "Research Assitant",
    company: "CSLT, Tsinghua University",
    description:
      "Working speech recognition and keyword spotting. Created first of its kind ASR dataset for Oromo language",
    advisor: "Prof Dong Wang",
    companyUrl: "http://cslt.org/",
  },
  {
    date: "October 2022 - March 2023",
    title: "Intern-AI Engineer",
    company: "HCYtech",
    description:
      "Worked on smoking person detection form survillaience camera, built customo chatbot using OpenAI API, Speech to text API using open source Whisper model.",
    // manager: "",
    companyUrl: "https://www.hcytech.net/",
  },
];

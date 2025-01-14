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
      "Working on Automatic Speech Recognition for Oromo Language.\n\n"+
      "* Developed data collection mobile app.\n"+
      "* Created 100 hours of read speech dataset.\n"+
      "* Published experiment result and open sourced the dataset.\n"+
      "* Exploring different techniques to improve the ASR results, inluding Language modeling and finetuning strategies.",
    advisor: "Prof Dong Wang, Prof Thomas Fang Zheng",
    companyUrl: "http://cslt.org/",
  },
  {
    date: "October 2022 - March 2023",
    title: "Intern-AI Engineer",
    company: "HCYtech",
    description: 
    "Joined AI Department of the company. Key responsibilities included:\n" +
    "* Develope smoking detection system using computer vision, from surveillance camera feeds\n" +
    "* Developed custom chatbot using OpenAI API.\n" +
    "* Deployed speech-to-text service using the Whisper model.",
    // manager: "",
    companyUrl: "https://www.hcytech.net/",
  },
];

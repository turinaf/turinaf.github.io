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
    date: "2026-present",
    title: "PhD Researcher",
    company: "CSLT, Tsinghua University",
    description:
      "Working on Visual Speech Recognition at CSLT.\n\n" +
      "* Conducting PhD research in speech and language technologies.\n" +
      "* Exploring multimodal approaches for robust speech understanding.",
    advisor: "Prof. Dong Wang, Prof. Thomas Fang Zheng",
    companyUrl: "http://cslt.org/",
  },
  {
    date: "Present",
    title: "Building",
    company: "HayuLabs",
    description:
      "Building hayulabs.com, speech AI and AI-assisted text editor for low resource langauges",
    companyUrl: "https://hayulabs.com/",
  },
  {
    date: "Previously",
    title: "Founding Engineer",
    company: "Qilingo",
    description:
      "Founding engineer at Qilingo, worked GoAssistant customized assistant with LLM tool use.",
    companyUrl: "https://cheelin.ai/",
  },
  {
    date: "October 2022 - March 2023",
    title: "Intern-AI Engineer",
    company: "HCYtech",
    description: 
    "Joined the AI department. Key responsibilities included:\n" +
    "* Developed a smoking detection system using YOLO from surveillance camera feeds.\n" +
    "* Built a custom chatbot with the OpenAI API and speech-to-text using Whisper.\n",
    // manager: "",
    companyUrl: "https://www.hcytech.net/",
  },
];

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
    date: "June 2026 - August 2026",
    title: "Intern AI Engineer",
    company: "Z.ai",
    companyUrl: "https://z.ai",
    description:
      "Worked on [AutoClaw](https://autoclaw.z.ai/) and Zwork, AI agent harnesses that can complete long horizon tasks helping people complete their work.",
  },
  {
    date: "September 2025 - Present",
    title: "Research Assistant",
    company: "CSLT, Tsinghua University",
    advisor: "Prof. Thomas Fang Zheng",
    companyUrl: "http://cslt.org/",
    description:
      "Focus: Visual Speech Recognition, learning the relationship between lip movement and transcript.\n\n" +
      "* Masters Work (December 2023 - June 2025): Speech recognition for low resource languages. Created a speech recognition dataset and open sourced it.",
  },
  {
    date: "October 2022 - March 2023",
    title: "Intern-AI Engineer",
    company: "Hongchengyun Technology Co., Ltd (HCYTech)",
    description:
      "* Smoke Detection: trained a cigarette smoking detection model using YOLO and built a smoking detection API.\n" +
      "* Speech Recognition: built an API for speech recognition using the open source Whisper model.",
    companyUrl: "https://www.hcytech.net/",
  },
];

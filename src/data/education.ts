export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—Present",
    institution: "Tsinghua University",
    degree: "Master in Computer Science",
    advisor: "Prof. Thomas Fang Zheng, Prof Dong Wang",
  },
  {
    year: "2019—2023",
    institution: "University of Electronic Science and Technology of China",
    degree: "B.Sc in Software Engineering",
    thesis: "Grammatical Error Correction Using LLM",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];

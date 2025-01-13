export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Finetuning LLM for grammatical error correction",
    description:
      "Built something similar to Grammarly using finetuned LLM",
    technologies: ["Python", "PyTorch", "Flask", "React"],
    // projectUrl: "https://project-demo.com",
    imageUrl: "/images/grammarly.png",
    codeUrl: "https://github.com/turinaf/gec-ml",
  },
  {
    title: "CodeDing - Semantic Code Search engine",
    description:
      "Index code segments to enable to search semantically through code bases.",
    technologies: ["Python", "LLM", "flask", "document indexing"],
    // projectUrl: "https://project-demo.com",
    imageUrl: "/images/code_search.png",
    codeUrl: "https://github.com/turinaf/codedig",
  },
  {
    title: "Distributed Database Management System",
    description:
      "Design and implementation of Distributed database system.",
    technologies: ["Python", "MinIO", "MySQL", "Flask"],
    // projectUrl: "https://project-demo.com",
    imageUrl: "/images/ddbs.png",
    codeUrl: "https://github.com/turinaf/DDBMS",
  },
];

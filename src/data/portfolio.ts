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
    title: "Finetuning LLM for Grammatical Error Correction (GEC)",
    description:
      "Finetuned LLM for GEC and Developed GEC app. Key features include:\n" +
      "* Fine-tuned T5 Flan-based models on JFLEG dataset\n" +
      "* Built a REST API service with Flask\n" +
      "* Designed an intuitive React frontend with real-time correction suggestions",
    technologies: ["Python", "PyTorch", "Flask", "React"],
    // projectUrl: "https://project-demo.com",
    imageUrl: "/images/grammarly.png",
    codeUrl: "https://github.com/turinaf/gec-ml",
  },
  {
    title: "CodeDig - Semantic Code Search Engine",
    description:
      "Built semantic code search engine that understands code context and functionality. Features include:\n\n" +
      "* Used ChatGLM API to generate semantic descriptions of code segments, enabling natural language queries\n" +
      "* Indexed code segments using whoosh library\n" +
      "* Developoed demo app using Flask \n",
    technologies: ["Python", "LLM", "flask", "Document indexing"],
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

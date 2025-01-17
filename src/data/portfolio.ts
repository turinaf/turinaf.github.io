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
    title: "Mobile Application for Speech Data Collection",
    description:
      "* Developed android application for Automatic Speech Recognition data colllection using Flutter and firebase",
    technologies: ["Flutter", "Firebase", "Android"],
    // projectUrl: "https://project-demo.com",
    imageUrl: "/images/app.png",
    codeUrl: "https://github.com/turinaf/sagalee",
  },
  {
    title: "Local Retrieval Augmented Generation (RAG) Using Ollama",
    description:
      "* Built a local RAG using open source llama model for question answering task",
    technologies: ["Docker", "Ollama", "Flask", "RAG"],
    // projectUrl: "https://project-demo.com",
    imageUrl: "/images/rag.png",
    codeUrl: "https://github.com/turinaf/rag_ollama",
  },
  {
    title: "Finetuning LLM for Grammatical Error Correction (GEC)",
    description:
      "* Fine-tuned T5 Flan-based model on JFLEG dataset for GEC task, and built Grammarly like website for demo\n",
    technologies: ["Python", "PyTorch", "Flask", "React", "LLM"],
    // projectUrl: "https://project-demo.com",
    imageUrl: "/images/grammarly.png",
    codeUrl: "https://github.com/turinaf/gec-ml",
  },
  {
    title: "CodeDig - Semantic Code Search Engine",
    description:
      "* Built a semantic code search engine using ChatGLM API, whoosh library, and Flask.",
    technologies: ["Python", "LLM", "flask", "Document indexing"],
    // projectUrl: "https://project-demo.com",
    imageUrl: "/images/code_search.png",
    codeUrl: "https://github.com/turinaf/codedig",
  },
  {
    title: "Distributed Database Management System",
    description:
      "* Design and implementation of Distributed database system.",
    technologies: ["Python", "MinIO", "MySQL", "Flask"],
    // projectUrl: "https://project-demo.com",
    imageUrl: "/images/ddbs.png",
    codeUrl: "https://github.com/turinaf/DDBMS",
  },
];

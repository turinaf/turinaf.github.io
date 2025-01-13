export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "ICASSP",
    title: "Sagalee: An Open Source Automatic Speech Recognitioin Dataset for Oromo language",
    authors: "Turi Abu, Shi Ying, Thomas Fang Zheng, Dong Wang",
    paperUrl: "https://arxiv.org/abs/2409.15476",
    codeUrl: "https://github.com/turinaf/sagalee",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Created speech dataset for Oromo language and established baseline models",
    imageUrl: "/images/app.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "International Journal of Machine Learning and Cybernetics",
    title: "Unified Deep Learning Model for Multitask Representation and Transfer Learning: Image Classification, Object Detection, and Image Captioning",
    authors: "LY Bayisa, W Wang, Q Wang, CC Ukwuoma, Gutem HK, Endris A and Turi Abu",
    paperUrl: "https://link.springer.com/article/10.1007/s13042-024-02177-5",
    // codeUrl: "",
    // imageUrl: ""
  },
  {
    year: "2023",
    conference: "Direct Research Journal of Public Health and Environmental Technology",
    title: "Attention-Based End-to-End Hybrid Ensemble Model for Breast Cancer Multi-Classification",
    authors: "CC Ukwuoma, D Cai, ES gATI, VK Agbesi, G Deribachew, LY Bayisa, and Turi Abu",
    paperUrl: "https://directresearchpublisher.org/drjphet/abstract/attention-based-end-to-end-hybrid-ensemble-model-for-breast-cancer-multi-classification/",
    // codeUrl: "",
    // imageUrl: ""
  },
];

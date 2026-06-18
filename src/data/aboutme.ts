export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  lastUpdated?: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Turi Abu",
  title: "PhD Student in Computer Science",
  institution: "Tsinghua University",
  // Note that links work in the description
  description:
  "I recently started my PhD in Computer Science at <a href='https://www.tsinghua.edu.cn/en/'>Tsinghua University</a>. I am conducting research at the <a href='http://cslt.org'>Center for Speech and Language Technologies (CSLT)</a> under the supervision of <a href='https://scholar.google.com/citations?user=H3MX_8IAAAAJ&hl=en'>Prof. Thomas Fang Zheng</a>. My current work focuses on Visual Speech Recognition, and my broader interests span speech and language technologies, including ASR, multimodal speech understanding, and NLP.",

  email: "turiabu548@outlook.com",
  lastUpdated: "June 18, 2026",
  imageUrl: "/images/undergrad.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=KlqWypQAAAAJ&hl=en",
  githubUsername: "turinaf",
  linkedinUsername: "turi-abu",
  twitterUsername: "QubeeGen",
  // blogUrl: "https://",
  cvUrl: "/cv.pdf",
  institutionUrl: "https://www.tsinghua.edu.cn/en/",
  // altName: "",
  // secretDescription: "I like runing and playing volleyball.",
};

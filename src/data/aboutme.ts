export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
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
  title: "Graduate CS student",
  institution: "Tsinghua University",
  // Note that links work in the description
  description:
    "I'm currently doing my master degree at <a href='https://www.tsinghua.edu.cn/en/'>Tsinghua University</a>, my research focus on Speech processing. Specifically working on Oromo speech recognition at  <a href='https://www.tsinghua.edu.cn/en/'>Center for Speech and Language Technologies (CSLT)</a> advised by <a href='https://scholar.google.com/citations?user=bzUAoWIAAAAJ&hl=en'> Prof Dong Wang </a> and <a href='https://scholar.google.com/citations?user=H3MX_8IAAAAJ&hl=en'> prof Thomas Fang Zheng </a>. My research interests include speech recognition, speech synthesis, and NLP.",
  email: "turiabu548@outlook.com",
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

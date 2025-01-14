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
  "I am a Master's student in Computer Science at <a href='https://www.tsinghua.edu.cn/en/'>Tsinghua University</a>, specializing in Speech Processing and Natural Language Processing. Currently, I am conducting research at the <a href='http://cslt.org'>Center for Speech and Language Technologies (CSLT)</a> under the supervision of <a href='https://scholar.google.com/citations?user=bzUAoWIAAAAJ&hl=en'>Prof. Dong Wang</a> and <a href='https://scholar.google.com/citations?user=H3MX_8IAAAAJ&hl=en'>Prof. Thomas Fang Zheng</a>. My research focuses on developing automatic speech recognition systems for the Oromo language, contributing to the advancement of low-resource language technologies. My research interests encompass automatic speech recognition, text-to-speech synthesis, and natural language processing.",

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

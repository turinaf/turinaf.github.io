export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  // {
  //   date: "December 2024",
  //   title: "Paper accepted at ICASSP 2025",
  //   description: "My work on Oromo speech recogniton accepted for ICASSP 2025.",
  //   link: "https://2025.ieeeicassp.org/",
  // }
];

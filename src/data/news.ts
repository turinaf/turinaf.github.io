export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "December 21, 2024",
    title: "🎉Paper accepted at ICASSP 2025 Conference",
    description: "Our research paper 'Sagalee: An Open Source Automatic Speech Recognition Dataset for Oromo Langauge' has been accepted for presentation at the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2025)", 
    link: "https://2025.ieeeicassp.org/",
  },
  {
    date: "June 25, 2023",
    title: "【毕业季】学校举行2023届优秀毕业生代表座谈会",
    description: "School held the 2023 Symposium of Outstanding Graduate Representatives", 
    link: "https://news.uestc.edu.cn/?n=UestcNews.Front.DocumentV2.ArticlePage&Id=89836",
  },
  {
    date: "December 6, 2022",
    title: "Three International Students Awarded the Title: 2022 Excellent International Students of UESTC",
    description: "Recipient of the 2022 Excellent International Students of UESTC award", 
    link: "https://news.uestc.edu.cn/?n=UestcNews.Front.DocumentV2.ArticlePage&Id=89836",
  }
];

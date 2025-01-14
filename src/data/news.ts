export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "December 2024",
    title: "🎉Paper accepted at ICASSP 2025 Conference",
    description: "Our research paper 'Sagalee: An Open Source Automatic Speech Recognition Dataset for Oromo Langauge' has been accepted for presentation at the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2025)", 
    link: "https://2025.ieeeicassp.org/",
  }
];

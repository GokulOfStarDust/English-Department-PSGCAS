import { register } from "swiper/element";

const eventData = {
  //array of upcoming event's objects
  upcomingEvents: [ 
    {
      id: "phoenix26",
      name: "Phoenix '26",
      time: "08:00 a.m Onwards",
      date: "20 February 2026",
      location: "GRD Auditorium, PSG College of Arts & Science",
      eventFor: "Others",
      imageUrl: "/phoenix'26-poster.webp",
      registerationFeeInfo: "₹200 (Individual Registration)",
      organizers: ["Dr. T.M. Nidhya Gowdhami", "Mr. T. Palanisamy", "Dakshmitha G (Chairperson) - 9942445559", "Venketrajah D (Chairperson) - 8825578611"]
    },
  ],

  pastEvents: [
    {
      id: "phoenix",
      name: "Phoenix '25",
      time: "09:00 a.m - 04:00 p.m",
      date: "24 February 2025",
      location: "E block & GRD Auditorium, PSG College of Arts & Science",
      eventFor: "Others",
      imageUrl: "/phoenix-poster.webp",
      registerationFeeInfo: "₹250 (Individual Registration)",
    },
    {
      id: "asYouLikeLit",
      name: "As You Like Lit",
      time: "09:00 a.m - 04:00 p.m",
      date: "23 January 2025",
      location: "E block & GRD Auditorium, PSG College of Arts & Science",
      eventFor: "PSG College of Arts & Science",
      imageUrl: "/asYouLikeLit-poster.webp",
      registerationFeeInfo: "Free registration (Individual Registration)",
    },
    {
      id: "aTaleOfThreeQuizzes",
      name: "A Tale of Three Quizzes",
      time: "09:00 a.m - 01:00 p.m",
      date: "6 JAN 2025 - 8 JAN 2025",
      location: "Vaigai Hall, Q-Block, PSG College of Arts & Science",
      cashPrizeInfo: "Cash prize pool of ₹8000",
      imageUrl: "/aTaleOfThreeQuizzes-poster.webp",
      registerationFeeInfo: "Check for each competition's registration fee",
    },
  ],
};

export default eventData;

import { register } from "swiper/element";

const eventData = {
  //array of upcoming event's objects
  upcomingEvents: [  ],

  pastEvents: [
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

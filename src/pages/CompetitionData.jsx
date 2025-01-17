import { desc, time } from "framer-motion/client";

const competitionData = {
  asYouLikeLit: [
    {
      id: "photo-ery",
      status: "open",
      name: "Photo-ery (photography)",
      description: "Capture the world through your lens and unveil the stories that lie beyond the surface. From fleeting moments to timeless perspectives, this photography competition celebrates the art of visual storytelling. Are you ready to frame the extraordinary in the ordinary?",
      imageUrl: "/photo-ery-poster.webp",
      imageCompactURL: "/photo-ery-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "09:00 a.m - 01:00 p.m",
      date: "23 January 2025",
      location: "PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Pay ₹30 and attend all the competitions)",
      guidelines: [
        "The photographs must be original and unedited.",
        "The theme will be announced on the spot.",
        "Participants must bring their own cameras or mobiles.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "Rules will be anounced soon.",
        ],
      },
    },

    {
      id: "picture-perfect-poem",
      status: "open",
      name: "Picture Perfect Poem (poetry)",
      description: "Where words meet imagery, and poetry paints vivid pictures in the mind. This competition celebrates the artistry of crafting verses that evoke emotion, inspire thought, and create timeless beauty. Can your pen capture the essence of a masterpiece?",
      imageUrl: "/picture-perfect-poem-poster.webp",
      imageCompactURL: "/picture-perfect-poem-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "09:00 a.m - 01:00 p.m",
      date: "23 January 2025",
      location: "PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Pay ₹30 and attend all the competitions)",
      guidelines: [
        "The theme will be announced on the spot.",
        "Participants must bring their own writing materials.",
        "OD will be provided for PSGCAS students.",
      ],      
      rules: {
        "General Rules": [
          "Rules will be anounced soon.",
        ],
      },
    },

    {
      id: "sirens-call",
      status: "open",
      name: "Siren's Call (shipwreck)",
      description: "Dive into the depths of maritime mysteries and unravel tales of legendary shipwrecks. This competition explores the allure of the ocean's secrets, blending history, mythology, and storytelling. Will you answer the call and navigate through these haunting waters?",
      imageUrl: "/sirens-call-poster.webp",
      imageCompactURL: "/sirens-call-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "09:00 a.m - 01:00 p.m",
      date: "23 January 2025",
      location: "PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Pay ₹30 and attend all the competitions)",
      guidelines: [
        "The theme will be announced on the spot.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "Rules will be anounced soon.",
        ],
      },
    },

    {
      id: "brushstroker-and-beyond",
      status: "open",
      name: "Brushstroker & Beyond (Object painting)",
      description: "Unleash your creativity on the canvas, where every stroke tells a story. This competition invites you to explore the beauty of object painting, transcending the ordinary to reveal the extraordinary. Can you transform the mundane into a masterpiece with just a brush and your imagination?",
      imageUrl: "/brushstroker-and-beyond-poster.webp",
      imageCompactURL: "/brushstroker-and-beyond-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "09:00 a.m - 01:00 p.m",
      date: "23 January 2025",
      location: "PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Pay ₹30 and attend all the competitions)",
      guidelines: [
        "The theme will be announced on the spot.",
        "Participants must bring their own painting materials.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "Rules will be anounced soon.",
        ],
      },
    },

    {
      id: "the-babel-bridge",
      status: "open",
      name: "The Babel Bridge (Translation)",
      description: "Cross the boundaries of language and culture to bridge the gap between worlds. This competition celebrates the art of translation, where words become a gateway to understanding and connection. Can you capture the essence of a story and bring it to life in a new language?",
      imageUrl: "/the-babel-bridge-poster.webp",
      imageCompactURL: "/the-babel-bridge-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "09:00 a.m - 01:00 p.m",
      date: "23 January 2025",
      location: "PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Pay ₹30 and attend all the competitions)",
      guidelines: [
        "The theme will be announced on the spot.",
        "Participants must bring their own painting materials.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "Rules will be anounced soon.",
        ],
      },
    },

    {
      id: "zap-to-fame",
      status: "open",
      name: "Zap to Fame (Adzap)",
      description: "Step into the spotlight and unleash your creativity in this high-energy adzap competition. From catchy jingles to quirky skits, this event challenges you to think on your feet and captivate the audience. Can you create an ad that zaps to fame?",
      imageUrl: "/zap-to-fame-poster.webp",
      imageCompactURL: "/zap-to-fame-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "09:00 a.m - 01:00 p.m",
      date: "23 January 2025",
      location: "PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Pay ₹30 and attend all the competitions)",
      guidelines: [
        "The theme will be announced on the spot.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "Rules will be anounced soon.",
        ],
      },
    },

    {
      id: "logic-labyrinth",
      status: "open",
      name: "Logic Labyrinth (Connection)",
      description: "Navigate through a maze of puzzles and challenges that test your wit and reasoning. Connect the dots and find your way through intricate problems. Can you solve the puzzle and emerge victorious?",
      imageUrl: "/logic-labyrinth-poster.webp",
      imageCompactURL: "/logic-labyrinth-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "09:00 a.m - 01:00 p.m",
      date: "23 January 2025",
      location: "PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Pay ₹30 and attend all the competitions)",
      guidelines: [
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "Rules will be anounced soon.",
        ],
      },
    },

    {
      id: "the-story-foundry",
      status: "open",
      name: "The Story Foundry (Plot making)",
      description: "Craft a tale that weaves together imagination, intrigue, and emotion. This competition challenges you to create a compelling plot that captivates the audience and leaves them wanting more. Can you forge a story that stands the test of time?",
      imageUrl: "/the-story-foundry-poster.webp",
      imageCompactURL: "/the-story-foundry-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "09:00 a.m - 01:00 p.m",
      date: "23 January 2025",
      location: "PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Pay ₹30 and attend all the competitions)",
      guidelines: [
        "The theme will be announced on the spot.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "Rules will be anounced soon.",
        ],
      },
    },
  ],

  aTaleOfThreeQuizzes: [
    {
      id: "literature-quiz",
      status: "closed",
      name: "Literature Quiz",
      description:
        "Embark on a journey through timeless tales, poetic verses, and iconic authors. From Shakespearean sonnets to modern masterpieces, this quiz celebrates the written word. Whether you're a bookworm, critic, or story lover, will you join the ranks of literary legends?",
      imageUrl: "/literature-quiz-poster.webp",
      imageCompactURL: "/literature-quiz-poster-compact.webp",
      eventFor: "PSG College of Arts & Science",
      time: "09:00 a.m - 01:00 p.m",
      date: "6 JAN 2025",
      location: "Vaigai Hall, Q-Block, PSG College of Arts & Science",
      quizMaster: "Vidhya Hanumanth K",
      RegisterationFee: 20,
      registerationFeeInfo : "per person (Individual Registration)",
      guidelines: [
        "Each team can have upto 2 members.",
        "Solo Participation is Allowed",
        "The event consists of two rounds.",
        "OD will be provided for PSGCAS students.",
        "Cash prize will be awarded at the end of each event.",
      ],
      rules: {
        "General Rules": [
          "The top 6 teams of the preliminary round will compete in the Stage Finals.",
          "The finals will have different rounds and rule will be explained on-spot.",
          "Usage of mobile phones is strictly not allowed.",
          "Questions will be based on literature.",
        ],
      },
    },

    {
      id: "pop-quiz",
      status: "closed",
      name: "Pop Quiz",
      description:
        "Lights, camera, action! Dive into Pop Quiz and test your knowledge of music hits, movie blockbusters, viral trends, and celebrity gossip. From chart-toppers to internet sensations, prove your pop-culture prowess and claim the spotlight. Ready to trend?",
      imageUrl: "/pop-quiz-poster.webp",
      imageCompactURL: "/pop-quiz-poster-compact.webp",
      eventFor: "PSG College of Arts & Science",
      time: "09:00 a.m - 01:00 p.m",
      date: "7 JAN 2025",
      location: "Vaigai Hall, Q-Block, PSG College of Arts & Science",
      quizMaster: "Manashika 🤝 Mithra",
      RegisterationFee: 20,
      registerationFeeInfo : "per person (Individual Registration)",
      guidelines: [
        "Each team can have upto 2 members.",
        "Solo Participation is Allowed",
        "The event consists of two rounds.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "The top 6 teams of the preliminary round will compete in the Stage Finals.",
          "The finals will have different rounds and rule will be explained on-spot.",
          "Usage of mobile phones is strictly not allowed.",
          "Questions will be based on entertainment.",
        ],
      },
    },

    {
      id: "general-quiz",
      status: "closed",
      name: "General Quiz",
      description:
        "Are you the jack of all trades or the master of some? General Quiz is here to put your wits to the ultimate test. From history to science, geography to current affairs, this quiz spans the breadth of human knowledge. Compete with the best minds, unravel intriguing facts, and prove your prowess. Who will rise as the trivia titan? Find out at General Quiz!",
      imageUrl: "/general-quiz-poster.webp",
      imageCompactURL: "/general-quiz-poster-compact.webp",
      eventFor: "All",
      time: "09:00 a.m - 01:00 p.m",
      date: "8 JAN 2025",
      location: "Vaigai Hall, Q-Block, PSG College of Arts & Science",
      quizMaster: "RK Rohit 🤝 JS Rohit",
      RegisterationFee: 30,
      registerationFeeInfo : "per person (Individual Registration)",
      guidelines: [
        "Each team can have upto 2 members.",
        "Solo Participation is Allowed",
        "The event consists of two rounds.",
        "Cross college registration is allowed.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "The top 6 teams of the preliminary round will compete in the Stage Finals.",
          "The finals will have different rounds and rule will be explained on-spot.",
          "Usage of mobile phones is strictly not allowed.",
          "Questions will be based on general knowledge.",
        ],
      },
    },
  ],
};

export default competitionData;

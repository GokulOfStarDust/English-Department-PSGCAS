import { desc, sub, time } from "framer-motion/client";

const competitionData = {

  phoenix26: [
  {
    id: "soliloquy",
    status: "open",
    name: "Echoes Unheard (Soliloquy)",
    subTheme: "Mythology",
    description:
      "Echoes Unheard is an individual soliloquy event that invites participants to step into the psyche of mythological characters and voice their inner thoughts, struggles, emotions, and conflicts. This event offers a powerful platform to explore mythology through personal expression, dramatic intensity, and emotional depth, allowing performers to bring legendary figures to life through spoken word.",
    imageUrl: "/phoenix26-soliloquy.webp",
    eventFor: "Others",
    time: "10:30 AM",
    date: "20 February 2026",
    location: "GRD Auditorium",
    guidelines: [
      
    ],
    rules: {
      "General Rules": [
        "Time limit: 3 Minutes.",
        "Theme: Mythology.",
        "Participation: Individual.",
        "Participants must deliver the soliloquy in English.",
        "Reading from scripts or mobile phones is not permitted.",
        "Costumes must be appropriate.",
        "Background display and music (to be brought on the day in MP3, MP4 format in USB).",
        "Participants may use minimal props if required."
      ]
    }
  },

  {
    id: "lit-parade",
    status: "open",
    name: "Masque of Myth (Lit Parade)",
    subTheme: "Mythology",
    description:
      "Masque of Myth is a visually engaging literary parade where participants embody mythological characters through costumes, expressions, and movement. Teams present a parade-style walk that highlights the essence, symbolism, and identity of their chosen characters. This event celebrates mythology through theatrical presentation, creativity, and character interpretation.",
    imageUrl: "/phoenix26-lit-parade.webp",
    eventFor: "Others",
    time: "11:00 AM",
    date: "20 February 2026",
    location: "GRD Auditorium",
    guidelines: [
      
    ],
    rules: {
      "General Rules": [
        "Time Limit: 2 Minutes.",
        "Theme: Mythology.",
        "Participation: 3 – 7 per team.",
        "Participants can represent mythological characters or creative adaptations of mythological characters, provided the core identity is retained.",
        "Teams will present a parade-style walk portraying their chosen character.",
        "Participants are encouraged to submit the following prior to the event:",
        "Name of the characters represented",
        "Audio and/or video clips (if required – for LED/background display)",
        "Teams can use props and costumes to enhance character representations.",
        "Participants must be prepared to answer questions related to the character(s) they portray.",
        "Costumes must be appropriate to the chosen theme."
      ]
    }
  },

  {
    id: "oracle-groove",
    status: "open",
    name: "The Oracle’s Groove (Group Dance)",
    subTheme: "Mythology",
    description:
      "The Oracle’s Groove is a high-energy group dance competition under Theatrics that transforms mythological stories into dynamic movement and rhythm. Teams bring legends to life through coordinated choreography, expressive formations, and thematic storytelling using dance styles ranging from Western to Contemporary.",
    imageUrl: "/phoenix26-group-dance.webp",
    eventFor: "Others",
    time: "11:45 AM",
    date: "20 February 2026",
    location: "GRD Auditorium",
    guidelines: [
     
    ],
    rules: {
      "General Rules": [
        "Time limit: 3 – 5 Minutes.",
        "Participation: 4 – 8 Members.",
        "Each group must bring their music track and/or background visuals in MP3 and MP4 format on USB.",
        "Western, Hip-Hop, Fusion and Contemporary dance styles are permitted.",
        "Inappropriate or offensive gestures and vulgarity in music and lyrics are strictly forbidden.",
        "Costumes must be appropriate and participants may use props if required.",
        "Hazardous materials like fire, sharp objects, flammable and liquids are strictly prohibited."
      ]
    }
  },

  {
    id: "echoes-of-time",
    status: "open",
    name: "Echoes of Time (Drama)",
    subTheme: "Mythology",
    description:
      "Echoes of Time is a stage drama event that challenges participants to dramatize mythological narratives and characters while preserving their original essence. Teams can creatively adapt existing stories or present original interpretations rooted in mythology, blending performance, dialogue, costumes, and music into a compelling theatrical experience.",
    imageUrl: "/phoenix26-drama.webp",
    eventFor: "Others",
    time: "11:45 AM",
    date: "20 February 2026",
    location: "GRD Auditorium",
    guidelines: [
     
    ],
    rules: {
      "General Rules": [
        "Time limit: 4 – 7 Minutes.",
        "Participation: 3 – 8 Members.",
         "Perform a short drama based on mythology/mythological characters.",
      "Adaptations of existing works are encouraged as well, however, originality of mythological features must be retained.",
      "Bring your own props, costumes, and background music (if needed, on a USB for submission in MP3 and MP4 format).",
      "Maintain modesty in appearance."
      ]
    }
  },

  {
    id: "ballads-of-songbirds",
    status: "open",
    name: "Ballads of the Songbirds (Solo Singing)",
    subTheme: "Mythology",
    description:
      "Ballads of the Songbirds is a solo singing competition where participants convey mythological themes and narratives through voice and music. This event focuses on lyrical clarity, emotional delivery, and thematic relevance, allowing singers to channel mythology into melodic expression.",
    imageUrl: "/phoenix26-solo-singing.webp",
    eventFor: "Others",
    time: "11:45 AM",
    date: "20 February 2026",
    location: "GRD Auditorium",
    guidelines: [
     
    ],
    rules: {
      "General Rules": [
        "Time limit: 3 Minutes.",
        "Participation: Individual.",
         "Songs should be performed only in English.",
      "Lyrics must be appropriate and non-offensive.",
      "Karaoke tracks without backing vocals may be used which must be brought in a USB in MP3 format.",
      "Musical instruments are not permitted."
      ]
    }
  },

  {
    id: "adaptunes",
    status: "open",
    name: "Terpsichore’s Trail (Adaptunes)",
    subTheme: "Mythology",
    description:
      "Terpsichore’s Trail is a dance adaptation challenge that tests creativity, synchronization, and adaptability. Participants must interpret music provided on stage, either individually or as a duo, creating fluid movements that reflect harmony, rhythm, and responsiveness.",
    imageUrl: "/phoenix26-adaptunes.webp",
    eventFor: "Others",
    time: "02:00 PM",
    date: "20 February 2026",
    location: "GRD Auditorium",
    guidelines: [
    
    ],
    rules: {
      "General Rules": [
        "Participation: Individual / Duo.",
        "Maximum two participants per college.",
          "Solo participants shall make use of the properties provided on stage by the event committee and dance adapting to the music.",
      "The duo participants should present a mirror dance in which one person should take up the lead to song and the other should follow and copy the same steps like a reflection in the mirror.",
      "Both of the dancers should maintain synchronization."
      ]
    }
  },

  {
    id: "treasure-hunt",
    status: "open",
    name: "Odyssey: The Chase (Treasure Hunt)",
    subTheme: "Mythology",
    description:
      "Odyssey: The Chase is a campus-wide treasure hunt inspired by epic mythological journeys. Teams navigate a series of clues that test logic, reasoning, teamwork, and mythological knowledge as they race to uncover the final destination.",
    imageUrl: "/phoenix26-treasure-hunt.webp",
    eventFor: "Others",
    time: "10:30 AM",
    date: "20 February 2026",
    location: "On Campus",
    guidelines: [
      
    ],
    rules: {
      "General Rules": [
        "Participation: Maximum 4 members.",
        "Participants shall find the placement to the next clue upon solving the previous one provided to them.",
      "All participants of team must be present while receiving consecutive clues.",
      "Teams must substantiate their reasoning towards solving the clue.",
      "Successive clues shall be provided on a first come first serve basis.",
      "Communication outside team members and/or with other teams is prohibited.",
      "Usage of Mobile Phones/Electronic/Smart/AI devices is prohibited."
      ]
    }
  },

  {
    id: "photography",
    status: "open",
    name: "Lit Frames (Photography)",
    subTheme: "Mythology",
    description:
      "Lit Frames is a photography competition that encourages participants to capture mythological symbolism and storytelling through visual frames. This event focuses on originality, composition, and thematic relevance without digital manipulation.",
    imageUrl: "/phoenix26-photography.webp",
    eventFor: "Others",
    time: "10:30 AM",
    date: "20 February 2026",
    location: "On Campus",
    guidelines: [
     
    ],
    rules: {
      "General Rules": [
        "Time limit: 30 – 45 Minutes.",
        "Participation: Duo Participation.",
         "No editings allowed.",
      "Photos need to be submitted in document format."
      ]
    }
  },

  {
    id: "quiz",
    status: "open",
    name: "Mythos Knockout (Quiz)",
    subTheme: "Greek, Roman, Norse, and Indian Mythology",
    description:
      "Mythos Knockout is a competitive quiz event that challenges teams on their knowledge of global mythologies. From ancient legends to iconic deities, this event rewards quick thinking, accuracy, and depth of understanding.",
    imageUrl: "/phoenix26-quiz.webp",
    eventFor: "Others",
    time: "10:30 AM",
    date: "20 February 2026",
    location: "E - 113",
    guidelines: [
      
    ],
    rules: {
      "General Rules": [
        "Participation: 3 members per team.",
        "Maximum 2 teams per college.",
        "Top 5 teams selected from prelims will succeed to finals."
      ]
    }
  },

  {
    id: "shipwreck",
    status: "open",
    name: "Wrath of Poseidon (Shipwreck)",
    subTheme: "Mythology",
    description:
      "Wrath of Poseidon is a role-play and persuasion game where participants portray mythological characters stranded after a shipwreck. Teams must convincingly argue their worth and survival through character-driven persuasion.",
    imageUrl: "/phoenix26-shipwreck.webp",
    eventFor: "Others",
    time: "10:30 AM",
    date: "20 February 2026",
    location: "E - 114",
    guidelines: [

    ],
    rules: {
      "General Rules": [
        "Time limit: 5 Minutes.",
        "Participation: Duo Participation.",
              "A Game of Role Play & Persuasion.",
      "You are a passenger stranded after a shipwreck. With limited lifeboats available, participants must convince the captain why they deserve to be saved by enacting their assigned character.",
      "3 Minutes will be provided for online research.",
      "One team member shall role-play the assigned character.",
      "The participant must persuade the captain within the given time."
      ]
    }
  },

  {
    id: "art",
    status: "open",
    name: "The Eternal Muse (Art Event)",
    subTheme: "Mythology",
    description:
      "The Eternal Muse is an individual art event that allows participants to express mythological themes through visual creativity. Any medium may be used to interpret the given theme, encouraging originality and artistic freedom.",
    imageUrl: "/phoenix26-art.webp",
    eventFor: "Others",
    time: "10:30 AM",
    date: "20 February 2026",
    location: "E - 316",
    guidelines: [
      
    ],
    rules: {
      "General Rules": [
        "Time limit: 1 Hour 30 Minutes.",
        "Participation: Individual.",
        "Theme will be provided on the spot.",
      "Any preferred art medium can be used.",
      "Charts will be provided.",
      "Participants must bring their own preferred art supplies.",
      "Use of phones for reference is not allowed."
      ]
    }
  },

  {
    id: "potpourri",
    status: "open",
    name: "Helio’s Gauntlet (Potpourri)",
    subTheme: "Mythology",
    description:
      "Helio’s Gauntlet is a fast-paced potpourri event combining logic, performance, and myth-inspired challenges. Teams compete across multiple rounds including connections, charades, and themed tasks to claim victory.",
    imageUrl: "/phoenix26-potpourri.webp",
    eventFor: "Others",
    time: "02:00 PM",
    date: "20 February 2026",
    location: "E - 113",
    guidelines: [
      
    ],
    rules: {
      "General Rules": [
        "Participation: Duo Participation.",
        "A mix of fun and mind games.",
      "Potpourri is a three round team event of Connections, Charades and Myth-Inspired tasks.",
      "No substitution of team members allowed.",
      "Answers once given cannot be changed.",
      "Any form of malpractice shall lead to disqualification.",
      "The team that completes all final tasks shall be crowned the winner."
      ]
    }
  },

  {
    id: "spell-bee",
    status: "open",
    name: "Mythic Spells (Spell Bee)",
    subTheme: "Greek, Norse, Roman, Egyptian, Indian Mythology",
    description:
      "Mythic Spells is a spell bee competition that tests participants on spelling mythological terms, names, and concepts across cultures. Precision, focus, and linguistic skill are key to advancing through multiple rounds.",
    imageUrl: "/phoenix26-spellbee.webp",
    eventFor: "Others",
    time: "02:00 PM",
    date: "20 February 2026",
    location: "E - 114",
    guidelines: [
      
    ],
    rules: {
      "General Rules": [
        "Participation: Duo Participation.",
        "Maximum of 2 teams per college.",
        "Rounds: Preliminary, Semi-finals, Finals.",
        "Top 5 teams selected from Semi-finals will succeed to Finals.",
        "No electronic devices, references or external assistance shall be used during the event.",
      "Clarification requests are allowed only before the timer starts.",
      "Any malpractice shall lead to disqualification."
      ]
    }
  },

  {
    id: "poetry",
    status: "open",
    name: "Mythokavya (Poetry Writing)",
    subTheme: "Mythology",
    description:
      "Mythokavya is a poetry writing competition that invites participants to explore mythology through verse. Poets express mythological narratives, emotions, and symbolism across two structured rounds.",
    imageUrl: "/phoenix26-poetry.webp",
    eventFor: "Others",
    time: "02:00 PM",
    date: "20 February 2026",
    location: "E - 316",
    guidelines: [
      
    ],
    rules: {
      "General Rules": [
        "Time limit: 45 – 60 Minutes.",
        "Participation: Individual.",
        "Theme: Mythology.",
        "There will be two rounds: Round I: Poem Writing, Round II: Poem Appreciation (Written).",
      "Participants selected from round I will move to the final round.",
      "Topic and paper will be given on spot.",
      "The poem should be within 24 lines, English language."
      ]
    }
  }
],

  phoenix: [
    {
      id: "quiz",
      status: "closed",
      name: "Witty by Nature (Quiz)",
      subTheme: "Nature narratives",
      description: "Test your knowledge and quick thinking in our exciting quiz competition. Whether you're a trivia buff or just love a good challenge, this event is perfect for you. Compete against others to see who can answer the most questions correctly and claim the title of quiz champion. Get ready for a fun and engaging experience that will put your brain to the test!",
      imageUrl: "/phoenix-quiz.webp",
      imageCompactURL: "/phoenix-quiz.webp",
      eventFor: "Others",
      time: "10:30 AM - 3:00 PM",
      date: "24 February 2025",
      location: "Prelims: E-113 (E block), Finals: GRD Auditorium",
      organizers:["Ms. Nidhya Gowdhami T M - +91 9789334645", "Geeth sree K - +91 6382126100"],
      guidelines: [
        "A team must consist of two participants.",
        "Any number of teams can participate from a college.",
        "Teams must adhere to the rules and guidelines set by the organizers.",
        "Any form of cheating or misconduct will result in disqualification.",
      ],
      rules: {
        "General Rules": [
          "Level 1 – Prelims (Written): Elimination round",
          "All teams will participate in a written quiz.",
          "The top 5 teams with the highest scores will be selected for Level 2.",
          "Further details about Level 2 and subsequent rounds will be shared on the spot."
        ],
      },
    },
    {
      id: "shipwreck",
      status: "closed",
      name: "Siren’s Call (Shipwreck)",
      subTheme: "Survive the Storm: A Battle of Wit and Persuasion",
      description: "Navigate the treacherous waters of our Shipwreck event, where wit and creativity are your lifeboats. Defend your chosen character from literary history and convince the judges why they deserve to be saved from the sinking ship. Will you sink or swim?",
      imageUrl: "/phoenix-shipwreck.webp",
      imageCompactURL: "/phoenix-shipwreck.webp",
      eventFor: "Others",
      time: "10:30 AM - 11:30 AM",
      date: "24 February 2025",
      location: "GRD Auditorium, PSG College of Arts & Science",
      organizers:["Mr. Palanisami T - +91 9789728775","Sunshiya Parveen M - +91 9944649968"],
      guidelines: [
        "There will be two rounds.",
      ],
      rules: {
        "General Rules": [
          "The first round will contain fun cartoon characters and public figures.",
          "The second round will have a literary figure, author or fictional personality.",
          "Characters will be chosen by drawing lots.",
          "Each round will have 10-15 minutes of preparation and the participants will be allowed to surf the internet.",
          "2-3 minutes will be given to enact."
        ],
      },
    },
    {
      id: "tableau",
      status: "closed",
      name: "Story Viz (Tableau)",
      subTheme: "Nature",
      description: "Join us for “Story Viz” a unique immersive literary experience that explores the art of capturing the essence of a single moment. Tableau is a theatrical technique in which actors freeze in poses that create a picture of one important moment in the play. Explore the power of words to pause time and transport us to another era, place, and emotion.  Expect a dynamic and engaging atmosphere that celebrates the power of literature. Don’t wait for the perfect moment, take the moment and make it perfect.",
      imageUrl: "/phoenix-tableau.webp",
      imageCompactURL: "/phoenix-tableau.webp",
      eventFor: "Others",
      time: "11:30 AM - 12:30 PM",
      date: "24 February 2025",
      location: "GRD Auditorium, PSG College of Arts & Science",
      organizers:["Ms. Kanimozhi K - +91 8870715517", "Shobikaa R - +91 8220016940"],
      guidelines: [
        "Participants: minimum 2 per team and maximum 7 per team",
      ],
      rules: {
        "General Rules": [
          "Tableau should be based on a scene from a literary work related to nature.",
          "Participants must bring their own props and costumes.",
          "Background music and soundtrack can be played.",
        ],

        "Time Limit (8 minutes)": [
          "Setting: 5 minutes",
          "Presentation: 2 minutes",
          "Narration: 1 minute"
        ]
      },
    },
    {
      id: "skit",
      status: "closed",
      name: "The Playhouse Arena (Skit)",
      subTheme: "Eco Resilience – A Sustainable Odyssey",
      description: "Step into the spotlight and showcase your acting skills in our Skit competition. Perform a short play based on a literary work or theme. Impress the audience and judges with your creativity, humor, and dramatic flair.",
      imageUrl: "/phoenix-skit.webp",
      imageCompactURL: "/phoenix-skit.webp",
      eventFor: "Others",
      time: " 03:00 PM - 04:00 PM",
      date: "24 February 2025",
      location: "GRD Auditorium, PSG College of Arts & Science",
      organizers:["Ms. Mahalakshmi D - +91 9965120637","Aayishaa H - +91 9629310259"],
      guidelines: [
        "One team per college, with a maximum of 7 participants.",
      ],
      rules: {
        "General Rules": [
          "Enact any English literary drama related to the given theme.",
          "Performance must be in English language only.",
          "Duration: 5 to 8 minutes.",
          "Participants must bring their own properties and costumes for the event.",
          "Background music (if necessary) should be brought on a USB drive and submitted at the registration desk.",
          "Maintain modesty in appearance.",
          "Any form of vulgarity will result in disqualification.",
        ],
      },
    },
    {
      id: "sonnet-writing",
      status: "closed",
      name: "Weaving Verse (Sonnet Writing)",
      subTheme: "Human- Nature Relationship",
      description: "Channel your inner Shakespeare and craft a beautiful sonnet in our Sonnet Writing competition. Use your poetic skills to create a 14-line masterpiece that captures the judges' hearts and minds.",
      imageUrl: "/phoenix-sonnet-writing.webp",
      imageCompactURL: "/phoenix-sonnet-writing.webp",
      eventFor: "Others",
      time: "11:30 AM - 12:30 PM",
      date: "24 February 2025",
      location: "E-114 (E block)",
      organizers:["Mrs. Yogeswari T - +91 9597593860", "Madumitha S - +91 8015697482"],
      guidelines: [
        "Individual participation.",
        "The first round tests fundamental sonnet-writing skills.",
        "The second round introduces a wildcard element, making it more challenging and exciting.",
      ],
      rules: {
        "Round 1 (Thematic Sonnet Writing) ": [
          "The sonnet must align with the given theme, which will be revealed at the start of the round.",
          "The sonnet must be written in English.",
          "The sonnet must follow a standard form (e.g., Shakespearean {ABAB CDCD EFEF GG}, Petrarchan {ABBAABBA CDCDCD}, or Spenserian {ABAB BCBC CDCD EE}) with 14 lines and a consistent rhyme scheme.",
          "Participants will have 60 minutes to compose their sonnet.",
          "The work must be original. Any form of plagiarism will lead to disqualification.",
          "No external references, books, or digital devices are allowed.",
          "Entries will be evaluated based on adherence to structure, creativity, thematic relevance, language, and overall impact.",
          "The top performers from Round 1 will qualify for Round 2. The number of qualifiers will be decided based on the total number of participants."
        ],

        "Round 2 (Wildcard Word Challenge) ": [
          "The theme from Round 1 remains the same, but each participant will receive a wildcard word that they must include in their new sonnet.",
          "Participants must write a new 14 line sonnet incorporating the assigned wildcard word creatively.",
          "Structure (Shakespearean, Petrarchan, or Spenserian) must be followed.",
          "The wildcard word must fit naturally within the poem while maintaining poetic quality.",
          "Time: 45 minutes to compose the sonnet.",
          "The poem must be newly written in this round without external help.",
          "The content must maintain literary decorum, avoiding inappropriate or offensive language.",
          "No external references, books, or digital devices are allowed.",
          "In addition to the previous round’s criteria, judges will also evaluate how effectively the wildcard word is incorporated into the sonnet.",
          "Based on scores from Round 2, the best entry will be declared the winner.",

        ]
      },
    },
    {
      id: "plot-making",
      status: "closed",
      name: "Talesmith (Plot Making)",
      subTheme: "Eco Fiction",
      description: "Join us for TALESMITH and unleash your Inner storyteller. Craft captivating Narratives inspired by the World around us. Bring images to life with words, weaving tales of Nature’s Wonders and our place within it. Join us for an event where Imagination meets the Environment.",
      imageUrl: "/phoenix-plot-making.webp",
      imageCompactURL: "/phoenix-plot-making.webp",
      eventFor: "Others",
      time: "11:30 AM - 12:30 PM",
      date: "24 February 2025",
      location: "E-113 (E block)",
      organizers:["Dr. A V Kreethika - +91 9698089771","Soundarya S - +91 9025955625"],
      guidelines: [
        "Solo Participation.",
      ],
      rules: {
        "General Rules": [
          "Participants must choose ONE Image among FOUR Images displayed on the screen.",
          "The plot must adhere to the theme and convey a moral message.",
          "Word limit: 2000 Words.",
          "Time Limit: 60 mins",
        ],
      },
    },
    {
      id: "book-cover-designing",
      status: "closed",
      name: "Greed Hounds Nature (Book Cover Designing)",
      subTheme:"Will be given on-spot",
      description: "Art has the power and inspiration to tell stories, evoke emotions and inspire action. Address the interconnected crises of nature through creative and innovative designing of a book cover. This event invites all the designers and illustrators to visually represent the urgent issues of ecology through impactful book cover designs",
      imageUrl: "/phoenix-book-cover-designing.webp",
      imageCompactURL: "/phoenix-book-cover-designing.webp",
      eventFor: "Others",
      time: "02:00 PM - 03:00 PM",
      date: "24 February 2025",
      location: "E-114 (E block)",
      organizers:["Mr. Jeyasheelan S - +91 9843309783","Ragul R - +91 9043640240"],
      guidelines: [
        "Individual participation.",
        "Charts or Drawing Sheets will be provided.",
        "The theme will be given on the spot.",
      ],
      rules: {
        "General Rules": [
          "Participants must bring the necessary materials.",
          "The design must align with the given theme provided.",
          "Work must be original, genuine and created solely for this event.",
          "Avoid using any offensive language, imagery and symbols.",
          "The time limit will be One Hour.",
        ],
      },
    },
    {
      id: "caption-writing",
      status: "closed",
      name: "Eco-Expression (Caption Writing)",
      subTheme: "Eco feminism",
      description: "A caption is a title or brief explanation accompanying an illustration, cartoon, or poster. Join us for Eco- Expressions, an event to bring out the caption writers in you. Entwine your imaginations with nature to produce catchy and thoughtful captions!",
      imageUrl: "/phoenix-caption-writing.webp",
      imageCompactURL: "/phoenix-caption-writing.webp",
      eventFor: "Others",
      time: "2:00 PM - 3:00 PM",
      date: "24 February 2025",
      location: "E-113 (E block)",
      organizers:["Mr. Muguntharajan N S - +91 9789642676","Rathika G - +91 9400419661"],
      guidelines: [
        "Solo or Dual Participation.",
        "There will be three rounds."
      ],
      rules: {
        "General Rules": [
          "Participants must view the visual shown on the screen and write a caption based on the same.",
          "Word limit: 10-20 words",
          "Profane or offensive words must not be used.",
          "Total time- 1 hour.",
        ],
      },
    },
    {
      id: "photography",
      status: "closed",
      name: "Ecolens (Photography)",
      subTheme: "Eco-Reckoning - A Photographic Symphony of Change",
      description: "n the core of nature’s cadence, we gather with a lens in hand, prepared to seize the subtle murmurs of the earth in a fleeting moment. EcoReckoning invites you to narrate the tale of our existence—how it transforms, how it persists, and how it urges us to perceive the reality through the lens of the natural world.Are you ready to answer the call of EcoReckoning?",
      imageUrl: "/phoenix-photography.webp",
      imageCompactURL: "/phoenix-photography.webp",
      eventFor: "Others",
      time: "10:30 AM - 11:30 AM",
      date: "24 February 2025",
      location: "E-316 (E block)",
      organizers:["Dr. M. Nagappan - +91 9894896985","Kavi Sri S - +91 8870061195"],
      guidelines: [
        "Open to all students of the college",
        "Theme will be given on Spot.",
      ],
      rules: {
        "General Rules": [
          "Photos must be original and clicked by the participant; plagiarism will lead to disqualification.",
          "Basic enhancements (brightness, contrast, cropping) are allowed, but excessive manipulation is not permitted.",
          "Images must be submitted in JPEG/PNG format (30 MB).",
          "Each submission must include a brief caption (max 30 words) explaining the photo.",
          "All entries must be submitted before the specified deadline of One Hour.",
        ],
      },
    },
    {
      id: "lingua-bridge",
      status: "closed",
      name: "Lingua Bridge (Translation)",
      subTheme: "Eco consciousness",
      description: "Bridge the gap between languages and cultures in our Translation competition. Translate a given text into another language while preserving its meaning, tone, and style. Show off your linguistic skills and cultural understanding.",
      imageUrl: "/phoenix-translation.webp",
      imageCompactURL: "/phoenix-translation.webp",
      eventFor: "Others",
      time: "10:30 AM - 11:30 AM",
      date: "24 February 2025",
      location: "E-114 (E block)",
      organizers:["Dr. Mohana Priya - +91 9486738407","Keerthana P - +91 9003990455"],
      guidelines: [
        "2 participants per team.",
        "Solo participation is also allowed.",
        "The duration of the event is 60 minutes.",
      ],
      rules: {
        "General Rules": [
          "The participants should translate the given English and Tamil text into Tamil and English respectively.",
          "Evaluation will be based on the close relevance to the source language text.",
          "Offensive language should be strictly avoided.",
        ],
      },
    },
  ],

  asYouLikeLit: [
    {
      id: "photo-ery",
      status: "closed",
      name: "Photo-ery (photography)",
      description:
        "Capture the world through your lens and unveil the stories that lie beyond the surface. From fleeting moments to timeless perspectives, this photography competition celebrates the art of visual storytelling. Are you ready to frame the extraordinary in the ordinary?",
      imageUrl: "/photo-ery-poster.webp",
      imageCompactURL: "/photo-ery-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "10:30 a.m - 11:45 a.m",
      date: "23 January 2025",
      location: "E block quadrant, PSG College of Arts & Science",
      organizers: ["Venmani - 9788853678","Mohammad Emthiyas - 6380563534"],
      RegisterationFee: 0,
      registerationFeeInfo: "(Free registeration)",
      guidelines: [
        "Participants must capture two photos that will be creatively merged into one cohesive visual.",
        "The theme will guide the concept for the shots.",
        "Task: Blend both photos together, either through combining the entire image or through parts, to tell a story or convey a meaningful concept. The combination of images should spark connection, contrast, or relevance to the theme. Include a caption to enhance the narrative.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "The photographs must be taken only using mobile phone. Photographs in both landscape and portrait mode will be accepted.",
          "⁠The themes will be given on the spot. Relevant captions must be given.",
          "Photographs must be submitted within the time limit of 45 minutes.",
          "Collaging of photographs is allowed but the image itself must not be edited or photoshopped.",
          "⁠The Judges decision will be final.",
        ],
      },
    },

    {
      id: "picture-perfect-poem",
      status: "closed",
      name: "Picture Perfect Poem (poetry)",
      description:
        "Where words meet imagery, and poetry paints vivid pictures in the mind. This competition celebrates the artistry of crafting verses that evoke emotion, inspire thought, and create timeless beauty. Can your pen capture the essence of a masterpiece?",
      imageUrl: "/picture-perfect-poem-poster.webp",
      imageCompactURL: "/picture-perfect-poem-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "11:15 a.m - 12:15 p.m",
      date: "23 January 2025",
      location: "E-113 (E block), PSG College of Arts & Science",
      organizers: ["Aayishaa - 9629310259", "Vandana - 6383291563"],
      RegisterationFee: 0,
      registerationFeeInfo: "(Free registeration)",
      guidelines: [
        "Objective: A captivating image will serve as inspiration.",
        "Task: Participants must craft an original poem that connects elements from the image. Let your imagination flow and transform the visual into a metaphorical masterpiece, exploring the depth and beauty of the picture through poetry.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "The participants will be given a picture as the theme.",
          "The participants can write and present any original piece of their poetry in English related to the given picture.",
          "Participants are required to write their poems within 1 hour.",
          "A4 sheets will be provided. The other stationary must be brought by the participants.",
          "The participants must submit their hard copy of their poems for valuation.",
          "Poem should be original.",
          "The participants will be immediately disqualified in case of coping from other content or materials.",
          "Poems will be judged based on Originality, Creativity, Fluency and Expressions.",
          "The decision of the Judges and the discretion of the organizers will be final."
        ],
      },
    },

    {
      id: "sirens-call",
      status: "closed",
      name: "Siren's Call (shipwreck)",
      description:
        "Dive into the depths of maritime mysteries and unravel tales of legendary shipwrecks. This competition explores the allure of the ocean's secrets, blending history, mythology, and storytelling. Will you answer the call and navigate through these haunting waters?",
      imageUrl: "/sirens-call-poster.webp",
      imageCompactURL: "/sirens-call-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "01:00 p.m - 02:15 p.m",
      date: "23 January 2025",
      location: "GRD Auditorium, PSG College of Arts & Science",
      RegisterationFee: 0,
      organizers: ["Datherine - 8940729719" , "Iniya Meenakshi - 8489478876"],
      registerationFeeInfo: "(Free registeration)",
      guidelines: [
        "Objective: Each participant receives a Character – a literary figure, author, or fictional personality.",
        "Task: You must defend your character’s worth to the mystical island spirits by highlighting their good deeds, achievements, and unique traits in a short, creative speech. Stay true to the character and convince the spirits to grant you survival.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "Speak and act as your chosen literary figure throughout the task.",
          "Characters will be chosen randomly by drawing lots. No changes are allowed.",
          "You will get time to prepare (10-15 minutes) before presenting your arguments.",
          "Each participant gets 2-3 minutes to present their case.",
          "Talk about your character’s good deeds and achievements. Be creative and convincing while staying true to your character.",
          "The judges’ decision will be final."
        ],
      },
    },

    {
      id: "the-charcoal-chronicles",
      status: "closed",
      name: "The Charcoal Chronicles (Object painting)",
      description:
        "Unleash your creativity on the canvas, where every stroke tells a story. This competition invites you to explore the beauty of object painting, transcending the ordinary to reveal the extraordinary. Can you transform the mundane into a masterpiece with just a brush and your imagination?",
      imageUrl: "/the-charcoal-chronicles-poster.webp",
      imageCompactURL: "/the-charcoal-chronicles-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "11:30 a.m - 12:30 p.m",
      date: "23 January 2025",
      location: "E-114 (E block), PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Free registeration)",
      organizers:["Viveka - 93458 74380", "Raghul - 9043640240"],
      guidelines: [
        "The theme will be announced on the spot.",
        "Participants must bring their own painting materials.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "Individual Participation",
          "Participants must bring the necessary materials",
          "A4 paper will be provided",
          "The theme will be given on the spot.",
          "The drawing must align with the given theme provided.",
          "Time limit: 1 hr",
          "Work must be original and created solely for this contest.",
          "Plagiarized or prepublished work will result in disqualification.",
          "Avoid using any offensive language, imagery, and symbols."
        ],
      },
    },

    {
      id: "the-babel-tower",
      status: "closed",
      name: "The Babel Tower (Translation)",
      description:
        "Cross the boundaries of language and culture to bridge the gap between worlds. This competition celebrates the art of translation, where words become a gateway to understanding and connection. Can you capture the essence of a story and bring it to life in a new language?",
      imageUrl: "/the-babel-tower-poster.webp",
      imageCompactURL: "/the-babel-tower-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "01:00 p.m - 02:15 p.m",
      date: "23 January 2025",
      location: "E-113 (E block), PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Free registeration)",
      organizers:["Keerthana - 9003990455" ,"Nithya Sri - 9790220371"],
      guidelines: [
        "Objective: Language barriers are like walls, but Translation is the bridge to cross them.",
        "Travellers face challenges as they enter the New World.",
        "Task: The challenge is to translate quotes, song lyrics, or movie dialogues into any language of your choice. Unleash your inner translator to overcome challenges and navigate the language barriers, unlocking the world of communication with your translations.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "Participants can participate 'Uno' or in a team of 'Dos'.",
          "There will be 'Dío' (2) rounds.",
          "Participants would receive a quote, a paragraph, a song lyric, or a movie dialogue in a language which should be translated into any language of their choice.",
          "Participants have complete liberty to showcase their unique and creative translations.",
          "The duration of the event would be 'Soixante' (60) minutes.",
          "Evaluation will be based on the close relevance to the source language text.",
          "OFFENSIVE and UNPARLIAMENTARY words are expected to be avoided."
        ],
      },
    },

    {
      id: "lit-ad-genius",
      status: "closed",
      name: "Lit Ad Genius (Adzap)",
      description:
        "Step into the spotlight and unleash your creativity in this high-energy adzap competition. From catchy jingles to quirky skits, this event challenges you to think on your feet and captivate the audience. Can you create an ad that zaps to fame?",
      imageUrl: "/lit-ad-genius-poster.webp",
      imageCompactURL: "/lit-ad-genius-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "02:30 a.m - 03:30 p.m",
      date: "23 January 2025",
      location: "GRD Auditorium, PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Free registeration)",
      organizers:["Renuka - 90423 20240", "Sam Santo - 9345605708"],
      guidelines: [
        "Objective: Each team selects a slot containing:",
        "A Literary Excerpt – A passage or line from a classic or modern literary work.",
        "A Theme or Product – A concept, product, or service to promote.",
        "Task: Teams must create an engaging and original advertisement that creatively incorporates the literary excerpt while effectively promoting the given theme or product. The ad should reflect the spirit of the literary work.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [

          "Each ad must not exceed 2 minutes.",
          "Must be inspired by a literary work (novel, poem, play, etc.).",
          "Include the title or concept clearly in the ad.",
          "Maintain originality and avoid plagiarism.",
          "Any language is permitted but subtitles in English are required for non-English content.",
          "Pre-recorded videos or live performances are allowed.",
          "Minimal props allowed, participants must manage their own materials.",
          "Pre-recorded ads must be submitted 24 hours before the event, or participants performing live must confirm 2 hours before.",
          "No offensive language, discriminatory messages, or explicit content.",
          "The judges' decision will be final and binding.",
         ],

         "Judging criteria" :[
            "Creativity and originality (30%)",
            "Relevance to the theme (25%)",
            "Presentation and clarity (25%)",
            "Engagement and impact (20%)"
         ]
      },
    },

    {
      id: "logic-labyrinth",
      status: "closed",
      name: "Logic Labyrinth (Connections)",
      description:
        "Embark on a journey through the maze of connections, where every link leads to a new discovery. This competition challenges you to unravel the threads that bind ideas, concepts, and knowledge. Can you navigate the labyrinth of logic and emerge victorious?",
      imageUrl: "/logic-labyrinth-poster.webp",
      imageCompactURL: "/logic-labyrinth-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "09:00 p.m - 12:30 a.m",
      date: "23 January 2025",
      location: "GRD Auditorium, PSG College of Arts & Science",
      organizers:["Mithra - 9344271026"],
      RegisterationFee: 0,
      registerationFeeInfo: "(Free registeration)",
      guidelines: [
        "Each team can have upto 2 members.",
        "Solo Participation is Allowed",
        "OD will be provided for PSGCAS students."
      ],
      rules: {
        "General Rules": [
          "The event consists of two rounds.",
          "Round 1: A total of 20 questions will be asked, Each correct answer earns 1 mark.",
          "Round 2: A total of 10 questions will be asked, Each correct answer earns 5 marks",
          "The top 6 teams/participants with the highest scores from Round 1 will advance to Round 2.",
          "The use of mobile phones, smartwatches, or anyother electronic devices is strictly prohibited during the game.",
        ],
      },
    },

    {
      id: "the-story-foundry",
      status: "closed",
      name: "The Story Foundry (Plot making)",
      description:
        "Craft a tale that weaves together imagination, intrigue, and emotion. This competition challenges you to create a compelling plot that captivates the audience and leaves them wanting more. Can you forge a story that stands the test of time?",
      imageUrl: "/the-story-foundry-poster.webp",
      imageCompactURL: "/the-story-foundry-poster.webp",
      eventFor: "PSG College of Arts & Science",
      time: "10:00 a.m - 11:00 a.m",
      date: "23 January 2025",
      location: "E-113 (E block), PSG College of Arts & Science",
      RegisterationFee: 0,
      registerationFeeInfo: "(Free registeration)",
      organizers:["Rohita - 7094279980", "Soundarya - 9025955625"],
      guidelines: [
        "Objective: Each team must select a slot containing:",
        "A Picture – A visual element to spark creativity.",
        "A Quote – A line of wisdom, intrigue, or emotion to inspire your narrative.",
        "Task: Teams will craft an original story that incorporates both the image and the quote, creating a cohesive narrative. The story should creatively blend both elements to deliver a unique and engaging tale.",
        "OD will be provided for PSGCAS students.",
      ],
      rules: {
        "General Rules": [
          "Participants can participate solo or in a team of two.",
          "Each participant or team will be assigned a photo and a related quote based on their selected slot.",
          "Participants/teams will have 60 minutes to complete their writing after receiving their prompt.",
          "A4 sheets will be provided by the organizers.",
          "The use of mobile phones, laptops, or any electronic devices is strictly prohibited.",
          "The decision of the judges is final."
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
      registerationFeeInfo: "per person (Individual Registration)",
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
      registerationFeeInfo: "per person (Individual Registration)",
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
      registerationFeeInfo: "per person (Individual Registration)",
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

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "/src/index.css";
import "./CompetitionData";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CouncilBearersCarousel from "./CouncilBearersCarousel";

import SwiperElement from "./CouncilBearersCarousel";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Homepage() {
  const [loadingState, setLoadingState] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(0);

  useEffect(() => {
    if (imageLoaded === 2) {
      setTimeout(() => {
        setLoadingState(false);
      }, 1500);
    }
  }, [imageLoaded]);

  const imageLoadHandle = () => {
    setImageLoaded((prev) => prev + 1);
  };

  const handleImageError = (e) => {
    console.error("Image failed to load:", e.target.src);
    setImageLoaded((prev) => prev + 1);
  };

  return (
    <main>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`${loadingState ? "" : "hidden"} fixed flex justify-center items-center w-full h-lvh z-[100] inset-0 bg-event-card-black`}
        role="progressbar"
        aria-label="Loading content"
        aria-valuenow={imageLoaded}
        aria-valuemin={0}
        aria-valuemax={2}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${loadingState ? "loader" : "hidden"} w-full`}
        ></motion.div>
      </motion.div>

      <section aria-label="Department of English Aided Introduction">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="relative flex justify-center items-center w-full h-full mt-3"
        >
          <img
            src="/intro-img.webp"
            alt="English Department building and campus view"
            onLoad={imageLoadHandle}
            onError={handleImageError}
            className="w-[97vw] h-[90svh] max-w-full max-h-full object-cover rounded-2xl blur-[0.2px] relative"
          />

          <h1
            className="absolute top-[15%] w-[88vw] max-w-full drop-shadow-md mx-auto flex flex-col
                animate-fadeIn 
                font-bebas  text-[#242424] font-extrabold text-center tracking-[0.12em] leading-[1.15] lg:leading-none mr-3
                text-[14vw]
                divide-breakpoint:text-[12vw] z-10"
          >
            DEPARTMENT&nbsp;OF <br /> ENGLISH <br />{" "}
            <span className="font-extrabold text-center leading-tight lg:leading-none text-[6vw] divide-breakpoint:text-[5vw]">
              (AIDED)
            </span>
          </h1>
        </motion.div>
      </section>

      <section aria-label="About the Department">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="bg-[url('/deptAbout.jpg')] bg-cover bg-center flex flex-col justify-around items-center w-[97svw] min-h-[644px] lg:h-[90svh] rounded-2xl mt-4 pb-4 mb-9 mx-auto"
        >
          <div className="w-[95vw] h-[9svh] min-h-[64px] mt-3 flex flex-row justify-center items-center border border-black outline-1 outline-gray-900 backdrop-blur-lg rounded-[45px]">
            <h2
              className="text-text-black-black text-center font-josefin rounded-[45px]
                    text-4xl md:text-5xl"
            >
              About
            </h2>
          </div>

          <div className="overflow-hidden w-[95vw] min-h-[447px] lg:h-[80%] between-lg-xl:h-[70%] flex flex-row flex-wrap-reverse justify-around items-center bg-[#F6F2E4] bg-opacity-50 rounded-3xl mx-auto mt-5 gap-x-6">
            <motion.p
              initial={{ x: -150 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="w-full md:min-w-[450px] lg:w-2/4 text-justify text-sm md:text-base lg:text-base xl:text-lg xxl:text-xl tracking-tighter lg:tracking-wide p-8 lg:pl-14 text-text-black font-plex font-normal"
            >
              The English Department at PSG College of Arts & Science is
              dedicated to fostering a love for literature and advancing
              language skills that are essential in today's global landscape.
              With a comprehensive curriculum that spans classical and
              contemporary literature, language studies, and communication, the
              department empowers students to explore diverse perspectives and
              enhances critical thinking. Through engaging courses, workshops,
              and literary events, students are encouraged to develop
              creativity, analytical skills, and effective communication,
              preparing them for successful careers in academia, media, and
              other fields.
            </motion.p>
            <img
              loading="lazy"
              src="/dept-logo.webp"
              alt="Department of English logo"
              onLoad={imageLoadHandle}
              onError={handleImageError}
              className="w-[70%] sm:w-[60%] md:w-[40%] md:min-w-[319px] lg:w-[40%] h-[70%] lg:h-[80%] mt-10 -mb-5 lg:!mb-10 object-contain mx-auto"
            />
          </div>
        </motion.div>
      </section>

      <section aria-label="Council Bearer">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }} 
          className="bg-[url('/office-bearers-bg.webp')] bg-cover bg-center flex flex-col items-center w-[97svw] min-h-[644px]  rounded-2xl mt-2 pb-4 mb-9 mx-auto gap-y-16">
            
            <div className="w-[94vw] h-[9svh] min-h-[64px] mt-3 flex flex-row justify-center items-center border border-white outline-1 outline-slate-200 backdrop-blur-lg rounded-[45px]">
            <h2
              className="text-white text-center font-josefin rounded-[45px]
                    text-4xl md:text-5xl"
            >
              Office Bearers
            </h2>
          </div>
          {/* bg-[#F6F2E4] */}

          <CouncilBearersCarousel />

        </motion.div>
      </section>
    </main>
  );
}

{
  /* <p className="absolute top-1/4 w-[88vw] rounded-3xl max-w-full
                animate-fadeIn
                font-holtwood text-stroke text-transparent text-center tracking-wide  leading-normal text-shadow-title
                text-4xl sm:text-5xl sm:leading-tight md:text-7xl lg:text-8xl xl:text-9xl z-20 ">
                DEPARTMENT OF <br/> ENGLISH
                </p> */
}

{
  /* <img
          src="/deptEngHeroText.png"
          alt="deptEngHeroText"
          className="absolute animate-fadeIn top-28 p-3 "
        /> */
}

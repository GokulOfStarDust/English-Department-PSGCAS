import { motion} from "motion/react";
import competitionData from "./CompetitionData";
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

export default function CompetitionList({ eventId }) {
  const navigate = useNavigate();
  const [loadingState, setLoadingState] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(0);
  const competitions = competitionData[eventId];

  useEffect(() => {
    if (imageLoaded === competitions.length) {
      setTimeout(() => {
        setLoadingState(false);
      }, 1500);
    }
  }, [imageLoaded]);

  const imageLoadHandle = () => {
    setImageLoaded((prev) => prev + 1);
  };

  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`${loadingState ? "" : "hidden"} fixed flex justify-center items-center w-full h-lvh z-[100] inset-0 bg-event-card-black`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${loadingState ? "loader" : "hidden"} w-full`}
        ></motion.div>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="flex flex-row flex-wrap items-center justify-center bg-[url('/bg.png')] bg-cover bg-center bg-fixed space-y-10 pb-32 scroll-smooth"
      >
        <div
          className="flex items-center justify-center bg-[url('/eventTitleBg.png')] bg-no-repeat bg-cover bg-center w-[90svw] min-h-[60px] md:min-h-[80px] my-16 mb-[19svh]
                            font-josefin text-event-card-black font-bold text-[1.7rem] md:text-4xl tracking-[3.8px]
                            rounded-3xl outline outline-1 outline-black"
        >
          COMPETITIONS
        </div>
        {/* lg:h-[90svh] */}
        {competitions.map((competition, index) => {
          return (
            <li key={index} className="list-none">
              <div>
                <motion.div
                  className="flex flex-col bg-event-card-black w-[88svw] md:w-[75svw] p-7 pt-3 space-y-5 rounded-3xl "
                  layoutId={`card-container-${competition.id}`}
                >
                  <motion.div
                    className="flex flex-row justify-center"
                    layoutId={`card-image-container-${competition.id}`}
                  >
                    <img
                      className={`w-[90svw] h-[45svh] md:h-[55svh] object-cover mt-3  bg-top rounded-xl`}
                      src={competition.imageCompactURL}
                      alt="Lazy to specify one"
                      onLoad={imageLoadHandle}
                    />
                  </motion.div>
                  <motion.div
                    className="font-josefin text-white font-bold italic text-3xl xl:text-4xl"
                    layoutId={`card-title-container-${competition.id}`}
                  >
                    {competition.name}
                  </motion.div>
                  {("quizMaster" in competition) && <motion.div
                    className="font-plex font-light text-white text-sm md:text-base xxl:text-lg !mt-1 !mb-4
                    "
                    layoutId={`card-title-container-${competition.id}`}
                  >
                    Quiz Master: {competition.quizMaster}
                  </motion.div>}
                  <motion.div
                    className="font-plex font-light text-white text-sm md:text-base xxl:text-lg"
                    layoutId={`card-desc-container-${competition.id}`}
                  >
                    {competition.description}
                  </motion.div>
                  <motion.div
                    className="font-plex font-light text-white text-sm md:text-md lg:text-lg -mt-6"
                  >
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row flex-wrap w-full items-center">
                            <div className="flex flex-row items-center p-4 pl-0 space-x-2 mr-9 divide-breakpoint:mr-0">
                                <img src="/calendar-event-icon.png" alt="Calendar Icon to represent event date" className="object-contain size-5" />
                                <p>{competition.date}</p>
                            </div>
                            <img src="/separatorLine.png" alt="line" className="hidden divide-breakpoint:block object-contain size-7 md-4 mr-3 " />
                            <div className="flex flex-row items-center p-4 pl-0 pt-0 divide-breakpoint:pt-4  space-x-2">
                                <img src="/time-event-icon.png" alt="Clock icon to represent event time" className="object-contain size-5 " />
                                <p>{competition.time}</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center p-4 pl-0 pt-0 space-x-2">
                            <img src="/locationPin-event-icon.png" alt="location pin icon to represent event location" className="object-contain size-5"/>
                            <p>{competition.location}</p>
                        </div>
                        <div className="flex flex-row items-center p-4 pl-0 pt-0 space-x-2">
                            <img src="/cash-pool-logo.png" alt="cash pool icon to represent event cash prize" className="object-contain size-5"/>
                            <p>Registeration Fee: {competition.RegisterationFee}</p>
                        </div>
                    </div>
                  </motion.div>
                  <div className="flex flex-row flex-wrap justify-center items-center">
                    <div
                      className="flex flex-row justify-center bg-[url('/eventSubmitBg.png')] bg-cover w-[20%] min-w-[250px]  mx-4 mt-3 xxl:mt-[2.3%] text-md md:text-xl font-plex font-bold tracking-widest rounded-full p-4 cursor-pointer"
                      onClick={() => {
                        navigate(`/events/${eventId}/${competition.id}`);
                      }}
                    >
                      Click For Rules
                    </div>
                    <div
                      className="flex flex-row justify-center mx-4 bg-[url('/eventSubmitBg.png')] bg-cover w-[25%] min-w-[250px] mt-3 xxl:mt-[2.3%] bottom-2 text-base md:text-lg xxl:text-xl font-plex font-bold tracking-widest rounded-full p-4 cursor-pointer"
                      onClick={() => {
                        navigate(`/register`);
                      }}
                    >
                      Click to Register
                    </div>
                  </div>
                </motion.div>
              </div>
            </li>
          );
        })}
      </motion.ul>
    </>
  );
}

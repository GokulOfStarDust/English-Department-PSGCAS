import { motion, useScroll } from "motion/react";
import competitionData from "./CompetitionData";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CompetitionList({eventId}) {
  const navigate = useNavigate();
  const [loadingState, setLoadingState] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(0);
  const competitions = competitionData[eventId]

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

        {competitions.map((competition, index) => {
          return (
            <li key={index} className="list-none">
              <div>
                <motion.div
                  className="flex flex-col bg-event-card-black w-[88svw] lg:h-[90svh] p-7 pt-7 space-y-5 rounded-3xl "
                  layoutId={`card-container-${competition.id}`}
                >
                  <motion.div
                    className="flex flex-row justify-center"
                    layoutId={`card-image-container-${competition.id}`}
                  >
                    <img
                      className={`w-[85svw] h-[45svh] md:h-[55svh] object-cover  bg-top rounded-xl`}
                      src={competition.imageUrl}
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
                  <motion.div
                    className="font-plex font-light text-white text-sm md:text-md lg:text-lg"
                    layoutId={`card-desc-container-${competition.id}`}
                  >
                    {competition.description}
                  </motion.div>
                  <div className="flex flex-row flex-wrap justify-center items-center">
                    <div
                      className="flex flex-row justify-center bg-[url('/eventSubmitBg.png')] bg-cover w-[20%] min-w-[250px]  mx-4 !mt-9 md:!mt-[1%] text-md md:text-xl font-plex font-bold tracking-widest rounded-full p-4 cursor-pointer"
                      onClick={() => {
                        navigate(`/events/${eventId}/${competition.id}`);
                      }}
                    >
                      Click For Rules
                    </div>
                    <div
                      className="flex flex-row justify-center mx-4 bg-[url('/eventSubmitBg.png')] bg-cover w-[20%] min-w-[250px] !mt-9 md:!mt-[1%] text-md md:text-xl font-plex font-bold tracking-widest rounded-full p-4 cursor-pointer"
                      onClick={() => {
                        navigate(`/register`);
                      }}
                    >
                      Click to Regsiter
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

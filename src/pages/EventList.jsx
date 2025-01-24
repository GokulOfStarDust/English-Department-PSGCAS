import { motion } from "motion/react";
import eventData from "./EventData.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EventList() {
  const navigate = useNavigate();
  const [loadingState, setLoadingState] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(0);

  useEffect(() => {
    if (imageLoaded === eventData.upcomingEvents.length) {
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
        role="progressbar"
        aria-live="assertive"
        aria-label={loadingState ? "Loading events, please wait." : "Events loaded."}
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
        className="flex flex-row flex-wrap items-center justify-center  bg-cover bg-center bg-fixed space-y-2 pb-32 scroll-smooth"
        style={{ backgroundImage: `url('/bg.webp')` }}
        role="list"
      >
        <div
          className="flex items-center justify-center bg-[url('/eventsTitleBg.png')] bg-no-repeat bg-cover bg-center w-[90svw] min-h-[60px] md:min-h-[80px] my-16 !mb-[15svh]
                            font-josefin text-event-card-black font-bold text-[1.7rem] md:text-4xl tracking-[3.8px]
                            rounded-3xl outline outline-1 outline-black"
          role="banner"
        >
          UPCOMING EVENTS
        </div>
        {eventData.upcomingEvents.length == 0 ? (
          <li className="font-bebas text-4xl md:text-5xl text-[#232323] font-medium text-center p-6" role="listitem">
            ALL THE WORLD'S A STAGE, BUT NO EVENTS ARE PLAYING RIGHT NOW—
            <br />
            STAY TUNED FOR THE NEXT ACT!
          </li>
        ) : (
          eventData.upcomingEvents.map((event) => {
            return (
              <li key={event.id} className="list-none" role="listitem">
                <div
                  onClick={() => {
                    navigate(`/events/${event.id}`);
                  }}
                >
                  <motion.div className="flex flex-col bg-event-card-black w-[88svw] md:w-[65svw] p-7 pt-7 space-y-5 rounded-3xl ">
                    <motion.div className="flex flex-row justify-center">
                      <img
                        className={`w-[85svw] md:w-[75svw] h-[45svh] md:h-[45svh] object-cover object-center rounded-xl text-white`}
                        src={event.imageUrl}
                        alt={`Poster of ${event.name}`}
                        onLoad={imageLoadHandle}
                        loading="lazy"
                      />
                    </motion.div>
                    <motion.div className="font-josefin text-white font-bold italic text-3xl xl:text-4xl">
                      {event.name}
                    </motion.div>
                    <motion.div className="font-plex font-light text-white text-sm md:text-sm lg:text-base !mt-2">
                      <div className="flex flex-col w-full">
                        <div className="flex flex-row flex-wrap w-full items-center">
                          <div className="flex flex-row items-center p-4 pl-0 space-x-2 mr-9 divide-breakpoint:mr-0">
                            <img
                              src="/calendar-event-icon.png"
                              alt="Calendar Icon to represent event date"
                              className="object-contain size-5"
                            />
                            <p>{event.date}</p>
                          </div>
                          <img
                            src="/separatorLine.png"
                            alt="Separator line"
                            className="hidden divide-breakpoint:block object-contain size-7 md-4 mr-3 "
                          />
                          <div className="flex flex-row items-center p-4 pl-0 pt-0 divide-breakpoint:pt-4  space-x-2">
                            <img
                              src="/time-event-icon.png"
                              alt="Clock icon to represent event time"
                              className="object-contain size-5 "
                            />
                            <p>{event.time}</p>
                          </div>
                        </div>
                        <div className="flex flex-row items-center p-4 pl-0 pt-0 space-x-2">
                          <img
                            src="/locationPin-event-icon.png"
                            alt="Location pin icon to represent event location"
                            className="object-contain size-5"
                          />
                          <p>{event.location}</p>
                        </div>
                        {"cashPrizeInfo" in event && (
                          <div className="flex flex-row items-center p-4 pl-0 pt-0 space-x-2">
                            <img
                              src="/cash-pool-logo.png"
                              alt="Cash pool icon to represent event cash prize"
                              className="object-contain size-5"
                            />
                            <p>{event.cashPrizeInfo}</p>
                          </div>
                        )}
                        <div className="flex flex-row items-center p-4 pl-0 pt-0 space-x-2">
                          <img
                            src="/register-icon.png"
                            alt="Register icon to represent on-spot registration"
                            className="object-contain size-6 opacity-70"
                          />
                          <p>On-spot registration is available.</p>
                        </div>
                        <div className="flex flex-row items-center p-4 pl-0 pt-0 space-x-2">
                          <img
                            src="/cash-pool-logo.png"
                            alt="Register icon to represent registration fee"
                            className="object-contain size-6 opacity-70"
                          />
                          <p>Registration Fee: {event.registerationFeeInfo}</p>
                        </div>
                      </div>
                    </motion.div>
                    <div
                      className="flex flex-row justify-center mx-auto bg-[url('/eventSubmitBg.png')] bg-cover  min-w-[250px] !mt-9 md:!mt-[2%] text-md md:text-lg text-center font-plex font-bold tracking-widest rounded-full p-4 cursor-pointer"
                      onClick={() => {
                        navigate(`/events/${event.id}`);
                      }}
                      aria-label={`View competitions for ${event.name}`}
                    >
                      Click to view the competitions!
                    </div>
                  </motion.div>
                </div>
              </li>
            );
          })
        )}
      </motion.ul>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="flex flex-row flex-wrap items-center justify-center  bg-cover bg-center bg-fixed space-y-2 pb-32 scroll-smooth"
        style={{ backgroundImage: `url('/bg.webp')` }}
        role="list"
      >
        <div
          className="flex items-center justify-center bg-[url('/eventsTitleBg.png')] bg-no-repeat bg-cover bg-center w-[90svw] min-h-[60px] md:min-h-[80px] my-16 mb-[19svh]
                            font-josefin text-event-card-black font-bold text-[1.7rem] md:text-4xl tracking-[3.8px]
                            rounded-3xl outline outline-1 outline-black"
          role="banner"
        >
          PAST EVENTS
        </div>
        {eventData.pastEvents.map((event) => {
          return (
            <li key={event.id} className="list-none" role="listitem">
              <div>
                <motion.div className="flex flex-col bg-event-card-black w-[88svw] md:w-[65svw] p-7 pt-7 mb-20 pb-7 space-y-5 rounded-3xl ">
                  <motion.div className="flex flex-row justify-center">
                    <img
                      className={`w-[85svw] md:w-[75svw] h-[45svh] md:h-[45svh] object-cover object-center rounded-xl text-white`}
                      src={event.imageUrl}
                      alt={`Poster of ${event.name}`}
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.div className="font-josefin text-white font-bold italic text-3xl xl:text-4xl">
                    {event.name}
                  </motion.div>
                  <motion.div className="font-plex font-light text-white text-sm md:text-sm lg:text-base !mt-2">
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row flex-wrap w-full items-center">
                        <div className="flex flex-row items-center p-4 pl-0 space-x-2 mr-9 divide-breakpoint:mr-0">
                          <img
                            src="/calendar-event-icon.png"
                            alt="Calendar Icon to represent event date"
                            className="object-contain size-5"
                          />
                          <p>{event.date}</p>
                        </div>
                        <img
                          src="/separatorLine.png"
                          alt="Separator line"
                          className="hidden divide-breakpoint:block object-contain size-7 md-4 mr-3 "
                        />
                        <div className="flex flex-row items-center p-4 pl-0 pt-0 divide-breakpoint:pt-4  space-x-2">
                          <img
                            src="/time-event-icon.png"
                            alt="Clock icon to represent event time"
                            className="object-contain size-5 "
                          />
                          <p>{event.time}</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center p-4 pl-0 pt-0 space-x-2">
                        <img
                          src="/locationPin-event-icon.png"
                          alt="Location pin icon to represent event location"
                          className="object-contain size-5"
                        />
                        <p>{event.location}</p>
                      </div>
                      {"cashPrizeInfo" in event && (
                          <div className="flex flex-row items-center p-4 pl-0 pt-0 space-x-2">
                            <img
                              src="/cash-pool-logo.png"
                              alt="Cash pool icon to represent event cash prize"
                              className="object-contain size-5"
                            />
                            <p>{event.cashPrizeInfo}</p>
                          </div>
                        )}
                      <div className="flex flex-row items-center p-4 pl-0 pt-0 space-x-2">
                        <img
                          src="/register-icon.png"
                          alt="Register icon to represent on-spot registration"
                          className="object-contain size-6 opacity-70"
                        />
                        <p>On-spot registration is available.</p>
                      </div>
                      <div className="flex flex-row items-center p-4 pl-0 pt-0 space-x-2">
                        <img
                          src="/cash-pool-logo.png"
                          alt="Register icon to represent registration fee"
                          className="object-contain size-6 opacity-70"
                        />
                        <p>Registration Fee: {event.registerationFeeInfo}</p>
                      </div>
                    </div>
                  </motion.div>
                  <div
                    className="flex flex-row justify-center mx-auto bg-[url('/eventSubmitBg.png')] bg-cover  min-w-[250px] !mt-9 md:!mt-[2%] text-md md:text-lg text-center font-plex font-bold tracking-widest rounded-full p-4 cursor-pointer"
                    onClick={() => {
                      navigate(`/events/${event.id}`);
                    }}
                    aria-label={`View details for ${event.name}`}
                  >
                    Click for More!
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

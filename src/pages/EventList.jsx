import { motion} from "motion/react";
import eventData from "./EventData.jsx";
import { useNavigate } from "react-router-dom";

export default function EventList(){
    const navigate = useNavigate();

    return(
        <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="flex flex-row flex-wrap items-center justify-center bg-[url('/bg.png')] bg-cover bg-center bg-fixed space-y-2 pb-32 scroll-smooth"
      >
        <div
          className="flex items-center justify-center bg-[url('/eventsTitleBg.png')] bg-no-repeat bg-cover bg-center w-[90svw] min-h-[60px] md:min-h-[80px] my-16 mb-[19svh]
                            font-josefin text-event-card-black font-bold text-[1.7rem] md:text-4xl tracking-[3.8px]
                            rounded-3xl outline outline-1 outline-black"
        >
          UPCOMING EVENTS
        </div>
        {eventData.upcomingEvents.map((event) => {
          return (
            <li key={event.id} className="list-none">
              <div onClick={()=>{navigate(`/events/${event.id}`);}}>
                <motion.div
                  className="flex flex-col bg-event-card-black w-[88svw] p-7 pt-7 space-y-5 rounded-3xl "
                >
                  <motion.div
                    className="flex flex-row justify-center"
                  >
                    <img
                      className={`w-[85svw] h-[45svh] md:h-[55svh] object-cover bg-top rounded-xl text-white`}
                      src={event.imageUrl}
                      alt="Poster of 'A Tale of Three Quizzes'"
                    />
                  </motion.div>
                  <motion.div
                    className="font-josefin text-white font-bold italic text-3xl xl:text-4xl"
                  >
                    {event.name}
                  </motion.div>
                  <motion.div
                    className="font-plex font-light text-white text-sm md:text-md lg:text-lg -mt-4"
                  >
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row flex-wrap w-full items-center">
                            <div className="flex flex-row items-center p-4 pl-0 space-x-2 mr-9 divide-breakpoint:mr-0">
                                <img src="/calendar-event-icon.png" alt="Calendar Icon to represent event date" className="object-contain size-5" />
                                <p>{event.date}</p>
                            </div>
                            <img src="/separatorLine.png" alt="line" className="hidden divide-breakpoint:block object-contain size-7 md-4 mr-3 " />
                            <div className="flex flex-row items-center p-4 pl-0 pt-0 divide-breakpoint:pt-4  space-x-2">
                                <img src="/time-event-icon.png" alt="Clock icon to represent event time" className="object-contain size-5 " />
                                <p>{event.time}</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center p-4 pl-0 pt-0 space-x-2">
                            <img src="/locationPin-event-icon.png" alt="location pin icon to represent event location" className="object-contain size-5"/>
                            <p>{event.location}</p>
                        </div>
                    </div>
                  </motion.div>
                  <div
                    className="flex flex-row justify-center mx-auto bg-[url('/eventSubmitBg.png')] bg-cover w-[20%] min-w-[250px] !mt-9 md:!mt-[2%] text-md md:text-xl font-plex font-bold tracking-widest rounded-full p-4 cursor-pointer"
                    onClick={() => {
                      navigate(`/events/${event.id}`);
                    }}
                  >
                    Click For More
                  </div>
                </motion.div>
              </div>
            </li>
          );
        })}
      </motion.ul>
    )
}
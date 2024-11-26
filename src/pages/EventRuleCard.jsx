import { motion} from "motion/react"
import events from "./EventsData"
import { useNavigate } from "react-router-dom"


export default function EventRuleCard({id}){

    const event = events.find((event) => event.id == id)
    const navigate = useNavigate();

    return(
        <motion.div onClick={()=>{navigate('/events')}} layoutId={`card-container-${event.id}`}
            className="bg-[url('/PopUpBackground.jpg')] bg-cover bg-center bg-fixed w-[70svw] min-w-[360px] overflow-scroll fixed mx-auto mt-[4.5%] inset-0 my-auto p-3 z-50 rounded-3xl"> 

            <motion.div 
            className="flex flex-col justify-center border border-black p-5 lg:p-8 rounded-xl space-y-8"
            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.2}}>

                <div className="flex justify-end">
                    <img className="size-8 md:size-10 cursor-pointer sticky top-0 -mt-4 -mr-4 -mb-5" onClick={navigate('/events')} src="/close-button-icon.svg" alt="" />
                </div>
                <motion.div className="flex justify-center items-center font-josefin text-event-card-black font-bold italic text-4xl" layoutId={`card-title-container-${event.id}`}>
                    {event.name}
                </motion.div>
                <motion.div className="flex flex-row justify-center" layoutId={`card-image-container-${event.id}`}>
                    <img className="w-[35svw] h-[25svh] object-cover rounded-xl" src={event.imageUrl} alt="Lazy to specify one" />
                </motion.div>
                <motion.div className="font-plex text-justify font-normal text-event-card-black text-sm md:text-md lg:text-lg" layoutId={`card-desc-container-${event.id}`}>
                    {event.description}
                </motion.div>
                <div className="flex flex-col font-plex text-event-card-black">
                    <p className="text-xl font-bold">
                        Guidelines :
                    </p>
                    <ol className="text-sm md:text-md lg:text-lg space-y-4 mt-4">
                        <li>1. Each team should consist of 2 members.</li>
                        <li>2. The event will feature 2 rounds.</li>
                    </ol>
                </div>
                <div className="flex flex-col font-plex text-event-card-black gap-y-5">
                    <p className="font-bold text-xl">Rules :</p>
                    <div>
                        <p className="font-semibold text-lg">Prelims :</p>
                        <ol className="text-sm md:text-md lg:text-lg space-y-4 mt-4">
                            <li>1. Questions will be based on movies, day-to-day life objects, and proverbs / idioms.</li>
                            <li>2. Splitting words or usage of codes and references are restricted.</li>
                            <li>3. Participants are not allowed to enact the exact word of the movie. They should enact the plot of the movie.</li>
                        </ol>
                    </div>

                    <div>
                        <p className="font-semibold text-lg">Finals :</p>
                        <ol className="text-sm md:text-md lg:text-lg space-y-4 mt-4">
                            <li>1. All the rules in the prelims should be followed in finals as well.</li>
                            <li>2. The performance shall be based on the same skill or it might be a different skill from the one performed in the prelims.</li>
                        </ol>
                    </div>
                </div>
                
            </motion.div>

        </motion.div>
    )

}
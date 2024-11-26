import { AnimatePresence } from "framer-motion"
import EventList from "./EventList"
import EventRuleCard from "./EventRuleCard"
import { useParams } from "react-router-dom"

export default function Events(){
    const { id } = useParams()
    return(
        <>
            <EventList/>
            <AnimatePresence>
                {id && <EventRuleCard id={id} />}
            </AnimatePresence>
        </>
    )

}
import { motion } from "framer-motion"

export default function LoadingAnimation(){
    return(
        <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed flex justify-center items-center w-full h-lvh z-[100] inset-0 bg-event-card-black`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`"loader" : "hidden"} w-full`}
        ></motion.div>
      </motion.div>
    )
}
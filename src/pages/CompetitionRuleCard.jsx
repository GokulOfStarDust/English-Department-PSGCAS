import { motion } from "motion/react";
import competitionData from "./CompetitionData";
import { useNavigate, useParams } from "react-router-dom";

export default function EventRuleCard({ competitionId }) {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const competitions = competitionData[eventId];
  const competition = competitions.find(
    (eachCompetitions) => eachCompetitions.id == competitionId,
  );

  const rules = Object.keys(competition.rules);
  console.log(rules);

  return (
    <motion.div
      onClick={() => {
        navigate(`/events/${eventId}`);
      }}
      layoutId={`card-container-${competitionId}`}
      className="bg-[url('/PopUpBackground.jpg')] bg-cover bg-center bg-fixed w-[70svw] min-w-[360px] overflow-scroll fixed mx-auto mt-[4.5%] inset-0 my-auto p-3 z-50 rounded-3xl"
    >
      <motion.div
        className="flex flex-col justify-center border border-black p-5 lg:p-8 rounded-xl space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex justify-end">
          <img
            className="size-8 md:size-10 cursor-pointer sticky top-0 -mt-4 -mr-4 -mb-5"
            onClick={() => navigate(`/events/${eventId}`)}
            src="/close-button-icon.svg"
            alt=""
          />
        </div>
        <motion.div
          className="flex justify-center items-center font-josefin text-event-card-black font-bold italic text-4xl"
          layoutId={`card-title-container-${competitionId}`}
        >
          {competition.name}
        </motion.div>
        <motion.div
          className="flex flex-row justify-center"
          layoutId={`card-image-container-${competitionId}`}
        >
          <img
            className="w-[35svw] h-[25svh] object-cover rounded-xl"
            src={competition.imageUrl}
            alt="Lazy to specify one"
          />
        </motion.div>
        <motion.div
          className="font-plex text-justify font-normal text-event-card-black text-sm md:text-md lg:text-lg"
          layoutId={`card-desc-container-${competitionId}`}
        >
          {competition.description}
        </motion.div>
        <div className="flex flex-col font-plex text-event-card-black">
          <p className="text-xl font-bold">Guidelines :</p>
          <ol className="text-sm md:text-md lg:text-lg space-y-4 mt-4">
            {competition.guidelines.map((guideline, index) => {
              return (
                <li key={`${index}`}>
                  {index + 1}. {guideline}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="flex flex-col font-plex text-event-card-black gap-y-5">
          <p className="font-bold text-xl">Rules :</p>
          <div>
            {Object.keys(competition.rules).map((round) => {
              return (
                <>
                  <p className="font-semibold text-lg mt-4">{round} :</p>
                  <ol className="text-sm md:text-md lg:text-lg space-y-4 mt-4">
                    {competition.rules[round].map((rule, index) => {
                      return (
                        <li key={index}>
                          {index + 1}. {rule}
                        </li>
                      );
                    })}
                  </ol>
                </>
              );
            })}
          </div>
        </div>
        <div
                      className="flex flex-row justify-center items-center mx-auto bg-[url('/eventSubmitBg.png')]  bg-cover w-[25%] min-w-[250px] mt-9 xxl:mt-[2.3%] bottom-2 text-base md:text-lg xxl:text-xl font-plex font-bold tracking-widest rounded-full p-4 cursor-pointer hover:underline"
                      onClick={() => {
                        navigate(`/register`);
                      }}
                    >
                      Click to Regsiter
                    </div>

      </motion.div>
    </motion.div>
  );
}

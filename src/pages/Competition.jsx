import { AnimatePresence } from "framer-motion";
import CompetitionList from "./CompetitonList";
import CompetitionRuleCard from "./CompetitionRuleCard";
import { useParams } from "react-router-dom";

export default function Competition() {
  const { eventId, competitionId } = useParams();
  return (
    <>
      <CompetitionList eventId={eventId} />
      <AnimatePresence>
        {competitionId && <CompetitionRuleCard competitionId={competitionId} />}
      </AnimatePresence>
    </>
  );
}

import { useMemo } from "react";

import {
  useAgilityStore,
  useCharismaStore,
  useEnduranceStore,
  useIntelligenceStore,
  useLuckStore,
  usePerceptionStore,
  useStrengthStore,
} from "../store";
import { SPECIALS } from "../entities/Specials";

export const usePerksStore = (currentSpecial: SPECIALS) => {
  const { type: agility, ...restAgility } = useAgilityStore();
  const { type: charisma, ...restCharisma } = useCharismaStore();
  const { type: endurance, ...restEndurance } = useEnduranceStore();
  const { type: intelligence, ...restIntelligence } = useIntelligenceStore();
  const { type: luck, ...restLuck } = useLuckStore();
  const { type: perception, ...restPerception } = usePerceptionStore();
  const { type: strength, ...restStrength } = useStrengthStore();

  const allAddCallbacks = {
    [SPECIALS.STRENGTH]: restStrength.addPerk,
    [SPECIALS.PERCEPTION]: restPerception.addPerk,
    [SPECIALS.ENDURANCE]: restEndurance.addPerk,
    [SPECIALS.CHARISMA]: restCharisma.addPerk,
    [SPECIALS.INTELLIGENCE]: restIntelligence.addPerk,
    [SPECIALS.AGILITY]: restAgility.addPerk,
    [SPECIALS.LUCK]: restLuck.addPerk,
  };

  return useMemo(() => {
    switch (currentSpecial) {
      case agility:
        return { ...restAgility, allAddCallbacks };
      case charisma:
        return { ...restCharisma, allAddCallbacks };
      case endurance:
        return { ...restEndurance, allAddCallbacks };
      case intelligence:
        return { ...restIntelligence, allAddCallbacks };
      case luck:
        return { ...restLuck, allAddCallbacks };
      case perception:
        return { ...restPerception, allAddCallbacks };
      case strength:
        return { ...restStrength, allAddCallbacks };
      default:
        return { ...restStrength, allAddCallbacks };
    }
  }, [
    currentSpecial,
    restAgility.perkList,
    restCharisma.perkList,
    restEndurance.perkList,
    restIntelligence.perkList,
    restLuck.perkList,
    restPerception.perkList,
    restStrength.perkList,
  ]);
};

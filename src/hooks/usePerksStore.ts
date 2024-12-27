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
  const { perkList: agilityPerkList, type: agility } = useAgilityStore();
  const { perkList: charismaPerkList, type: charisma } = useCharismaStore();
  const { perkList: endurancePerkList, type: endurance } = useEnduranceStore();
  const { perkList: intelligencePerkList, type: intelligence } =
    useIntelligenceStore();
  const { perkList: luckPerkList, type: luck } = useLuckStore();
  const { perkList: perceptionPerkList, type: perception } =
    usePerceptionStore();
  const { perkList: strengthPerkList, type: strength } = useStrengthStore();

  const currentPerks = useMemo(() => {
    switch (currentSpecial) {
      case agility:
        return agilityPerkList;
      case charisma:
        return charismaPerkList;
      case endurance:
        return endurancePerkList;
      case intelligence:
        return intelligencePerkList;
      case luck:
        return luckPerkList;
      case perception:
        return perceptionPerkList;
      case strength:
        return strengthPerkList;
    }
  }, [currentSpecial]);

  return currentPerks;
};

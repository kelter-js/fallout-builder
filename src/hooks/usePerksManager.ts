import { useEffect, useState } from "react";

import {
  useAgilityStore,
  useCharismaStore,
  useEnduranceStore,
  useIntelligenceStore,
  useLuckStore,
  usePerceptionStore,
  useStrengthStore,
} from "../store";
import { useCharacterStore } from "../store/Character";
import { SPECIALS } from "../entities/Specials";
import { IPerk } from "../types/Perk";
import { SavedBuild } from "./types";
import { restorePerk } from "./utils";

export const usePerksManager = () => {
  const { selectedPerks, addPerk, deleteCharacterPerk } = useCharacterStore();
  const [savedBuilds, setSavedBuilds] = useState<SavedBuild[]>([]);

  const [selectedBuild, setSelectedBuild] = useState<null | number>(null);
  const [isBuildSettled, setBuildSettled] = useState(false);

  const {
    perkList: agilityPerkList,
    removePerk: removePerkAgility,
    addPerk: addPerkAgility,
  } = useAgilityStore();

  const {
    perkList: charismaPerkList,
    removePerk: removePerkCharisma,
    addPerk: addPerkCharisma,
  } = useCharismaStore();

  const {
    perkList: endurancePerkList,
    removePerk: removePerkEndurance,
    addPerk: addPerkEndurance,
  } = useEnduranceStore();

  const {
    perkList: intelligencePerkList,
    removePerk: removePerkIntelligence,
    addPerk: addPerkIntelligence,
  } = useIntelligenceStore();

  const {
    perkList: luckPerkList,
    removePerk: removePerkLuck,
    addPerk: addPerkLuck,
  } = useLuckStore();

  const {
    perkList: perceptionPerkList,
    removePerk: removePerkPerception,
    addPerk: addPerkPerception,
  } = usePerceptionStore();

  const {
    perkList: strengthPerkList,
    removePerk: removePerkStrength,
    addPerk: addPerkStrength,
  } = useStrengthStore();

  useEffect(() => {
    const previousBuilds = localStorage.getItem("builds");

    const parsedBuilds =
      (previousBuilds ? JSON.parse(previousBuilds) : []) || [];
    setSavedBuilds(parsedBuilds);
  }, []);

  const saveToStorageBuild = (buildName: string) => {
    const previousBuilds = localStorage.getItem("builds");
    const parsedBuilds =
      (previousBuilds ? JSON.parse(previousBuilds) : []) || [];

    const perksList = selectedPerks.map(({ type, selectedStars, perkId }) => ({
      type,
      selectedStars,
      perkId,
    }));

    const newPerkData = { buildName, perksList };

    localStorage.setItem(
      "builds",
      JSON.stringify([...parsedBuilds, newPerkData])
    );
    setSavedBuilds((state) => [...state, newPerkData]);
  };

  const resetCalculator = (index?: number) => {
    selectedPerks.forEach((perk) => {
      const type = perk.type;

      switch (type) {
        case SPECIALS.AGILITY:
          addPerkAgility(perk);
          break;
        case SPECIALS.CHARISMA:
          addPerkCharisma(perk);
          break;
        case SPECIALS.ENDURANCE:
          addPerkEndurance(perk);
          break;
        case SPECIALS.INTELLIGENCE:
          addPerkIntelligence(perk);
          break;
        case SPECIALS.LUCK:
          addPerkLuck(perk);
          break;
        case SPECIALS.PERCEPTION:
          addPerkPerception(perk);
          break;
        case SPECIALS.STRENGTH:
          addPerkStrength(perk);
          break;
      }

      deleteCharacterPerk(perk.perkId);
    });

    setSelectedBuild(typeof index === "number" ? index : null);
    setBuildSettled(false);
  };

  useEffect(() => {
    if (selectedBuild !== null && !isBuildSettled) {
      const perksList = savedBuilds[selectedBuild].perksList as IPerk[];

      perksList.forEach((perk) => {
        const type = perk.type;
        const perkId = perk.perkId;
        const selectedStars = perk.selectedStars;

        switch (type) {
          case SPECIALS.AGILITY: {
            restorePerk({
              selectedStars,
              addPerk,
              perkId,
              perkList: agilityPerkList,
              remove: removePerkAgility,
            });

            break;
          }
          case SPECIALS.CHARISMA: {
            restorePerk({
              selectedStars,
              addPerk,
              perkId,
              perkList: charismaPerkList,
              remove: removePerkCharisma,
            });

            break;
          }
          case SPECIALS.ENDURANCE: {
            restorePerk({
              selectedStars,
              addPerk,
              perkId,
              perkList: endurancePerkList,
              remove: removePerkEndurance,
            });

            break;
          }
          case SPECIALS.INTELLIGENCE: {
            restorePerk({
              selectedStars,
              addPerk,
              perkId,
              perkList: intelligencePerkList,
              remove: removePerkIntelligence,
            });

            break;
          }
          case SPECIALS.LUCK: {
            restorePerk({
              selectedStars,
              addPerk,
              perkId,
              perkList: luckPerkList,
              remove: removePerkLuck,
            });

            break;
          }
          case SPECIALS.PERCEPTION: {
            restorePerk({
              selectedStars,
              addPerk,
              perkId,
              perkList: perceptionPerkList,
              remove: removePerkPerception,
            });

            break;
          }
          case SPECIALS.STRENGTH: {
            restorePerk({
              selectedStars,
              addPerk,
              perkId,
              perkList: strengthPerkList,
              remove: removePerkStrength,
            });

            break;
          }
        }
      });

      setBuildSettled(true);
    }
  }, [selectedBuild, isBuildSettled]);

  const removePerkList = (perkListIndex: number) => {
    const newList = [...savedBuilds];
    newList.splice(perkListIndex, 1);

    setSavedBuilds(newList);
    localStorage.setItem("builds", JSON.stringify(newList));
  };

  return {
    saveToStorageBuild,
    savedBuilds,
    resetCalculator,
    selectedBuild,
    removePerkList,
  };
};

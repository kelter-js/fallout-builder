import { create } from "zustand";

import { DEFAULT_AMOUNT_OF_STARS } from "./constants";
import { SPECIALS } from "../entities/Specials";
import { PerkStoreData } from "../types/Perk";

export const useEnduranceStore = create<PerkStoreData>((set) => ({
  perkList: [
    {
      perkId: "leadBelly",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете на 30% меньше радиации при употреблении пищи и воды";
        }

        if (stars === 2) {
          return "Вы получаете на 60% меньше радиации при употреблении пищи и воды";
        }

        if (stars === 3) {
          return "Вы получаете не получаете радиации при употреблении пищи и воды";
        }

        return "";
      },
      title: "Свинцовое брюхо",
      levelRequirment: 2,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Lead_Belly.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 0,
    },
    {
      perkId: "dromedary",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Все напитки утоляют жажду на 25% эффективнее";
        }

        if (stars === 2) {
          return "Все напитки утоляют жажду на 50% эффективнее";
        }

        if (stars === 3) {
          return "Все напитки утоляют жажду на 75% эффективнее";
        }

        return "";
      },
      title: "Верблюд",
      levelRequirment: 3,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Dromedary.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 1,
    },
    {
      perkId: "ironStomach",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Шанс заразиться от приёма пищи уменьшен на 30%";
        }

        if (stars === 2) {
          return "Шанс заразиться от приёма пищи уменьшен на 60%";
        }

        if (stars === 3) {
          return "Шанс заразиться от приёма пищи уменьшен на 90%";
        }

        return "";
      },
      title: "Железный желудок",
      levelRequirment: 4,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Iron_Stomach.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 2,
    },
    {
      perkId: "slowMetabolizer",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вся пища утоляет голод на 25% эффективнее";
        }

        if (stars === 2) {
          return "Вся пища утоляет голод на 50% эффективнее";
        }

        if (stars === 3) {
          return "Вся пища утоляет голод на 75% эффективнее";
        }

        return "";
      },
      title: "Медленный метаболизм",
      levelRequirment: 5,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Slow_Metabolizer.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 3,
    },
    {
      perkId: "thirstQuencher",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Шанс заразиться от выпитых напитков уменьшен на 30%";
        }

        if (stars === 2) {
          return "Шанс заразиться от выпитых напитков уменьшен на 60%";
        }

        if (stars === 3) {
          return "Шанс заразиться от выпитых напитков уменьшен на 90%";
        }

        return "";
      },
      title: "Утолитель жажды",
      levelRequirment: 6,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Thirst_Quencher.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 4,
    },
    {
      perkId: "goodDoggy",
      cost: 1,
      totalAmountOfStars: 1,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Увеличивает эффективность собачьих консервов в три раза";
        }

        return "";
      },
      title: "Хороший пёсик",
      levelRequirment: 8,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Good_Doggy.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 5,
    },
    {
      perkId: "naturalResistance",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Шанс заразиться от окружающей среды уменьшен на 30%";
        }

        if (stars === 2) {
          return "Шанс заразиться от окружающей среды уменьшен на 60%";
        }

        if (stars === 3) {
          return "Шанс заразиться от окружающей среды уменьшен на 90%";
        }

        return "";
      },
      title: "Естественная сопротивляемость",
      levelRequirment: 10,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Natural_Resistance.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 6,
    },
    {
      perkId: "hydroFix",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Употребление химии вызывает на 50%  меньше жажды";
        }

        if (stars === 2) {
          return "Употребление химии вызывает не вызывает жажды";
        }

        return "";
      },
      title: "Подавление жажды",
      levelRequirment: 11,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Hydro_Fix.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 7,
    },
    {
      perkId: "rejuvenated",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете увеличенные бонусы от эффектов сытости и гидратации";
        }

        if (stars === 2) {
          return "Вы получаете  значительно увеличенные бонусы от эффектов сытости и гидратации";
        }

        return "";
      },
      title: "Обновленный",
      levelRequirment: 12,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Rejuvenated.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 8,
    },
    {
      perkId: "colaNut",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете двойные бонусы от ядер-колы";
        }

        if (stars === 2) {
          return "Вы получаете тройные бонусы от ядер-колы";
        }

        return "";
      },
      title: "Супер-кола",
      levelRequirment: 14,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Cola_Nut.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 9,
    },
    {
      perkId: "cannibal",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Поедая трупы гулей, супер-мутантов, горелых, и кротов-шахтёров вы восстанавливаете здоровье и голод";
        }

        if (stars === 2) {
          return "Поедая трупы гулей, супер-мутантов, горелых, и кротов-шахтёров вы больше восстанавливаете здоровье и голод";
        }

        if (stars === 3) {
          return "Поедая трупы гулей, супер-мутантов, горелых, и кротов-шахтёров вы значительно восстанавливаете здоровье и голод";
        }

        return "";
      },
      title: "Каннибал",
      levelRequirment: 15,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Cannibal.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 10,
    },
    {
      perkId: "vaccinated",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Шанс заразиться болезнями от существ уменьшен на 30%";
        }

        if (stars === 2) {
          return "Шанс заразиться болезнями от существ уменьшен на 60%";
        }

        if (stars === 3) {
          return "Шанс заразиться болезнями от существ уменьшен на 90%";
        }

        return "";
      },
      title: "Вакцинация",
      levelRequirment: 16,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Vaccinated.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 11,
    },
    {
      perkId: "munchyResistance",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Шанс получить зависимость от препарата уменьшен на 50%";
        }

        if (stars === 2) {
          return "Вы больше не можете получить зависимость от препаратов";
        }

        return "";
      },
      title: "Чистая жизнь",
      levelRequirment: 17,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Munchy_Resistance.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 12,
    },
    {
      perkId: "homebody",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы регенерируете здоровье, пока вы находитесь в CAMP";
        }

        if (stars === 2) {
          return "Вы значительно регенерируете здоровье, а также восстанавливаете конечности, пока находитесь в CAMP";
        }

        return "";
      },
      title: "Домосед",
      levelRequirment: 19,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Homebody.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 13,
    },
    {
      perkId: "adamantiumSkeleton",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши конечности получают на 30% меньше урона";
        }

        if (stars === 2) {
          return "Ваши конечности получают на 60% меньше урона";
        }

        if (stars === 3) {
          return "Ваши конечности не получают  урона";
        }

        return "";
      },
      title: "Алмазный скелет",
      levelRequirment: 21,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Adamantium_Skeleton.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 14,
    },
    {
      perkId: "solarPowered",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +1 к силе и выносливости между 6 утра и 6 вечера.";
        }

        if (stars === 2) {
          return "Вы получаете +2 к силе и выносливости между 6 утра и 6 вечера.";
        }

        if (stars === 3) {
          return "Вы получаете +3 к силе и выносливости между 6 утра и 6 вечера.";
        }

        return "";
      },
      title: "Солнечная батарейка",
      levelRequirment: 22,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Solar_Powered.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 15,
    },
    {
      perkId: "chemFiend",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Эффекты от употребления химии на 30% дольше";
        }

        if (stars === 2) {
          return "Эффекты от употребления химии на 60% дольше";
        }

        if (stars === 3) {
          return "Эффекты от употребления химии вдвое дольше";
        }

        return "";
      },
      title: "Чёрт на препаратах",
      levelRequirment: 23,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Chem_Fiend.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 16,
    },
    {
      perkId: "aquaboy",
      cost: 1,
      totalAmountOfStars: 1,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы больше не получаете радиации от плавания в воде и можете дышать под водой.";
        }

        return "";
      },
      title: "Аквамальчик/Аквадевочка",
      levelRequirment: 26,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Aquaboy.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 17,
    },
    {
      perkId: "fireproof",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете на 15% меньше урона от взрывов и урона огнем";
        }

        if (stars === 2) {
          return "Вы получаете на 30% меньше урона от взрывов и урона огнем";
        }

        if (stars === 3) {
          return "Вы получаете на 45% меньше урона от взрывов и урона огнем";
        }

        return "";
      },
      title: "Огнеупорный",
      levelRequirment: 27,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Fireproof.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 18,
    },
    {
      perkId: "nocturnalFortitude",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете 20 единиц к максимальному здоровью между 6 вечера и 6 утра";
        }

        if (stars === 2) {
          return "Вы получаете 40 единиц к максимальному здоровью между 6 вечера и 6 утра";
        }

        return "";
      },
      title: "Ночная отвага",
      levelRequirment: 29,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Nocturnal_Fortitude.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 19,
    },
    {
      perkId: "ironclad",
      cost: 1,
      totalAmountOfStars: 5,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +10 к сопротивлению обычному и энергетическому урону , если не носите силовой брони";
        }

        if (stars === 2) {
          return "Вы получаете +20 к сопротивлению обычному и энергетическому урону , если не носите силовой брони";
        }

        if (stars === 3) {
          return "Вы получаете +30 к сопротивлению обычному и энергетическому урону , если не носите силовой брони";
        }

        if (stars === 4) {
          return "Вы получаете +40 к сопротивлению обычному и энергетическому урону , если не носите силовой брони";
        }

        if (stars === 5) {
          return "Вы получаете +50 к сопротивлению обычному и энергетическому урону , если не носите силовой брони";
        }

        return "";
      },
      title: "Броненосец",
      levelRequirment: 30,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Ironclad.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 20,
    },
    {
      perkId: "revenant",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +25% к урону на две минуты после воскрешения другим игроком";
        }

        if (stars === 2) {
          return "Вы получаете +50% к урону на две минуты после воскрешения другим игроком";
        }

        return "";
      },
      title: "Выживший",
      levelRequirment: 32,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Revenant.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 21,
    },
    {
      perkId: "radResistant",
      cost: 1,
      totalAmountOfStars: 4,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +10 к сопротивлению радиации";
        }

        if (stars === 2) {
          return "Вы получаете +20 к сопротивлению радиации";
        }

        if (stars === 3) {
          return "Вы получаете +30 к сопротивлению радиации";
        }

        if (stars === 4) {
          return "Вы получаете +40 к сопротивлению радиации";
        }

        return "";
      },
      title: "Рад-сопротивляемость",
      levelRequirment: 34,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Rad_Resistant.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 22,
    },
    {
      perkId: "ghoulish",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Радиоактивное облучение восстанавливает вам отсутствующее здоровье";
        }

        if (stars === 2) {
          return "Радиоактивное облучение восстанавливает вам больше отсутствующее здоровье";
        }

        if (stars === 3) {
          return "Радиоактивное облучение восстанавливает вам еще больше отсутствующее здоровье";
        }

        return "";
      },
      title: "Гулификация",
      levelRequirment: 36,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Ghoulish.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 23,
    },
    {
      perkId: "radicool",
      cost: 1,
      totalAmountOfStars: 1,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Чем больше вы радиоактивны - тем больше ваша сила (+5 макс.)";
        }

        return "";
      },
      title: "Радикрутость",
      levelRequirment: 38,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Radicool.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 24,
    },
    {
      perkId: "professionalDrinker",
      cost: 3,
      totalAmountOfStars: 1,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "У вас нет шанса получить алкогольную зависимость";
        }

        return "";
      },
      title: "Профессиональный алкоголик",
      levelRequirment: 39,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Professional_Drinker.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 25,
    },
    {
      perkId: "allNightLong",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Жажда и голод наступают на 20% медленнее ночью";
        }

        if (stars === 2) {
          return "Жажда и голод наступают на 40% медленнее ночью";
        }

        if (stars === 3) {
          return "Жажда и голод наступают на 60% медленнее ночью";
        }

        return "";
      },
      title: "Всю ночь",
      levelRequirment: 41,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_All_Night_Long.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 26,
    },
    {
      perkId: "chemResistant",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Шанс получить зависимость от препаратов на 50% меньше";
        }

        if (stars === 2) {
          return "Шанс не можете получить зависимость от препаратов";
        }

        return "";
      },
      title: "Чистая жизнь",
      levelRequirment: 43,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Chem_Resistant.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 27,
    },
    {
      perkId: "sunKissed",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы медленно восстанавливаетесь от радиации между 6 утра и 6 вечера";
        }

        if (stars === 2) {
          return "Вы ускоренно восстанавливаетесь от радиации между 6 утра и 6 вечера";
        }

        return "";
      },
      title: "Поцелованный солнцем",
      levelRequirment: 45,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Sun_Kissed.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 28,
    },
    {
      perkId: "photoSynthetic",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы медленно восстанавливаете здоровье между 6 утра и 6 вечера";
        }

        if (stars === 2) {
          return "Вы быстрее восстанавливаете здоровье между 6 утра и 6 вечера";
        }

        return "";
      },
      title: "Фотосинтез",
      levelRequirment: 47,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Photosynthetic.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 29,
    },
    {
      perkId: "lifegiver",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +15 к максимальному здоровью";
        }

        if (stars === 2) {
          return "Вы получаете +30 к максимальному здоровью";
        }

        if (stars === 3) {
          return "Вы получаете +45 к максимальному здоровью";
        }

        return "";
      },
      title: "Фонтан жизни",
      levelRequirment: 50,
      iconSource: `${process.env.PUBLIC_URL}/assets/endurance/FO76_Lifegiver.png`,
      selectedStars: 1,
      type: SPECIALS.ENDURANCE,
      order: 30,
      initialCost: 2,
    },
  ],
  type: SPECIALS.ENDURANCE,
  removePerk: (id) =>
    set((state) => ({
      ...state,
      perkList: state.perkList.filter((perk) => perk.perkId !== id),
    })),
  addPerk: (perk) => {
    const perkData = { ...perk };
    perkData.selectedStars = DEFAULT_AMOUNT_OF_STARS;
    set((state) => ({
      ...state,
      perkList: [...state.perkList, perkData].sort(
        (perkA, perkB) => perkA.order - perkB.order
      ),
    }));
  },
}));

import { create } from "zustand";

import { PerkStoreData } from "../types/Perk";
import { SPECIALS } from "../entities/Specials";

export const useCharismaStore = create<PerkStoreData>((set) => ({
  perkList: [
    {
      perkId: "inspirational",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Находясь в группе вы получаете на 5% больше опыта";
        }

        if (stars === 2) {
          return "Находясь в группе вы получаете на 10% больше опыта";
        }

        if (stars === 3) {
          return "Находясь в группе вы получаете на 15% больше опыта";
        }

        return "";
      },
      title: "Прирожденный лидер",
      levelRequirment: 2,
      iconSource: "",
      modificator: 5,
      modificatorStep: 5,
      selectedStars: 0,
    },
    {
      perkId: "happyCamper",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Голод и жажда наступают на 40% медленнее, если вы находитесь в C.A.M.P";
        }

        if (stars === 2) {
          return "Голод и жажда наступают на 80% медленнее, если вы находитесь в C.A.M.P";
        }

        return "";
      },
      title: "Весёлый турист",
      levelRequirment: 3,
      iconSource: "",
      modificator: 40,
      modificatorStep: 40,
      selectedStars: 0,
    },
    {
      perkId: "loneWanderer",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Путешествуя в одиночку, вы получаете на 10% меньше урона и ваши очки действия восстанавливаются на 10% быстрее";
        }

        if (stars === 2) {
          return "Путешествуя в одиночку, вы получаете на 15% меньше урона и ваши очки действия восстанавливаются на 20% быстрее";
        }

        if (stars === 3) {
          return "Путешествуя в одиночку, вы получаете на 20% меньше урона и ваши очки действия восстанавливаются на 30% быстрее";
        }

        return "";
      },
      title: "Одинокий путник",
      levelRequirment: 4,
      iconSource: "",
      modificator: 10,
      modificatorStep: 5,
      sideModificator: 10,
      sideModificatorStep: 10,
      initialCost: 2,
      selectedStars: 0,
    },
    {
      perkId: "bodyguards",
      cost: 1,
      totalAmountOfStars: 4,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете 6 к сопротивлению физическому и энергетическому урону за каждого напарника в команде(макс 18), не учитывая вас";
        }

        if (stars === 2) {
          return "Вы получаете 8 к сопротивлению физическому и энергетическому урону за каждого напарника в команде(макс 24), не учитывая вас";
        }

        if (stars === 3) {
          return "Вы получаете 10 к сопротивлению физическому и энергетическому урону за каждого напарника в команде(макс 30), не учитывая вас";
        }

        if (stars === 4) {
          return "Вы получаете 12 к сопротивлению физическому и энергетическому урону за каждого напарника в команде(макс 36), не учитывая вас";
        }

        return "";
      },
      title: "Телохранители",
      levelRequirment: 5,
      iconSource: "",
      modificator: 18,
      modificatorStep: 6,
      selectedStars: 0,
    },
    {
      perkId: "hardBargain",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +3 к харизме во время бартера (цены на продажу и покупку становятся выгоднее)";
        }

        if (stars === 2) {
          return "Вы получаете +6 к харизме во время бартера (цены на продажу и покупку становятся выгоднее)";
        }

        if (stars === 3) {
          return "Вы получаете +9 к харизме во время бартера (цены на продажу и покупку становятся выгоднее)";
        }

        return "";
      },
      title: "Любитель поторговаться",
      levelRequirment: 7,
      iconSource: "",
      modificator: 3,
      modificatorStep: 3,
      selectedStars: 0,
    },
    {
      perkId: "EMT",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Игроки воскрешенные вами получают ускоренное восстановления здоровья в течение 15 секунд";
        }

        if (stars === 2) {
          return "Игроки воскрешенные вами получают ускоренное восстановления здоровья в течение 30 секунд";
        }

        if (stars === 3) {
          return "Игроки воскрешенные вами получают ускоренное восстановления здоровья в течение 60 секунд";
        }

        return "";
      },
      title: "Скорая помощь",
      levelRequirment: 9,
      iconSource: "",
      modificator: 15,
      modificatorStep: 15,
      maxModificatorStep: 60,
      selectedStars: 0,
    },
    {
      perkId: "bloodsucker",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Пакеты с кровью теперь утоляют жажду, более не заражают радиацией и восстанавливают на 50% больше здоровья";
        }

        if (stars === 2) {
          return "Пакеты с кровью теперь утоляют жажду, более не заражают радиацией и восстанавливают на 100% больше здоровья";
        }

        if (stars === 3) {
          return "Пакеты с кровью теперь утоляют жажду, более не заражают радиацией и восстанавливают на 150% больше здоровья";
        }

        return "";
      },
      title: "Кровосос",
      levelRequirment: 11,
      iconSource: "",
      modificator: 50,
      modificatorStep: 50,
      selectedStars: 0,
    },
    {
      perkId: "magneticPersonality",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +1 к харизме за каждого члена команды, не включая вас";
        }

        if (stars === 2) {
          return "Вы получаете +2 к харизме за каждого члена команды, не включая вас";
        }

        return "";
      },
      title: "Притягательная личность",
      levelRequirment: 13,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "fieldSurgeon",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Стимпаки и антирады начинают действовать гораздо быстрее";
        }

        return "";
      },
      title: "Полевой хирург",
      levelRequirment: 15,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
      initialCost: 2,
    },
    {
      perkId: "happyGoLucky",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваша удача увеличивается на 2 пока вы находитесь под алкогольным опъянением";
        }

        if (stars === 2) {
          return "Ваша удача увеличивается на 3 пока вы находитесь под алкогольным опъянением";
        }

        return "";
      },
      title: "Беззаботность",
      levelRequirment: 17,
      iconSource: "",
      modificator: 2,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "injector",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Игроки воскрешенные вами также получают +6 к восстановлению очков действий на 10 минут";
        }

        if (stars === 2) {
          return "Игроки воскрешенные вами также получают +12 к восстановлению очков действий на 10 минут";
        }

        if (stars === 3) {
          return "Игроки воскрешенные вами также получают +18 к восстановлению очков действий на 10 минут";
        }

        return "";
      },
      title: "Инъектор",
      levelRequirment: 19,
      iconSource: "",
      modificator: 6,
      modificatorStep: 6,
      selectedStars: 0,
    },
    {
      perkId: "teamMedic",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Применение вами стимпаков также подлечивает членов вашей команды на 50% от их силы";
        }

        if (stars === 2) {
          return "Применение вами стимпаков также подлечивает членов вашей команды на 75% от их силы";
        }

        if (stars === 3) {
          return "Применение вами стимпаков также подлечивает членов вашей команды на 100% от их силы";
        }

        return "";
      },
      title: "Командный медик",
      levelRequirment: 20,
      iconSource: "",
      modificator: 50,
      modificatorStep: 25,
      selectedStars: 0,
    },
    {
      perkId: "quackSurgeon",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы можете воскрешать напарников алкоголем";
        }

        return "";
      },
      title: "Хирург-шарлатан",
      levelRequirment: 22,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "partyBoyGirl",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Позитивные эффекты от довоенного алкоголя увеличены вдвое";
        }

        if (stars === 2) {
          return "Позитивные эффекты от довоенного алкоголя увеличены втрое";
        }

        return "";
      },
      title: "Тусовщик",
      levelRequirment: 24,
      iconSource: "",
      modificator: 2,
      modificatorStep: 1,
      selectedStars: 0,
      initialCost: 2,
    },
    {
      perkId: "travelAgent",
      cost: 1,
      totalAmountOfStars: 1,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Быстро передвижение обходится вам на 30% дешевле";
        }

        return "";
      },
      title: "Турагент",
      levelRequirment: 26,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "healingHands",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Игроки воскрешенные вами излечиваются полностью от радиации";
        }

        return "";
      },
      title: "Лечащие руки",
      levelRequirment: 28,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "animalFriend",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "В режиме прицеливания вы получаете возможность приручить животное меньше вас уровнем с 25% шансом";
        }

        if (stars === 2) {
          return "В режиме прицеливания вы получаете возможность приручить животное меньше вас уровнем с 50% шансом";
        }

        if (stars === 3) {
          return "В режиме прицеливания вы получаете возможность приручить животное меньше вас уровнем с 75% шансом";
        }

        return "";
      },
      title: "Друг животных",
      levelRequirment: 30,
      iconSource: "",
      modificator: 25,
      modificatorStep: 25,
      selectedStars: 0,
    },
    {
      perkId: "overlyGenerous",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Будучи облученным, ваши атаки ближнего боя могут с некоторым шансом нанести 25 урона радиацией противнику";
        }

        if (stars === 2) {
          return "Будучи облученным, ваши атаки ближнего боя могут с некоторым шансом нанести 50 урона радиацией противнику";
        }

        return "";
      },
      title: "Излишне щедрый",
      levelRequirment: 32,
      iconSource: "",
      modificator: 25,
      modificatorStep: 25,
      selectedStars: 0,
    },
    {
      perkId: "antiEpidemic",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Когда вы излечиваетесь от болезней, есть 50% шанс излечить близлежайших соратников в группе";
        }

        if (stars === 2) {
          return "Когда вы излечиваетесь от болезней, вы всегда излечиваете близлежайших соратников в группе";
        }

        return "";
      },
      title: "Борьба с эпидемией",
      levelRequirment: 34,
      iconSource: "",
      modificator: 50,
      modificatorStep: 50,
      selectedStars: 0,
    },
    {
      perkId: "spiritualHealer",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы восстанавливаете здоровье в течение 5 секунд после воскрешения другого игрока";
        }

        if (stars === 2) {
          return "Вы восстанавливаете здоровье в течение 7 секунд после воскрешения другого игрока";
        }

        if (stars === 3) {
          return "Вы восстанавливаете здоровье в течение 10 секунд после воскрешения другого игрока";
        }

        return "";
      },
      title: "Духовный целитель",
      levelRequirment: 36,
      iconSource: "",
      modificator: 5,
      modificatorStep: 2,
      selectedStars: 0,
    },
    {
      perkId: "squadManuevers",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы передвигаетесь на 10% быстрее, когда вы находитесь в команде";
        }

        if (stars === 2) {
          return "Вы передвигаетесь на 20% быстрее, когда вы находитесь в команде";
        }

        return "";
      },
      title: "Отрядные манёвры",
      levelRequirment: 37,
      iconSource: "",
      modificator: 10,
      modificatorStep: 10,
      selectedStars: 0,
    },
    {
      perkId: "philanthropist",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Употребляя напитки или еду вы также немного утоляете жажду или голод напарников в команде";
        }

        if (stars === 2) {
          return "Употребляя напитки или еду вы также утоляете жажду или голод напарников в команде";
        }

        if (stars === 3) {
          return "Употребляя напитки или еду вы также значительно утоляете жажду или голод напарников в команде";
        }

        return "";
      },
      title: "Филантроп",
      levelRequirment: 39,
      iconSource: "",
      modificator: 10,
      modificatorStep: 10,
      selectedStars: 0,
    },
    {
      perkId: "suppressor",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши цели наносят на 10% меньше урона после ваших атак";
        }

        if (stars === 2) {
          return "Ваши цели наносят на 20% меньше урона после ваших атак";
        }

        if (stars === 3) {
          return "Ваши цели наносят на 30% меньше урона после ваших атак";
        }

        return "";
      },
      title: "Глушитель",
      levelRequirment: 40,
      iconSource: "",
      modificator: 10,
      modificatorStep: 10,
      selectedStars: 0,
    },
    {
      perkId: "strangeInNumbers",
      cost: 1,
      totalAmountOfStars: 1,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Положительные эффекты мутаций на 25% сильнее, если союзники в команде также имеют мутации";
        }

        return "";
      },
      title: "Толпа странных",
      levelRequirment: 42,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "radSponge",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Будучи облученным, периодически вы будете выводить из организмов ближайших союзников 80 единиц радиации";
        }

        if (stars === 2) {
          return "Будучи облученным, периодически вы будете выводить из организмов ближайших союзников 140 единиц радиации";
        }

        if (stars === 3) {
          return "Будучи облученным, периодически вы будете выводить из организмов ближайших союзников 200 единиц радиации";
        }

        return "";
      },
      title: "Поглотитель радиации",
      levelRequirment: 44,
      iconSource: "",
      modificator: 80,
      modificatorStep: 60,
      selectedStars: 0,
    },
    {
      perkId: "tenderizer",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши цели получают на 5% больше урона в течение 5 секунд после вашей атаки";
        }

        if (stars === 2) {
          return "Ваши цели получают на 7% больше урона в течение 7 секунд после вашей атаки";
        }

        if (stars === 3) {
          return "Ваши цели получают на 10% больше урона в течение 10 секунд после вашей атаки";
        }

        return "";
      },
      title: "Отбивной молоток",
      levelRequirment: 46,
      iconSource: "",
      modificator: 5,
      modificatorStep: 2,
      sideModificator: 5,
      sideModificatorStep: 2,
      selectedStars: 0,
    },
    {
      perkId: "friendlyFire",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Союзники которых вы задеваете огненным оружием (не включая коктейли молотова), восстанавливают 6 ед. здоровья в течение 2 секунд";
        }

        if (stars === 2) {
          return "Союзники которых вы задеваете огненным оружием (не включая коктейли молотова), восстанавливают 9 ед. здоровья в течение 2 секунд";
        }

        if (stars === 3) {
          return "Союзники которых вы задеваете огненным оружием (не включая коктейли молотова), восстанавливают 12 ед. здоровья в течение 2 секунд";
        }

        return "";
      },
      title: "Дружественный огонь",
      levelRequirment: 48,
      iconSource: "",
      modificator: 6,
      modificatorStep: 3,
      selectedStars: 0,
    },
    {
      perkId: "wastelandWhisperer",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "В режиме прицеливания вы получаете возможность приручить любое существо меньше вас уровнем с 25% шансом",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "В режиме прицеливания вы получаете возможность приручить любое существо меньше вас уровнем с 25% шансом";
        }

        if (stars === 2) {
          return "В режиме прицеливания вы получаете возможность приручить любое существо меньше вас уровнем с 50% шансом";
        }

        if (stars === 3) {
          return "В режиме прицеливания вы получаете возможность приручить любое существо меньше вас уровнем с 75% шансом";
        }

        return "";
      },
      title: "Говорящий с пустошью",
      levelRequirment: 50,
      iconSource: "",
      modificator: 25,
      modificatorStep: 25,
      selectedStars: 0,
    },
  ],
  type: SPECIALS.CHARISMA,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}));

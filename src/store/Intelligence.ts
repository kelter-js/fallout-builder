import { create } from "zustand";

import { DEFAULT_AMOUNT_OF_STARS } from "./constants";
import { SPECIALS } from "../entities/Specials";
import { PerkStoreData } from "../types/Perk";

export const useIntelligenceStore = create<PerkStoreData>((set) => ({
  perkList: [
    {
      perkId: "firstAid",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши стимпаки восполняют вам больше здоровья в зависимости от интеллекта";
        }

        return "";
      },
      title: "Первая помощь",
      levelRequirment: 2,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_First_Aid.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 0,
    },
    {
      perkId: "hacker",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +1 к навыку взлома, время блокировки терминалов уменьшено на 33%";
        }

        return "";
      },
      title: "Хакер",
      levelRequirment: 4,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Hacker.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 1,
    },
    {
      perkId: "licensedPlumber",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваше гладкоствольное оружие ломается на 20% медленнее и на 20% дешевле поддаётся ремонту";
        }
        if (stars === 2) {
          return "Ваше гладкоствольное оружие ломается на 40% медленнее и на 40% дешевле поддаётся ремонту";
        }
        if (stars === 3) {
          return "Ваше гладкоствольное оружие ломается на 60% медленнее и на 60% дешевле поддаётся ремонту";
        }

        return "";
      },

      title: "Лицензированный водопроводчик",
      levelRequirment: 5,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Licensed_Plumber.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 2,
    },
    {
      perkId: "pharmacist",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Антирадин выводит больше радиации в зависимости от вашего интеллекта";
        }

        return "";
      },

      title: "Фармацевт",
      levelRequirment: 6,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Pharmacist.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 3,
    },
    {
      perkId: "makeshiftWarrior",
      cost: 1,
      totalAmountOfStars: 5,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Оружие ближнего боя ломается на 20% медленнее, вы получаете возможность создавать оружие ближнего боя 1 тира";
        }
        if (stars === 2) {
          return "Оружие ближнего боя ломается на 35% медленнее, вы получаете возможность создавать оружие ближнего боя 2 тира";
        }
        if (stars === 3) {
          return "Оружие ближнего боя ломается на 50% медленнее, вы получаете возможность создавать оружие ближнего боя 3 тира";
        }
        if (stars === 4) {
          return "Оружие ближнего боя ломается на 65% медленнее, вы получаете возможность создавать оружие ближнего боя 4 тира";
        }
        if (stars === 5) {
          return "Оружие ближнего боя ломается на 80% медленнее, вы получаете возможность создавать оружие ближнего боя 5 тира";
        }

        return "";
      },
      title: "Самодельный воин",
      levelRequirment: 9,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Makeshift_Warrior.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 4,
    },
    {
      perkId: "demolitionExpert",
      cost: 1,
      totalAmountOfStars: 5,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваше взрывное оружие наносит на 20% больше урона";
        }
        if (stars === 2) {
          return "Ваше взрывное оружие наносит на 30% больше урона";
        }
        if (stars === 3) {
          return "Ваше взрывное оружие наносит на 40% больше урона";
        }
        if (stars === 4) {
          return "Ваше взрывное оружие наносит на 50% больше урона";
        }
        if (stars === 5) {
          return "Ваше взрывное оружие наносит на 60% больше урона";
        }

        return "";
      },
      title: "Эксперт-подрывник",
      levelRequirment: 10,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Demolition_Expert.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 5,
    },
    {
      perkId: "gunsmith",
      cost: 1,
      totalAmountOfStars: 5,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Огнестрельное оружие ломается на 10% медленнее, вы получаете возможность создавать огнестрельное оружие 1 тира";
        }
        if (stars === 2) {
          return "Огнестрельное оружие ломается на 20% медленнее, вы получаете возможность создавать огнестрельное оружие 2 тира";
        }
        if (stars === 3) {
          return "Огнестрельное оружие ломается на 30% медленнее, вы получаете возможность создавать огнестрельное оружие 3 тира";
        }
        if (stars === 4) {
          return "Огнестрельное оружие ломается на 40% медленнее, вы получаете возможность создавать огнестрельное оружие 4 тира";
        }
        if (stars === 5) {
          return "Огнестрельное оружие ломается на 50% медленнее, вы получаете возможность создавать огнестрельное оружие 5 тира";
        }

        return "";
      },
      title: "Оружейник",
      levelRequirment: 10,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Gunsmith.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 6,
    },
    {
      perkId: "scrapper",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете больше хлама при разборе брони и оружия";
        }

        return "";
      },
      title: "Драчун",
      levelRequirment: 13,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Scrapper.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 7,
    },
    {
      perkId: "armorer",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы можете создавать улучшенные модификации для брони";
        }

        if (stars === 2) {
          return "Вы можете создавать улучшенные модификации для брони, создание брони обходится дешевле";
        }

        if (stars === 3) {
          return "Вы можете создавать улучшенные модификации для брони, создание брони обходится дешевле, созданная броня имеет улучшенную прочность";
        }

        return "";
      },
      title: "Бронник",
      levelRequirment: 15,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Armorer.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 8,
    },
    {
      perkId: "contractor",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Строительство объектов CAMP обходится дешевле на 25%";
        }

        if (stars === 2) {
          return "Строительство объектов CAMP обходится дешевле на 50%";
        }

        return "";
      },
      title: "Подрядчик",
      levelRequirment: 18,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Contractor.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 9,
    },
    {
      perkId: "science",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы можете создавать энергетическое оружие, +5% к урону энергетическим оружием";
        }

        if (stars === 2) {
          return "Вы можете создавать моды для энергетического оружия, +10% к урону энергетическим оружием";
        }

        return "";
      },

      title: "Наука",
      levelRequirment: 20,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Science.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 10,
    },
    {
      perkId: "expertHacker",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +1 к навыку взлома, время блокировки терминалов уменьшено на 33%";
        }

        return "";
      },
      title: "Эксперт-Хакер",
      levelRequirment: 22,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Expert_Hacker.png`,

      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 11,
    },
    {
      perkId: "portablePower",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Шасси для силовой брони и все ее части весят на 25% меньше";
        }
        if (stars === 2) {
          return "Шасси для силовой брони и все ее части весят на 50% меньше";
        }
        if (stars === 3) {
          return "Шасси для силовой брони и все ее части весят на 75% меньше";
        }

        return "";
      },
      title: "Переносная сила",
      levelRequirment: 24,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Portable_Power.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 12,
    },
    {
      perkId: "fixItGood",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы можете отремонтировать части силовой брони на 130% от их изначальной прочности";
        }
        if (stars === 2) {
          return "Вы можете отремонтировать части силовой брони на 160% от их изначальной прочности";
        }
        if (stars === 3) {
          return "Вы можете отремонтировать части силовой брони на 200% от их изначальной прочности";
        }

        return "";
      },

      title: "Хороший ремонтник",

      levelRequirment: 27,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Fix_It_Good.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 13,
    },
    {
      perkId: "batteriesIncluded",
      cost: 1,
      totalAmountOfStars: 2,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Аммуниция для энергетического оружия весит на 45% меньше";
        }
        if (stars === 2) {
          return "Аммуниция для энергетического оружия весит на 90% меньше";
        }

        return "";
      },
      title: "Батареи прилагаются",
      levelRequirment: 28,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Batteries_Included.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 14,
    },
    {
      perkId: "wreckingBall",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы наносите на 40% больше урона объектам построек CAMP";
        }
        if (stars === 2) {
          return "Вы наносите на 80% больше урона объектам построек CAMP";
        }
        if (stars === 3) {
          return "Вы наносите на 120% больше урона объектам построек CAMP";
        }

        return "";
      },
      title: "Шаровой таран",
      levelRequirment: 29,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Wrecking_ball.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 15,
    },
    {
      perkId: "scienceExpert",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы можете создавать эн. оружие 2 тира и энергетическое оружие наносит на 5% больше урона";
        }
        if (stars === 2) {
          return "Создание энергетического оружия обходится вам дешевле, энергетическое оружие наносит на 10% больше урона";
        }

        return "";
      },
      title: "Ученый эксперт",
      levelRequirment: 30,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Science_Expert.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 16,
    },
    {
      perkId: "chemist",
      cost: 1,
      totalAmountOfStars: 1,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы изготавливаете вдвое больше препаратов";
        }

        return "";
      },
      title: "Химик",
      levelRequirment: 34,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Chemist.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 17,
    },
    {
      perkId: "stabilized",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Находясь в силовой броне, ваше тяжелое оружие получает +15% к точности и игнорирует 15% брони противника";
        }

        if (stars === 2) {
          return "Находясь в силовой броне, ваше тяжелое оружие получает +30% к точности и игнорирует 30% брони противника";
        }

        if (stars === 3) {
          return "Находясь в силовой броне, ваше тяжелое оружие получает +45% к точности и игнорирует 45% брони противника";
        }

        return "";
      },
      title: "Стабилизация",
      levelRequirment: 36,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Stabilized.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 18,
    },
    {
      perkId: "masterHacker",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +1 к навыку взлома, время блокировки терминалов уменьшено на 33%";
        }

        return "";
      },
      title: "Мастер Хакер",
      levelRequirment: 38,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Master_Hacker.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 19,
    },
    {
      perkId: "stableTools",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Автоматическое оружие ближнего боя ломается на 10% медленнее";
        }

        if (stars === 2) {
          return "Автоматическое оружие ближнего боя ломается на 25% медленнее";
        }

        if (stars === 3) {
          return "Автоматическое оружие ближнего боя ломается на 40% медленнее";
        }

        return "";
      },
      title: "Стабильные инструменты",
      levelRequirment: 39,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Stable_Tools.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 20,
    },
    {
      perkId: "scienceMaster",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы можете создавать эн. оружие 3 тира и энергетическое оружие наносит на 5% больше урона";
        }
        if (stars === 2) {
          return "Созданное оружие имеет улучшенный запас прочности, энергетическое оружие наносит на 10% больше урона";
        }

        return "";
      },

      title: "Ученый мастер",
      levelRequirment: 40,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Science_Master.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 21,
    },
    {
      perkId: "weaponArtisan",
      cost: 1,
      totalAmountOfStars: 3,

      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы можете отремонтировать любое оружие на 130% от его изначального запаса прочности";
        }
        if (stars === 2) {
          return "Вы можете отремонтировать любое оружие на 160% от его изначального запаса прочности";
        }
        if (stars === 3) {
          return "Вы можете отремонтировать любое оружие на 200% от его изначального запаса прочности";
        }

        return "";
      },
      title: "Мастер-оружейник",
      levelRequirment: 40,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Weapon_Artisan.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 22,
    },
    {
      perkId: "powerSmith",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы можете создавать модификаторы для силовой брони (при наличии схем)";
        }

        if (stars === 2) {
          return "Создание силовой брони стоит дешевле (включая предыдущие бонусы)";
        }

        if (stars === 3) {
          return "Вы можете создавать улучшенные модификации для брони, создание брони обходится дешевле, созданная броня имеет улучшенную прочность (включая предыдущие бонусы)";
        }

        return "";
      },
      title: "Кузнец силовой брони",
      levelRequirment: 41,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Power_Smith.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 23,
    },
    {
      perkId: "powerPatcher",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваша силовая броня ломается на 20% медленнее, ее починка обходится вам дешевле";
        }

        if (stars === 2) {
          return "Ваша силовая броня ломается на 40% медленнее, ее починка обходится вам еще дешевле";
        }

        if (stars === 3) {
          return "Ваша силовая броня ломается на 60% медленнее, ее починка обходится вам значительно дешевле";
        }

        return "";
      },
      title: "Силовая заплатка",
      levelRequirment: 44,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Power_Patcher.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 24,
    },
    {
      perkId: "nerdRage",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Когда ваше здоровье меньше 20%, вы  получаете +20 сопротивлению урону, +10% к урону и 15% скорости регенерации очков действия";
        }

        if (stars === 2) {
          return "Когда ваше здоровье меньше 20%, вы  получаете +30 сопротивлению урону, +15% к урону и 15% скорости регенерации очков действия";
        }

        if (stars === 3) {
          return "Когда ваше здоровье меньше 20%, вы  получаете +40 сопротивлению урону, +20% к урону и 15% скорости регенерации очков действия";
        }

        return "";
      },
      title: "Ярость ботаника",
      levelRequirment: 46,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Nerd_Rage.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 25,
    },
    {
      perkId: "roboticsExpert",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Взломав робота, с 25% шансом вы можете сделать его нейтральным по отношению к вам";
        }

        if (stars === 2) {
          return "Взломав робота, с 50% шансом вы можете сделать его нейтральным по отношению к вам";
        }

        if (stars === 3) {
          return "Взломав робота, с 75% шансом вы можете сделать его нейтральным по отношению к вам";
        }

        return "";
      },
      title: "Эксперт по роботехнике",
      levelRequirment: 48,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Robotics_Expert.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 26,
    },
    {
      perkId: "powerUser",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Длительность работы ядерных блоков увеличена на 30%";
        }

        if (stars === 2) {
          return "Длительность работы ядерных блоков увеличена на 60%";
        }

        if (stars === 3) {
          return "Длительность работы ядерных блоков увеличена вдвое";
        }

        return "";
      },
      title: "Потребитель энергии",
      levelRequirment: 50,
      iconSource: `${process.env.PUBLIC_URL}/assets/intelligence/FO76_Power_User.png`,
      selectedStars: 1,
      type: SPECIALS.INTELLIGENCE,
      order: 27,
    },
  ],
  type: SPECIALS.INTELLIGENCE,
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

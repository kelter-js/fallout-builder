import { makeAutoObservable } from "mobx";

import { IPerk } from "../entities/Perk";

class Intelligence {
  perkList: IPerk[] = [
    {
      perkId: "firstAid",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Ваши стимпаки восполняют вам на 15% больше здоровья",
      title: "Первая помощь",
      levelRequirment: 2,
      iconSource: "",
      modificator: 15,
      modificatorStep: 15,
      selectedStars: 0,
    },
    {
      perkId: "hacker",
      cost: 1,
      totalAmountOfStars: 1,
      description:
        "Вы получаете +1 к навыку взлома, время блокировки терминалов уменьшено на 33%",
      title: "Хакер",
      levelRequirment: 4,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      sideModificator: 33,
      sideModificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "licensedPlumber",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Ваше гладкоствольное оружие ломается на 20% медленнее и на 20% дешевле поддаётся ремонту",
      title: "Лицензированный водопроводчик",
      levelRequirment: 5,
      iconSource: "",
      modificator: 20,
      modificatorStep: 20,
      selectedStars: 0,
    },
    {
      perkId: "pharmacist",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Антирадин выводит на 30% больше радиации",
      title: "Фармацевт",
      levelRequirment: 6,
      iconSource: "",
      modificator: 30,
      modificatorStep: 30,
      getCustomDescription: "Антирадины выводят вдвое больше радиации",
      selectedStars: 0,
    },
    {
      perkId: "makeshiftWarrior",
      cost: 1,
      totalAmountOfStars: 5,
      description:
        "Оружие ближнего боя ломается на 10% медленнее, вы получаете возможность создавать оружие ближнего боя 1 тира",
      title: "Самодельный воин",
      levelRequirment: 9,
      iconSource: "",
      modificator: 10,
      modificatorStep: 10,
      sideModificator: 1,
      sideModificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "demolitionExpert",
      cost: 1,
      totalAmountOfStars: 5,
      description: "Ваше взрывное оружие наносит на 20% больше урона",
      title: "Эксперт-подрывник",
      levelRequirment: 10,
      iconSource: "",
      modificator: 20,
      modificatorStep: 10,
      selectedStars: 0,
    },
    {
      perkId: "gunsmith",
      cost: 1,
      totalAmountOfStars: 5,
      description:
        "Огнестрельное оружие ломается на 10% медленнее, вы получаете возможность создавать огнестрельное оружие 1 тира",
      title: "Оружейник",
      levelRequirment: 10,
      iconSource: "",
      modificator: 10,
      modificatorStep: 10,
      sideModificator: 1,
      sideModificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "scrapper",
      cost: 1,
      totalAmountOfStars: 1,
      description: "Вы получаете больше хлама при разборе брони и оружия",
      title: "Драчун",
      levelRequirment: 13,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "armorer",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Вы можете создавать улучшенные модификации для брони",
      title: "Бронник",
      levelRequirment: 15,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
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
    },
    {
      perkId: "contractor",
      cost: 1,
      totalAmountOfStars: 2,
      description: "Строительство объектов CAMP обходится дешевле на 25%",
      title: "Подрядчик",
      levelRequirment: 18,
      iconSource: "",
      modificator: 25,
      modificatorStep: 25,
      selectedStars: 0,
    },
    {
      perkId: "science",
      cost: 1,
      totalAmountOfStars: 2,
      description:
        "Вы можете создавать энергетическое оружие, +5% к урону энергетическим оружием",
      getCustomDescription:
        "Вы можете создавать моды для энергетического оружия, +10% к урону энергетическим оружием",
      title: "Наука",
      levelRequirment: 20,
      iconSource: "",
      modificator: 5,
      modificatorStep: 5,
      selectedStars: 0,
    },
    {
      perkId: "expertHacker",
      cost: 1,
      totalAmountOfStars: 1,
      description:
        "Вы получаете +1 к навыку взлома, время блокировки терминалов уменьшено на 33%",
      title: "Эксперт-Хакер",
      levelRequirment: 22,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      sideModificator: 33,
      sideModificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "portablePower",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Шасси для силовой брони и все ее части весят на 25% меньше",
      title: "Переносная сила",
      levelRequirment: 24,
      iconSource: "",
      modificator: 25,
      modificatorStep: 25,
      selectedStars: 0,
    },
    {
      perkId: "fixItGood",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Вы можете отремонтировать части силовой брони на 130% от их изначальной прочности",
      title: "Хороший ремонтник",
      getCustomDescription:
        "Вы можете отремонтировать части силовой брони на 200% от их изначальной прочности",
      levelRequirment: 27,
      iconSource: "",
      modificator: 30,
      modificatorStep: 30,
      selectedStars: 0,
    },
    {
      perkId: "batteriesIncluded",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Аммуниция для энергетического оружия весит на 30% меньше",
      title: "Батареи прилагаются",
      levelRequirment: 28,
      iconSource: "",
      modificator: 30,
      modificatorStep: 30,
      selectedStars: 0,
    },
    {
      perkId: "wreckingBall",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Вы наносите на 40% больше урона объектам построек CAMP",
      title: "Шаровой таран",
      levelRequirment: 29,
      iconSource: "",
      modificator: 40,
      modificatorStep: 40,
      selectedStars: 0,
    },
    {
      perkId: "scienceExpert",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Ваше энергетическое оружие наносит на 5% больше урона",
      title: "Ученый эксперт",
      levelRequirment: 30,
      iconSource: "",
      modificator: 5,
      modificatorStep: 5,
      selectedStars: 0,
    },
    {
      perkId: "chemist",
      cost: 1,
      totalAmountOfStars: 1,
      description: "Вы изготавливаете вдвое больше препаратов",
      title: "Химик",
      levelRequirment: 34,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "stabilized",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Находясь в силовой броне, ваше тяжелое оружие получает +15% к точности и игнорирует 15% брони противника",
      title: "Стабилизация",
      levelRequirment: 36,
      iconSource: "",
      modificator: 15,
      modificatorStep: 15,
      selectedStars: 0,
    },
    {
      perkId: "masterHacker",
      cost: 1,
      totalAmountOfStars: 1,
      description:
        "Вы получаете +1 к навыку взлома, время блокировки терминалов уменьшено на 33%",
      title: "Мастер Хакер",
      levelRequirment: 38,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      sideModificator: 33,
      sideModificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "stableTools",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Автоматическое оружие ближнего боя ломается на 10% медленнее",
      title: "Стабильные инструменты",
      levelRequirment: 39,
      iconSource: "",
      modificator: 10,
      modificatorStep: 15,
      selectedStars: 0,
    },
    {
      perkId: "scienceMaster",
      cost: 1,
      totalAmountOfStars: 2,
      description: "Ваше энергетическое оружие наносит на 5% больше урона",
      title: "Ученый мастер",
      levelRequirment: 40,
      iconSource: "",
      modificator: 5,
      modificatorStep: 5,
      selectedStars: 0,
    },
    {
      perkId: "weaponArtisan",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Вы можете отремонтировать состояние оружия на 30% больше, от его максимального состояния",
      getCustomDescription:
        "Вы можете отремонтировать состояние оружия на 100% больше, от его максимального состояния",
      title: "Мастер-оружейник",
      levelRequirment: 40,
      iconSource: "",
      modificator: 30,
      modificatorStep: 30,
      selectedStars: 0,
    },
    {
      perkId: "powerSmith",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Вы можете создавать модификаторы для силовой брони (при наличии схем)",
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
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "powerPatcher",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Ваша силовая броня ломается на 20% медленнее",
      title: "Силовая заплатка",
      levelRequirment: 44,
      iconSource: "",
      modificator: 20,
      modificatorStep: 20,
      selectedStars: 0,
    },
    {
      perkId: "nerdRage",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Когда ваше здоровье меньше 20%, вы  получаете +20 сопротивлению урону, +10% к урону и 15% скорости регенерации очков действия",
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
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "roboticsExpert",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Взломав робота, с 25% шансом вы можете сделать его нейтральным по отношению к вам",
      title: "Эксперт по роботехнике",
      levelRequirment: 48,
      iconSource: "",
      modificator: 25,
      modificatorStep: 25,
      selectedStars: 0,
    },
    {
      perkId: "powerUser",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Длительность работы ядерных блоков увеличена на 30%",
      getCustomDescription:
        "Длительность работы ядерных блоков увеличена вдвое",
      title: "Потребитель энергии",
      levelRequirment: 50,
      iconSource: "",
      modificator: 30,
      modificatorStep: 30,
      selectedStars: 0,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Intelligence();

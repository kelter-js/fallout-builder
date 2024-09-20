import { makeAutoObservable } from "mobx";

import { IPerk } from "../entities/Perk";

class Luck {
  perkList: IPerk[] = [
    {
      perkId: "pharmaFarma",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Вы с вероятностью в 40% чаще находите препараты в химических контейнерах",
      title: "Арктос фарма",
      levelRequirment: 2,
      iconSource: "",
      modificator: 40,
      modificatorStep: 20,
      selectedStars: 0,
    },
    {
      perkId: "scrounger",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Вы с вероятностью в 40% чаще находите патроны в контейнерах с аммуницией",
      title: "Халявщик",
      levelRequirment: 3,
      iconSource: "",
      modificator: 40,
      modificatorStep: 20,
      selectedStars: 0,
    },
    {
      perkId: "serendipity",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Когда ваше здоровье меньше 30%, вы получаете 15% шанс избежать получение урона",
      title: "Приятная неожиданность",
      levelRequirment: 5,
      iconSource: "",
      modificator: 15,
      modificatorStep: 15,
      selectedStars: 0,
    },
    {
      perkId: "canDo",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Вы с вероятностью в 40% чаще находите консервы в контейнерах с едой",
      title: "Это можно!",
      levelRequirment: 7,
      iconSource: "",
      modificator: 40,
      modificatorStep: 20,
      selectedStars: 0,
    },
    {
      perkId: "goodWithSalt",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Еда в вашем инвентаре портиться на 30% медленнее",
      title: "Хорошо идёт с солью",
      levelRequirment: 9,
      iconSource: "",
      modificator: 30,
      modificatorStep: 30,
      selectedStars: 0,
    },
    {
      perkId: "junkShield",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Если в вашем инвентаре есть хлам, вы получаете +10 к сопротивлению обычному и энергетическому урону(без силовой брони)",
      title: "Щит из хлама",
      levelRequirment: 10,
      iconSource: "",
      modificator: 10,
      modificatorStep: 10,
      selectedStars: 0,
    },
    {
      perkId: "mysteryMeat",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "При использовании стимпаков вы можете с 10% шансом создать съедобную мышечную ткань. Шанс увеличивается в зависимости от уровня заражения радиацией",
      title: "Таинственное мясо",
      levelRequirment: 12,
      iconSource: "",
      modificator: 20,
      modificatorStep: 10,
      selectedStars: 0,
    },
    {
      perkId: "luckOfTheDraw",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "С небольшой вероятностью, ваше оружие само по себе починится, когда вы атакуете противников",
      title: "Чистая случайность",
      levelRequirment: 14,
      iconSource: "",
      modificator: 25,
      modificatorStep: 25,
      selectedStars: 0,
    },
    {
      perkId: "capCollector",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Вы находите на 33% больше крышек в тайниках",
      title: "Коллекционер крышек",
      levelRequirment: 16,
      iconSource: "",
      modificator: 33,
      modificatorStep: 33,
      getCustomDescription: "Вы находите вдвое больше крышек в тайниках",
      selectedStars: 0,
    },
    {
      perkId: "woodchucker",
      cost: 1,
      totalAmountOfStars: 1,
      description: "Вы добываете вдвое больше дерева при его сборе",
      title: "Дровосек",
      levelRequirment: 17,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "curator",
      cost: 1,
      totalAmountOfStars: 1,
      description: "Бонусы от журналов и пупсов действуют вдвое дольше",
      title: "Куратор",
      levelRequirment: 19,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "psychopath",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Каждое убийство в режиме VATS имеет 5% шанс полного заполнения шкалы критического урона",
      title: "Психопат",
      levelRequirment: 20,
      iconSource: "",
      modificator: 5,
      modificatorStep: 5,
      selectedStars: 0,
    },
    {
      perkId: "dryNurse",
      cost: 1,
      totalAmountOfStars: 1,
      description:
        "С вероятностью в 50% вы не истратите стимулятора при воскрешении другого игрока",
      title: "Сиделка",
      levelRequirment: 23,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "luckyBreak",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "С небольшой вероятностью ваша броня сама по себе починится при попадании по вам",
      title: "Счастливый случай",
      levelRequirment: 24,
      iconSource: "",
      modificator: 30,
      modificatorStep: 30,
      selectedStars: 0,
    },
    {
      perkId: "mysteriousStranger",
      cost: 1,
      totalAmountOfStars: 3,
      description: "К вам на помощь в режиме VATS приходит незнакомец",
      getDescriptionBasedOnStars: (stars) => {
        if (stars === 1) {
          return "К вам на помощь в режиме VATS иногда приходит незнакомец";
        }

        if (stars === 2) {
          return "К вам на помощь в режиме VATS часто приходит незнакомец";
        }

        if (stars === 3) {
          return "К вам на помощь в режиме VATS постоянно приходит незнакомец, он знает вас по имени";
        }

        return "К вам на помощь в режиме VATS иногда приходит незнакомец";
      },
      title: "Загадочный незнакомец",
      levelRequirment: 26,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "lastLaugh",
      cost: 1,
      totalAmountOfStars: 1,
      description: "При смерти вы выбрасываете гранату из инвентаря",
      title: "Хорошо смеется тот, кто смеется последним",
      levelRequirment: 27,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "fourLeafClover",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Каждое попадаение в режиме ватс имеет шанс заполнить шкалу критического урона",
      getDescriptionBasedOnStars: (stars) => {
        if (stars === 1) {
          return "Каждое попадаение в режиме ватс имеет шанс заполнить шкалу критического урона";
        }

        if (stars === 2) {
          return "Каждое попадаение в режиме ватс имеет средний шанс заполнить шкалу критического урона";
        }

        if (stars === 3) {
          return "Каждое попадаение в режиме ватс имеет большой шанс заполнить шкалу критического урона";
        }

        return "Каждое попадаение в режиме ватс имеет шанс заполнить шкалу критического урона";
      },
      title: "Клевер-четырехлистник",
      levelRequirment: 29,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "starchedGenes",
      cost: 1,
      totalAmountOfStars: 2,
      description:
        "Шансы на получение новой мутации из-за радиации или излечение от мутаций антирадином уменьшены",
      getCustomDescription:
        "Вы не можете мутировать под действием радиации или излечиваться от мутаций при употреблении антирадинов",
      title: "Гениальные гены",
      levelRequirment: 30,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "oneGunArmy",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Ваше тяжелое оружие получает 4% шанс ошеломить противника и 4% шанс повредить его конечность",
      title: "Армия из одного стрелка",
      levelRequirment: 31,
      iconSource: "",
      modificator: 4,
      modificatorStep: 4,
      sideModificator: 4,
      sideModificatorStep: 4,
      selectedStars: 0,
    },
    {
      perkId: "grimReapersSprint",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Каждое убийство в режме VATS имеет 15% шанс восстановить все очки действия",
      title: "Угрюмый жнец",
      levelRequirment: 33,
      iconSource: "",
      modificator: 15,
      modificatorStep: 10,
      selectedStars: 0,
    },
    {
      perkId: "stormChaser",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Вы восстанавливаете здоровье находясь снаружи во время дождя или рад-шторма",
      getCustomDescription:
        "Вы восстанавливаете больше здоровье находясь снаружи во время дождя или рад-шторма",
      title: "Охотник за штормами",
      levelRequirment: 35,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "tormentor",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Ваши выстрелы из карабина с вероятностью в 5% для неавтоматического и 2% для автоматического - ломают противникам конечности",
      title: "Мучитель",
      levelRequirment: 37,
      iconSource: "",
      modificator: 5,
      modificatorStep: 5,
      sideModificator: 2,
      sideModificatorStep: 2,
      selectedStars: 0,
    },
    {
      perkId: "ricochet",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Вы получаете 6% шанс вернуть урон противнику от его дальних атак(не в пвп режиме)",
      title: "Рикошет",
      levelRequirment: 38,
      iconSource: "",
      modificator: 6,
      modificatorStep: 6,
      selectedStars: 0,
    },
    {
      perkId: "quickHands",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Вы получаете 6% шанс мгновенно перезарядить оружие как только ваш магазин опустеет",
      title: "Ловкость рук",
      levelRequirment: 40,
      iconSource: "",
      modificator: 6,
      modificatorStep: 6,
      selectedStars: 0,
    },
    {
      perkId: "bloodyMess",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Вы получаете 5% к урону, ваши противники с некоторым шансом могут взорваться кровавой кашей",
      title: "Кровавая баня",
      levelRequirment: 42,
      iconSource: "",
      modificator: 5,
      modificatorStep: 5,
      selectedStars: 0,
    },
    {
      perkId: "criticalSavvy",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Ваши критические удары теперь потребляют только ${100 - 15}% от шкалы критического урона",
      title: "Критическое мышление",
      levelRequirment: 44,
      iconSource: "",
      modificator: 15,
      modificatorStep: 15,
      selectedStars: 0,
    },
    {
      perkId: "classFreak",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Негативные эффекты от мутаций уменьшены на 25%",
      title: "Местный уродец",
      levelRequirment: 46,
      iconSource: "",
      modificator: 25,
      modificatorStep: 25,
      selectedStars: 0,
    },
    {
      perkId: "betterCriticals",
      cost: 1,
      totalAmountOfStars: 3,
      description: "Критические атаки в VATS наносят на 50% больше урона",
      title: "Повышенный критический урон",
      levelRequirment: 47,
      iconSource: "",
      modificator: 50,
      modificatorStep: 25,
      selectedStars: 0,
    },
    {
      perkId: "mysteriousSavior",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Мистический спаситель может появиться и воскресить вас, когда вы без сознания.",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Мистический спаситель может появиться и воскресить вас, когда вы без сознания.";
        }

        if (stars === 2) {
          return "Мистический спаситель часто появляется, чтобы воскресить вас, когда вы без сознания.";
        }

        if (stars === 3) {
          return "Мистический спаситель постоянно приходит, чтобы воскресить вас, когда вы без сознания.";
        }

        return "Мистический спаситель может появиться и воскресить вас, когда вы без сознания.";
      },
      title: "Мистический спаситель",
      levelRequirment: 49,
      iconSource: "",
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 0,
    },
    {
      perkId: "superDuper",
      cost: 1,
      totalAmountOfStars: 3,
      description:
        "Когда вы что-то создаете, у вас есть 10% шанс удвоить результат",
      title: "Супер-пупер",
      levelRequirment: 50,
      iconSource: "",
      modificator: 10,
      modificatorStep: 10,
      selectedStars: 0,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Luck();

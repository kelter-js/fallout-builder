import { create } from "zustand";

import { DEFAULT_AMOUNT_OF_STARS } from "./constants";
import { SPECIALS } from "../entities/Specials";
import { PerkStoreData } from "../types/Perk";

export const useLuckStore = create<PerkStoreData>((set) => ({
  perkList: [
    {
      perkId: "pharmaFarma",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы с вероятностью в 40% чаще находите препараты в химических контейнерах";
        }

        if (stars === 2) {
          return "Вы с вероятностью в 60% чаще находите препараты в химических контейнерах";
        }

        if (stars === 3) {
          return "Вы с вероятностью в 80% чаще находите препараты в химических контейнерах";
        }

        return "";
      },
      title: "Арктос фарма",
      levelRequirment: 2,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Pharma_Farma.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 0,
    },
    {
      perkId: "scrounger",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы с вероятностью в 40% чаще находите патроны в контейнерах с аммуницией";
        }

        if (stars === 2) {
          return "Вы с вероятностью в 60% чаще находите патроны в контейнерах с аммуницией";
        }

        if (stars === 3) {
          return "Вы с вероятностью в 80% чаще находите патроны в контейнерах с аммуницией";
        }

        return "";
      },
      title: "Халявщик",
      levelRequirment: 3,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Scrounger.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 1,
    },
    {
      perkId: "serendipity",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Когда ваше здоровье меньше 30%, вы получаете шанс избежать получение урона, в зависимости от вашей удачи (без силовой брони)";
        }

        return "";
      },
      title: "Приятная неожиданность",
      levelRequirment: 5,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Serendipity.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 2,
    },
    {
      perkId: "canDo",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы с вероятностью в 40% чаще находите консервы в контейнерах с едой";
        }

        if (stars === 2) {
          return "Вы с вероятностью в 60% чаще находите консервы в контейнерах с едой";
        }

        if (stars === 3) {
          return "Вы с вероятностью в 80% чаще находите консервы в контейнерах с едой";
        }

        return "";
      },
      title: "Это можно!",
      levelRequirment: 7,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Can_Do.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 3,
    },
    {
      perkId: "goodWithSalt",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Еда в вашем инвентаре портиться на 30% медленнее";
        }

        if (stars === 2) {
          return "Еда в вашем инвентаре портиться на 60% медленнее";
        }

        if (stars === 3) {
          return "Еда в вашем инвентаре портиться на 90% медленнее";
        }

        return "";
      },
      title: "Хорошо идёт с солью",
      levelRequirment: 9,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Good_with_Salt.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 4,
    },
    {
      perkId: "junkShield",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Получайте бонус к сопротивлению урону в зависимости от кол-ва вашей удачи и кол-ва хлама в инвентаре";
        }

        return "";
      },
      title: "Щит из хлама",
      levelRequirment: 10,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Junk_Shield.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 5,
    },
    {
      perkId: "mysteryMeat",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "При использовании стимпаков вы можете с 10% шансом создать съедобную мышечную ткань.";
        }

        if (stars === 2) {
          return "При использовании стимпаков вы можете с 20% шансом создать съедобную мышечную ткань.";
        }

        if (stars === 3) {
          return "При использовании стимпаков вы можете с 30% шансом создать съедобную мышечную ткань.";
        }

        return "";
      },
      title: "Таинственное мясо",
      levelRequirment: 12,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Mystery_Meat.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 6,
    },
    {
      perkId: "luckOfTheDraw",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "С небольшой вероятностью, ваше оружие само по себе починится, когда вы атакуете противников";
        }

        if (stars === 2) {
          return "С некоторой вероятностью, ваше оружие само по себе починится, когда вы атакуете противников";
        }

        if (stars === 3) {
          return "С значительной вероятностью, ваше оружие само по себе починится, когда вы атакуете противников";
        }

        return "";
      },
      title: "Чистая случайность",
      levelRequirment: 14,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Luck_of_the_Draw.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 7,
    },
    {
      perkId: "capCollector",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы находите больше крышек в тайниках в зависимости от кол-ва вашей удачи";
        }

        return "";
      },
      title: "Коллекционер крышек",
      levelRequirment: 16,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Cap_Collector.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 8,
    },
    {
      perkId: "woodchucker",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы добываете вдвое больше дерева при его сборе";
        }

        return "";
      },
      title: "Дровосек",
      levelRequirment: 17,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Woodchucker.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 9,
    },
    {
      perkId: "curator",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Бонусы от журналов и пупсов действуют вдвое дольше";
        }

        return "";
      },
      title: "Куратор",
      levelRequirment: 19,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Curator.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 10,
    },
    {
      perkId: "psychopath",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Каждое убийство в режиме VATS имеет 5% шанс полного заполнения шкалы критического урона";
        }

        if (stars === 2) {
          return "Каждое убийство в режиме VATS имеет 10% шанс полного заполнения шкалы критического урона";
        }

        if (stars === 3) {
          return "Каждое убийство в режиме VATS имеет 15% шанс полного заполнения шкалы критического урона";
        }

        return "";
      },
      title: "Психопат",
      levelRequirment: 20,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Psychopath.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 11,
    },
    {
      perkId: "dryNurse",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "С вероятностью в 50% вы не истратите стимулятора при воскрешении другого игрока";
        }

        return "";
      },
      title: "Сиделка",
      levelRequirment: 23,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Dry_Nurse.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 12,
    },
    {
      perkId: "luckyBreak",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "С небольшой вероятностью ваша броня сама по себе починится при попадании по вам";
        }

        if (stars === 2) {
          return "С значительной вероятностью ваша броня сама по себе починится при попадании по вам";
        }

        if (stars === 3) {
          return "С большей долей вероятностьи ваша броня сама по себе починится при попадании по вам";
        }

        return "";
      },
      title: "Счастливый случай",
      levelRequirment: 24,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Lucky_Break.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 13,
    },
    {
      perkId: "mysteriousStranger",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
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
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Mysterious_Stranger.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 14,
    },
    {
      perkId: "lastLaugh",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "При смерти вы выбрасываете гранату из инвентаря";
        }

        return "";
      },
      title: "Хорошо смеется тот, кто смеется последним",
      levelRequirment: 27,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Last_Laugh.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 15,
    },
    {
      perkId: "fourLeafClover",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Каждый промах в режиме VATS добавляет заполняет шкалу критического уровня в зависимости от вашего навыка удачи";
        }

        return "Каждый промах в режиме VATS добавляет заполняет шкалу критического уровня в зависимости от вашего навыка удачи";
      },
      title: "Клевер-четырехлистник",
      levelRequirment: 29,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Four_Leaf_Clover.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 16,
    },
    {
      perkId: "starchedGenes",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Каждый промах в режиме VATS добавляет заполняет шкалу критического уровня в зависимости от вашего навыка удачи";
        }

        return "Каждый промах в режиме VATS добавляет заполняет шкалу критического уровня в зависимости от вашего навыка удачи";
      },
      title: "Гениальные гены",
      levelRequirment: 30,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Starched_Genes.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 17,
    },
    {
      perkId: "oneGunArmy",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваше тяжелое оружие получает 4% шанс ошеломить противника и 4% шанс повредить его конечность";
        }

        if (stars === 2) {
          return "Ваше тяжелое оружие получает 8% шанс ошеломить противника и 8% шанс повредить его конечность";
        }

        if (stars === 3) {
          return "Ваше тяжелое оружие получает 12% шанс ошеломить противника и 12% шанс повредить его конечность";
        }

        return "Каждый промах в режиме VATS добавляет заполняет шкалу критического уровня в зависимости от вашего навыка удачи";
      },
      title: "Армия из одного стрелка",
      levelRequirment: 31,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_One_Gun_Army.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 18,
    },
    {
      perkId: "grimReapersSprint",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Каждое убийство в режме VATS имеет 15% шанс восстановить все очки действия";
        }

        if (stars === 2) {
          return "Каждое убийство в режме VATS имеет 25% шанс восстановить все очки действия";
        }

        if (stars === 3) {
          return "Каждое убийство в режме VATS имеет 35% шанс восстановить все очки действия";
        }

        return "Каждое убийство в режме VATS имеет 15% шанс восстановить все очки действия";
      },
      title: "Угрюмый жнец",
      levelRequirment: 33,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Grim_Reaper_Sprint.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 19,
    },
    {
      perkId: "stormChaser",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы восстанавливаете здоровье находясь снаружи во время дождя или рад-шторма";
        }

        if (stars === 2) {
          return "Вы восстанавливаете больше здоровье находясь снаружи во время дождя или рад-шторма";
        }

        return "Каждое убийство в режме VATS имеет 15% шанс восстановить все очки действия";
      },
      title: "Охотник за штормами",
      levelRequirment: 35,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Storm_Chaser.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 20,
    },
    {
      perkId: "tormentor",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши карабины с вероятностью в 5% - ломают противникам конечности";
        }

        if (stars === 2) {
          return "Ваши карабины с вероятностью в 10% - ломают противникам конечности";
        }

        if (stars === 3) {
          return "Ваши карабины с вероятностью в 15% - ломают противникам конечности";
        }

        return "Ваши карабины с вероятностью в 5% - ломают противникам конечности";
      },
      title: "Мучитель",
      levelRequirment: 37,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Tormentor.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 21,
    },
    {
      perkId: "ricochet",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете шанс вернуть урон противнику от его дальних атак в зависимости от кол-ва вашей удачи";
        }

        return "Вы получаете шанс вернуть урон противнику от его дальних атак в зависимости от кол-ва вашей удачи";
      },
      title: "Рикошет",
      levelRequirment: 38,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Ricochet.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 22,
    },
    {
      perkId: "quickHands",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете 6% шанс мгновенно перезарядить оружие как только ваш магазин опустеет";
        }

        if (stars === 2) {
          return "Вы получаете 12% шанс мгновенно перезарядить оружие как только ваш магазин опустеет";
        }

        if (stars === 3) {
          return "Вы получаете 18% шанс мгновенно перезарядить оружие как только ваш магазин опустеет";
        }

        return "Вы получаете 6% шанс мгновенно перезарядить оружие как только ваш магазин опустеет";
      },
      title: "Ловкость рук",
      levelRequirment: 40,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Quick_Hands.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 23,
    },
    {
      perkId: "bloodyMess",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете 5% к урону, ваши противники с некоторым шансом могут взорваться кровавой кашей";
        }

        if (stars === 2) {
          return "Вы получаете 10% к урону, ваши противники с некоторым шансом могут взорваться кровавой кашей";
        }

        if (stars === 3) {
          return "Вы получаете 15% к урону, ваши противники с некоторым шансом могут взорваться кровавой кашей";
        }

        return "Вы получаете 5% к урону, ваши противники с некоторым шансом могут взорваться кровавой кашей";
      },
      title: "Кровавая баня",
      levelRequirment: 42,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Bloody_Mess.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 24,
    },
    {
      perkId: "criticalSavvy",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши критические удары теперь потребляют только 85% от шкалы критического урона";
        }

        if (stars === 2) {
          return "Ваши критические удары теперь потребляют только 70% от шкалы критического урона";
        }

        if (stars === 3) {
          return "Ваши критические удары теперь потребляют только 55% от шкалы критического урона";
        }

        return "Ваши критические удары теперь потребляют только 85% от шкалы критического урона";
      },
      title: "Критическое мышление",
      levelRequirment: 44,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Critical_Savvy.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 25,
    },
    {
      perkId: "classFreak",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши критические удары теперь потребляют только 85% от шкалы критического урона";
        }

        if (stars === 2) {
          return "Ваши критические удары теперь потребляют только 70% от шкалы критического урона";
        }

        if (stars === 3) {
          return "Ваши критические удары теперь потребляют только 55% от шкалы критического урона";
        }

        return "Ваши критические удары теперь потребляют только 85% от шкалы критического урона";
      },
      title: "Местный уродец",
      levelRequirment: 46,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Class_Freak.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 26,
    },
    {
      perkId: "betterCriticals",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Критические атаки в VATS наносят на 50% больше урона";
        }

        if (stars === 2) {
          return "Критические атаки в VATS наносят на 75% больше урона";
        }

        if (stars === 3) {
          return "Критические атаки в VATS наносят на 100% больше урона";
        }

        return "Критические атаки в VATS наносят на 50% больше урона";
      },
      title: "Повышенный критический урон",
      levelRequirment: 47,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Better_Criticals.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 27,
    },
    {
      perkId: "mysteriousSavior",
      cost: 1,
      totalAmountOfStars: 3,
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
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Mysterious_Savior.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 28,
    },
    {
      perkId: "superDuper",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Когда вы что-то создаете, у вас есть 10% шанс удвоить результат";
        }

        if (stars === 2) {
          return "Когда вы что-то создаете, у вас есть 20% шанс удвоить результат";
        }

        if (stars === 3) {
          return "Когда вы что-то создаете, у вас есть 30% шанс удвоить результат";
        }

        return "Мистический спаситель может появиться и воскресить вас, когда вы без сознания.";
      },
      title: "Супер-пупер",
      levelRequirment: 50,
      iconSource: `${process.env.PUBLIC_URL}/assets/luck/FO76_Super_Duper.png`,
      selectedStars: 1,
      type: SPECIALS.LUCK,
      order: 29,
    },
  ],
  type: SPECIALS.LUCK,
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

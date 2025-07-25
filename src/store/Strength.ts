import { create } from "zustand";

import { DEFAULT_AMOUNT_OF_STARS } from "./constants";
import { SPECIALS } from "../entities/Specials";
import { PerkStoreData } from "../types/Perk";

export const useStrengthStore = create<PerkStoreData>((set) => ({
  perkList: [
    {
      perkId: "slugger",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Урон от двуручного оружия ближнего боя повышен на 10%";
        }

        if (stars === 2) {
          return "Урон от двуручного оружия ближнего боя повышен на 15%";
        }

        if (stars === 3) {
          return "Урон от двуручного оружия ближнего боя повышен на 20%";
        }

        return "Урон от двуручного оружия ближнего боя повышен на 10%";
      },
      title: "Мастер мощных ударов",
      levelRequirment: 2,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Slugger.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 0,
    },
    {
      perkId: "gladiator",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваше одноручное оружие ближнего боя наносит на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваше одноручное оружие ближнего боя наносит на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваше одноручное оружие ближнего боя наносит на 20% больше урона";
        }

        return "Ваше одноручное оружие ближнего боя наносит на 10% больше урона";
      },
      title: "Гладиатор",
      levelRequirment: 2,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Gladiator.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 1,
    },
    {
      perkId: "ironFist",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Урон от ударов кулаками повышен на 10%";
        }

        if (stars === 2) {
          return "Урон от ударов кулаками повышен на 15%";
        }

        if (stars === 3) {
          return "Урон от ударов кулаками повышен на 20%";
        }

        return "Урон от ударов кулаками повышен на 10%";
      },
      title: "Железный кулак",
      levelRequirment: 2,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Iron_Fist.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 2,
    },
    {
      perkId: "travelingPharmacy",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вес всех препаратов (включая стимпаки) уменьшен на 30%";
        }

        if (stars === 2) {
          return "Вес всех препаратов (включая стимпаки) уменьшен на 60%";
        }

        if (stars === 3) {
          return "Вес всех препаратов (включая стимпаки) уменьшен на 90%";
        }

        return "Вес всех препаратов (включая стимпаки) уменьшен на 30%";
      },
      title: "Странствующая аптека",
      levelRequirment: 3,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Traveling_Pharmacy.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 3,
    },
    {
      perkId: "shotGunner",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Урон от дробовиков увеличен на 10%";
        }

        if (stars === 2) {
          return "Урон от дробовиков увеличен на 15%";
        }

        if (stars === 3) {
          return "Урон от дробовиков увеличен на 20%";
        }

        return "Урон от дробовиков увеличен на 10%";
      },
      title: "Стрелок из дробовика",
      levelRequirment: 10,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Shotgunner.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 4,
    },
    {
      perkId: "packRat",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вес хлама в инвентаре снижен на 25%";
        }

        if (stars === 2) {
          return "Вес хлама в инвентаре снижен на 50%";
        }

        if (stars === 3) {
          return "Вес хлама в инвентаре снижен на 75%";
        }

        return "Вес хлама в инвентаре снижен на 25%";
      },
      title: "Барахольщик",
      levelRequirment: 7,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Pack_Rat.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 5,
    },
    {
      perkId: "basher",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Урон прикладами увеличен на 25%, имеется 5% шанс сломать конечно противнику";
        }

        if (stars === 2) {
          return "Урон прикладами увеличен на 50%, имеется 10% шанс сломать конечно противнику";
        }

        return "Урон прикладами увеличен на 25%, имеется 5% шанс сломать конечно противнику";
      },
      title: "Хрясь!",
      levelRequirment: 11,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Basher.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 6,
    },
    {
      perkId: "sturdyFrame",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вес брони переносимой в инвентаре снижается на 25%";
        }

        if (stars === 2) {
          return "Вес брони переносимой в инвентаре снижается на 50%";
        }

        return "Вес брони переносимой в инвентаре снижается на 25%";
      },
      title: "Прочная рама",
      levelRequirment: 13,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Sturdy_Frame.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 7,
    },
    {
      perkId: "barbarian",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Каждое очко Силы добавляет +2 к сопротивлению урону (макс 40) (не работает в силовой броне)";
        }

        if (stars === 2) {
          return "Каждое очко Силы добавляет +3 к сопротивлению урону (макс 60) (не работает в силовой броне)";
        }

        if (stars === 3) {
          return "Каждое очко Силы добавляет +4 к сопротивлению урону (макс 80) (не работает в силовой броне)";
        }

        return "Каждое очко Силы добавляет +2 к сопротивлению урону (макс 40) (не работает в силовой броне)";
      },
      title: "Варвар",
      levelRequirment: 14,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Barbarian.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 8,
    },
    {
      perkId: "expertGladiator",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваше одноручное оружие ближнего боя наносит на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваше одноручное оружие ближнего боя наносит на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваше одноручное оружие ближнего боя наносит на 20% больше урона";
        }

        return "Ваше одноручное оружие ближнего боя наносит на 10% больше урона";
      },
      title: "Эксперт гладиатор",
      levelRequirment: 20,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Expert_Gladiator.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 9,
    },
    {
      perkId: "expertSlugger",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Урон от двуручного оружия ближнего боя повышен на 10%";
        }

        if (stars === 2) {
          return "Урон от двуручного оружия ближнего боя повышен на 15%";
        }

        if (stars === 3) {
          return "Урон от двуручного оружия ближнего боя повышен на 20%";
        }

        return "Урон от двуручного оружия ближнего боя повышен на 10%";
      },
      title: "Эксперт по мощным ударам",
      levelRequirment: 24,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Expert_Slugger.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 10,
    },
    {
      perkId: "martialArtist",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваше оружие ближнего боя весит на 20% меньше, вы сможете атаковать на 10% быстрее";
        }

        if (stars === 2) {
          return "Ваше оружие ближнего боя весит на 20% меньше, вы сможете атаковать на 20% быстрее";
        }

        if (stars === 3) {
          return "Ваше оружие ближнего боя весит на 60% меньше, вы сможете атаковать на 30% быстрее";
        }

        return "Ваше оружие ближнего боя весит на 20% меньше, вы сможете атаковать на 10% быстрее";
      },
      title: "Специалист ближнего боя",
      levelRequirment: 16,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Martial_Artist.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 11,
    },
    {
      perkId: "scatterShot",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Дробовики весят на 30% меньше и вы перезаряжаете их на 10% быстрее";
        }

        if (stars === 2) {
          return "Дробовики весят на 60% меньше и вы перезаряжаете их на 20% быстрее";
        }

        if (stars === 3) {
          return "Дробовики весят на 90% меньше и вы перезаряжаете их на 30% быстрее";
        }

        return "Дробовики весят на 30% меньше и вы перезаряжаете их на 10% быстрее";
      },
      title: "Варвар",
      levelRequirment: 18,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Scattershot.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 12,
    },
    {
      perkId: "expertShotgunner",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Урон от дробовиков увеличен на 10%";
        }

        if (stars === 2) {
          return "Урон от дробовиков увеличен на 15%";
        }

        if (stars === 3) {
          return "Урон от дробовиков увеличен на 20%";
        }

        return "Урон от дробовиков увеличен на 10%";
      },
      title: "Эксперт стрелок из дробовика",
      levelRequirment: 23,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Expert_Shotgunner.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 13,
    },
    {
      perkId: "blocker",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете на 15% меньше урона в ближнем бою";
        }

        if (stars === 2) {
          return "Вы получаете на 30% меньше урона в ближнем бою";
        }

        if (stars === 3) {
          return "Вы получаете на 45% меньше урона в ближнем бою";
        }

        return "Вы получаете на 15% меньше урона в ближнем бою";
      },
      title: "Блокировка",
      levelRequirment: 21,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Blocker.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 14,
    },
    {
      perkId: "bandolier",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Боеприпасы для баллистического оружия весят на 45% меньше";
        }

        if (stars === 2) {
          return "Боеприпасы для баллистического оружия весят на 90% меньше";
        }

        return "Боеприпасы для баллистического оружия весят на 45% меньше";
      },
      title: "Патронташ",
      levelRequirment: 22,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Bandolier.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 15,
    },
    {
      perkId: "strongBack",
      cost: 1,
      totalAmountOfStars: 4,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Увеличивает переносимый вес на 10 фунтов";
        }

        if (stars === 2) {
          return "Увеличивает переносимый вес на 20 фунтов";
        }

        if (stars === 3) {
          return "Увеличивает переносимый вес на 30 фунтов";
        }

        if (stars === 4) {
          return "Увеличивает переносимый вес на 40 фунтов";
        }

        return "Увеличивает переносимый вес на 10 фунтов";
      },
      title: "Крепкий хребет",
      levelRequirment: 26,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Strong_Back.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 16,
    },
    {
      perkId: "heavyGunner",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваше невзрывное тяжелое оружие наносит теперь на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваше невзрывное тяжелое оружие наносит теперь на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваше невзрывное тяжелое оружие наносит теперь на 20% больше урона";
        }

        return "Ваше невзрывное тяжелое оружие наносит теперь на 10% больше урона";
      },
      title: "Фанат больших пушек",
      levelRequirment: 30,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Heavy_Gunner.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 17,
    },
    {
      perkId: "ordnanceExpress",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Взрывчатка весит на 45% меньше";
        }

        if (stars === 2) {
          return "Взрывчатка весит на 90% меньше";
        }

        return "Взрывчатка весит на 45% меньше";
      },
      title: "Сверхбыстрый боезаряд",
      levelRequirment: 31,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Ordnance_Express.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 18,
    },
    {
      perkId: "fullCharge",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "При ускорении в силовой броне расходуется на 50% меньше энергии ядерных блоков";
        }

        if (stars === 2) {
          return "При ускорении в силовой броне ядерный блок не потребляет дополнительно энергии";
        }

        return "При ускорении в силовой броне расходуется на 50% меньше энергии ядерных блоков";
      },
      title: "Полный заряд",
      levelRequirment: 33,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Full_Charge.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 19,
    },
    {
      perkId: "incisor",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши атаки ближнего боя игнорируют 25% брони противника";
        }

        if (stars === 2) {
          return "Ваши атаки ближнего боя игнорируют 50% брони противника";
        }

        if (stars === 3) {
          return "Ваши атаки ближнего боя игнорируют 75% брони противника";
        }

        return "Ваши атаки ближнего боя игнорируют 25% брони противника";
      },
      title: "Резец",
      levelRequirment: 34,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Incisor.png`,

      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 20,
    },
    {
      perkId: "bearArms",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Тяжелое оружие весит меньше на 30%";
        }

        if (stars === 2) {
          return "Тяжелое оружие весит меньше на 60%";
        }

        if (stars === 3) {
          return "Тяжелое оружие весит меньше на 90%";
        }

        return "Тяжелое оружие весит меньше на 30%";
      },
      title: "Медвежьи лапищи",
      levelRequirment: 35,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Bear_Arms.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 21,
    },
    {
      perkId: "masterGladiator",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваше одноручное оружие ближнего боя наносит на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваше одноручное оружие ближнего боя наносит на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваше одноручное оружие ближнего боя наносит на 20% больше урона";
        }

        return "Ваше одноручное оружие ближнего боя наносит на 10% больше урона";
      },
      title: "Мастер гладиатор",
      levelRequirment: 43,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Master_Gladiator.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 22,
    },
    {
      perkId: "masterSlugger",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Урон от двуручного оружия ближнего боя повышен на 10%";
        }

        if (stars === 2) {
          return "Урон от двуручного оружия ближнего боя повышен на 15%";
        }

        if (stars === 3) {
          return "Урон от двуручного оружия ближнего боя повышен на 20%";
        }

        return "Урон от двуручного оружия ближнего боя повышен на 10%";
      },
      title: "Мастер мощных ударов",
      levelRequirment: 48,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Master_Slugger.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 23,
    },
    {
      perkId: "lockAndLoad",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Тяжелое оружие перезаряжается на 20% быстрее";
        }

        if (stars === 2) {
          return "Тяжелое оружие перезаряжается на 40% быстрее";
        }

        if (stars === 3) {
          return "Тяжелое оружие перезаряжается на 60% быстрее";
        }

        return "Тяжелое оружие перезаряжается на 10% быстрее";
      },
      title: "Полная боеготовность",
      levelRequirment: 37,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Lock_and_Load.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 24,
    },
    {
      perkId: "bulletShield",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +20 к сопротивлению урону во время стрельбы из тяжелого оружия";
        }

        if (stars === 2) {
          return "Вы получаете +40 к сопротивлению урону во время стрельбы из тяжелого оружия";
        }

        if (stars === 3) {
          return "Вы получаете +60 к сопротивлению урону во время стрельбы из тяжелого оружия";
        }

        return "Вы получаете +20 к сопротивлению урону во время стрельбы из тяжелого оружия";
      },
      title: "Щит",
      levelRequirment: 39,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Bullet_Shield.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 25,
    },
    {
      perkId: "expertHeavyGunner",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваше невзрывное тяжелое оружие наносит теперь на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваше невзрывное тяжелое оружие наносит теперь на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваше невзрывное тяжелое оружие наносит теперь на 20% больше урона";
        }

        return "Ваше невзрывное тяжелое оружие наносит теперь на 10% больше урона";
      },
      title: "Эскперт больших пушек",
      levelRequirment: 40,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Expert_Heavy_Gunner.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 26,
    },
    {
      perkId: "masterShotgunner",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Урон от дробовиков увеличен на 10%";
        }

        if (stars === 2) {
          return "Урон от дробовиков увеличен на 15%";
        }

        if (stars === 3) {
          return "Урон от дробовиков увеличен на 20%";
        }

        return "Урон от дробовиков увеличен на 10%";
      },
      title: "Мастер-стрелок из дробовика",
      levelRequirment: 45,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Master_Shotgunner.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 27,
    },
    {
      perkId: "painTrain",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Врезаясь с разбега в противников, находясь в силовой броне, вы наносите им урон и ошеломляете их";
        }

        if (stars === 2) {
          return "Врезаясь с разбега в противников, находясь в силовой броне, вы наносите им больше урона и ошеломляете их";
        }

        if (stars === 3) {
          return "Врезаясь с разбега в противников, находясь в силовой броне, вы наносите им значительный урон и ошеломляете их";
        }

        return "Врезаясь с разбега в противников, находясь в силовой броне, вы наносите им урон и ошеломляете их";
      },
      title: "Локомотив",
      levelRequirment: 41,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Pain_Train.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 28,
    },
    {
      perkId: "masterHeavyGunner",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваше невзрывное тяжелое оружие наносит теперь на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваше невзрывное тяжелое оружие наносит теперь на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваше невзрывное тяжелое оружие наносит теперь на 20% больше урона";
        }

        return "Ваше невзрывное тяжелое оружие наносит теперь на 10% больше урона";
      },
      title: "Мастер больших пушек",
      levelRequirment: 50,
      iconSource: `${process.env.PUBLIC_URL}/assets/strength/FO76_Master_Heavy_Gunner.png`,
      selectedStars: 1,
      type: SPECIALS.STRENGTH,
      order: 29,
    },
  ],
  type: SPECIALS.STRENGTH,
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

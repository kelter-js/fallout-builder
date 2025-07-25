import { create } from "zustand";

import { DEFAULT_AMOUNT_OF_STARS } from "./constants";
import { SPECIALS } from "../entities/Specials";
import { PerkStoreData } from "../types/Perk";

export const useAgilityStore = create<PerkStoreData>((set) => ({
  perkList: [
    {
      perkId: "actionBoy",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Живчик",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши очки действия восстанавливаются на 15% быстрее";
        }

        if (stars === 2) {
          return "Ваши очки действия восстанавливаются на 30% быстрее";
        }

        if (stars === 3) {
          return "Ваши очки действия восстанавливаются на 45% быстрее";
        }

        return "";
      },
      levelRequirment: 2,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Action_Boy.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 0,
    },
    {
      perkId: "gunslinger",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Дуэлист",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши неавтоматические пистолеты наносят на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваши неавтоматические пистолеты наносят на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваши неавтоматические пистолеты наносят на 20% больше урона";
        }

        return "";
      },
      levelRequirment: 2,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Gunslinger.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 1,
    },
    {
      perkId: "bornSurvivor",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Прирождённый выживальщик",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Когда ваше здоровье падает ниже 20% вы автоматически принимаете стимпак каждые 20 секунд";
        }

        if (stars === 2) {
          return "Когда ваше здоровье падает ниже 30% вы автоматически принимаете стимпак каждые 20 секунд";
        }

        if (stars === 3) {
          return "Когда ваше здоровье падает ниже 40% вы автоматически принимаете стимпак каждые 20 секунд";
        }

        return "";
      },
      levelRequirment: 3,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Born_Survivor.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 2,
    },
    {
      perkId: "gunRunner",
      cost: 1,
      totalAmountOfStars: 2,
      title: "Поставщик оружия",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваша скорость бега увеличена на 10%, когда вы экипированы пистолетом";
        }

        if (stars === 2) {
          return "Ваша скорость бега увеличена на 20%, когда вы экипированы пистолетом";
        }

        return "";
      },
      levelRequirment: 4,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Gun_Runner.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 3,
    },
    {
      perkId: "movingTarget",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +15 к сопротивлению урону и энергетическому урону пока вы бежите (без силовой)";
        }

        if (stars === 2) {
          return "Вы получаете +30 к сопротивлению урону и энергетическому урону пока вы бежите (без силовой)";
        }

        if (stars === 3) {
          return "Вы получаете +45 к сопротивлению урону и энергетическому урону пока вы бежите (без силовой)";
        }

        return "";
      },
      title: "Бегущая мишень",
      levelRequirment: 5,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Moving_Target.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 4,
    },
    {
      perkId: "thruHiker",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Походник",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вес еды и воды снижен на 30%";
        }

        if (stars === 2) {
          return "Вес еды и воды снижен на 60%";
        }

        if (stars === 3) {
          return "Вес еды и воды снижен на 90%";
        }

        return "";
      },
      levelRequirment: 7,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Thru-Hiker.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 5,
    },
    {
      perkId: "deadManSprinting",
      cost: 1,
      totalAmountOfStars: 2,
      title: "Бегущий мертвец",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы бежите на 10% быстрее за повышенную стоимость очков действий, когда ваше здоровье ниже 40%";
        }

        if (stars === 2) {
          return "Вы бежите на 20% быстрее за повышенную стоимость очков действий, когда ваше здоровье ниже 50%";
        }

        return "";
      },
      levelRequirment: 8,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Dead_Man_Sprinting.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 6,
    },
    {
      perkId: "packingLight",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Гений упаковки",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши пистолеты весят на 25% меньше";
        }

        if (stars === 2) {
          return "Ваши пистолеты весят на 50% меньше";
        }

        if (stars === 3) {
          return "Ваши пистолеты весят на 75% меньше";
        }

        return "";
      },
      levelRequirment: 9,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Packin'_Light.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 7,
    },
    {
      perkId: "guerilla",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Партизан",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши автоматические пистолеты наносят на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваши автоматические пистолеты наносят на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваши автоматические пистолеты наносят на 20% больше урона";
        }

        return "";
      },
      levelRequirment: 10,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Guerrilla.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 8,
    },
    {
      perkId: "marathoner",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Марафонер",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Спринт потребляет на 20% меньше очков действия(Вне силовой брони)";
        }

        if (stars === 2) {
          return "Спринт потребляет на 30% меньше очков действия(Вне силовой брони)";
        }

        if (stars === 3) {
          return "Спринт потребляет на 40% меньше очков действия(Вне силовой брони)";
        }

        return "";
      },
      levelRequirment: 13,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Marathoner.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 9,
    },
    {
      perkId: "ninja",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Скрытые атаки с оружием ближнего боя наносят 2.3х от обычного урона";
        }

        if (stars === 2) {
          return "Скрытые атаки с оружием ближнего боя наносят 2.6х от обычного урона";
        }

        if (stars === 3) {
          return "Скрытые атаки с оружием ближнего боя наносят 3х от обычного урона";
        }

        return "";
      },
      title: "Ниндзя",
      levelRequirment: 15,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Ninja.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 10,
    },
    {
      perkId: "expertGunslinger",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Эксперт-стрелок",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши неавтоматические пистолеты наносят на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваши неавтоматические пистолеты наносят на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваши неавтоматические пистолеты наносят на 20% больше урона";
        }

        return "";
      },
      levelRequirment: 15,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Expert_Gunslinger.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 11,
    },
    {
      perkId: "evasive",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Уклончивый",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Каждое очко ловкости добавляет +1 ксопротивлению обычному и энергетическому урону(макс 15)(без силовой брони)";
        }

        if (stars === 2) {
          return "Каждое очко ловкости добавляет +2 ксопротивлению обычному и энергетическому урону(макс 30)(без силовой брони)";
        }

        if (stars === 3) {
          return "Каждое очко ловкости добавляет +3 ксопротивлению обычному и энергетическому урону(макс 45)(без силовой брони)";
        }

        return "";
      },
      levelRequirment: 17,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Evasive.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 12,
    },
    {
      perkId: "modernRenegade",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Современный ренегад",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Пистолеты получают +15% к точности стрельбы от бедра и 4% шанс сломать конечность";
        }

        if (stars === 2) {
          return "Пистолеты получают +30% к точности стрельбы от бедра и 8% шанс сломать конечность";
        }

        if (stars === 3) {
          return "Пистолеты получают +45% к точности стрельбы от бедра и 12% шанс сломать конечность";
        }

        return "";
      },
      levelRequirment: 18,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Modern_Renegade.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 13,
    },
    {
      perkId: "sneak",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Лазутчик",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "В режиме скрытности вас труднее обнаружить на 25% (без силовой брони)";
        }

        if (stars === 2) {
          return "В режиме скрытности вас труднее обнаружить на 50% (без силовой брони)";
        }

        if (stars === 3) {
          return "В режиме скрытности вас труднее обнаружить на 75% (без силовой брони)";
        }

        return "";
      },
      levelRequirment: 20,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Sneak.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 14,
    },
    {
      perkId: "homeDefense",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы можете создавать и обезвреживать ловушки, создавать улучшенные турели";
        }

        if (stars === 2) {
          return "Вы можете создавать и обезвреживать продвинутые ловушки, создавать продвинутые турели";
        }

        if (stars === 3) {
          return "Вы можете создавать и обезвреживать экспертные ловушки, создавать экспертные турели";
        }

        return "";
      },
      title: "На страже родного дома",
      levelRequirment: 22,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Home_Defense.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 15,
    },
    {
      perkId: "expertGuerilla",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Эксперт партизан",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши автоматические пистолеты наносят на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваши автоматические пистолеты наносят на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваши автоматические пистолеты наносят на 20% больше урона";
        }

        return "";
      },
      levelRequirment: 25,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Expert_Guerrilla.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 16,
    },
    {
      perkId: "сovertOperative",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Секретный агент",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши атаки дальнего боя из режима скрытности наносят 2.15x от обычного урона";
        }

        if (stars === 2) {
          return "Ваши атаки дальнего боя из режима скрытности наносят 2.3x от обычного урона";
        }

        if (stars === 3) {
          return "Ваши атаки дальнего боя из режима скрытности наносят 2.5x от обычного урона";
        }

        return "";
      },
      levelRequirment: 27,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Covert_Operative.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 17,
    },
    {
      perkId: "lightFooted",
      cost: 1,
      totalAmountOfStars: 1,
      title: "Лёгкая поступь",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваше передвижение в режиме скрытности не заставляет ловушки срабатывать";
        }

        return "";
      },
      levelRequirment: 29,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Light_Footed.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 18,
    },
    {
      perkId: "enforcer",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Боец",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Выстрелы из дробовика с 5% шансом могут оглушить цель и с 10% шансом сломать конечность";
        }

        if (stars === 2) {
          return "Выстрелы из дробовика с 10% шансом могут оглушить цель и с 20% шансом сломать конечность";
        }

        if (stars === 3) {
          return "Выстрелы из дробовика с 15% шансом могут оглушить цель и с 30% шансом сломать конечность";
        }

        return "";
      },
      levelRequirment: 30,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Enforcer.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 19,
    },
    {
      perkId: "goatLegs",
      cost: 1,
      totalAmountOfStars: 2,
      title: "Козлинные ноги",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете на 40%  меньше урона при падении";
        }

        if (stars === 2) {
          return "Вы получаете на 80%  меньше урона при падении";
        }

        return "";
      },
      levelRequirment: 32,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Goat_Legs.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 20,
    },
    {
      perkId: "ammosmith",
      cost: 1,
      totalAmountOfStars: 2,
      title: "Мастер боеприпасов",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы производите на 40% больше боеприпасов при изготовлении";
        }

        if (stars === 2) {
          return "Вы производите на 80% больше боеприпасов при изготовлении";
        }

        return "";
      },
      levelRequirment: 34,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Ammosmith.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 21,
    },
    {
      perkId: "masterGunslinger",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Мастер дуэлист",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Выстрелы из дробовика с 5% шансом могут оглушить цель и с 10% шансом сломать конечность";
        }

        if (stars === 2) {
          return "Выстрелы из дробовика с 10% шансом могут оглушить цель и с 20% шансом сломать конечность";
        }

        if (stars === 3) {
          return "Выстрелы из дробовика с 15% шансом могут оглушить цель и с 30% шансом сломать конечность";
        }

        return "";
      },
      levelRequirment: 35,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Master_Gunslinger.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 22,
    },
    {
      perkId: "escapeArtist",
      cost: 1,
      totalAmountOfStars: 1,
      title: "Специалист по побегам",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Входите в режим скрытности, чтобы противники потеряли вас из виду, бег более не влияет на скрытность";
        }

        return "";
      },
      levelRequirment: 35,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Escape_Artist.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 23,
    },
    {
      perkId: "misterSandman",
      cost: 1,
      totalAmountOfStars: 2,
      title: "Специалист по побегам",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "В ночной период времени ваше оружие с глушителем наносит на 50% больше урона в режиме скрытности";
        }

        if (stars === 2) {
          return "В ночной период времени ваше оружие с глушителем наносит на 100% больше урона в режиме скрытности";
        }

        return "";
      },
      levelRequirment: 37,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Mister_Sandman.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 24,
    },
    {
      perkId: "whiteKnight",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Белый рыцарь",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваша броня приходит в негодность на 20% медленнее и дешевле обходится в починке";
        }

        if (stars === 2) {
          return "Ваша броня приходит в негодность на 40% медленнее и дешевле обходится в починке";
        }

        if (stars === 3) {
          return "Ваша броня приходит в негодность на 60% медленнее и дешевле обходится в починке";
        }

        return "";
      },
      levelRequirment: 39,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_White_Knight.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 25,
    },
    {
      perkId: "masterGuerilla",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши автоматические пистолеты наносят на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваши автоматические пистолеты наносят на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваши автоматические пистолеты наносят на 20% больше урона";
        }

        return "";
      },
      title: "Мастер партизан",
      levelRequirment: 43,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Master_Guerrilla.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 26,
    },
    {
      perkId: "dodgy",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Подозрительный",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "С 10% шансом вы можете избежать входящий урон, истратив на это 30 очков действий за каждое попадание по вам";
        }

        if (stars === 2) {
          return "С 20% шансом вы можете избежать входящий урон, истратив на это 30 очков действий за каждое попадание по вам";
        }

        if (stars === 3) {
          return "С 30% шансом вы можете избежать входящий урон, истратив на это 30 очков действий за каждое попадание по вам";
        }

        return "";
      },
      levelRequirment: 45,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Dodgy.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 27,
    },
    {
      perkId: "secretAgent",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Тайный агент",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Используемые вами стелс-бои работают в 2 раза дольше";
        }

        if (stars === 2) {
          return "Используемые вами стелс-бои работают в 3 раза дольше";
        }

        if (stars === 3) {
          return "Используемые вами стелс-бои работают в 4 раза дольше";
        }

        return "";
      },
      levelRequirment: 47,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Secret_Agent.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 28,
    },
    {
      perkId: "adrenaline",
      cost: 1,
      totalAmountOfStars: 5,
      title: "Адреналин",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +6%(макс 36%) к наносимому вами урону, за каждое убийство. Эффект действует в течение 30с";
        }

        if (stars === 2) {
          return "Вы получаете +7%(макс 42%) к наносимому вами урону, за каждое убийство. Эффект действует в течение 30с";
        }

        if (stars === 3) {
          return "Вы получаете +8%(макс 48%) к наносимому вами урону, за каждое убийство. Эффект действует в течение 30с";
        }

        return "";
      },
      levelRequirment: 49,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Adrenaline.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 29,
    },
    {
      perkId: "gunFu",
      cost: 1,
      totalAmountOfStars: 3,
      title: "Мастерство стрельбы",
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "При переключении цели после убийства в VATS ваша следующая (1) цель получает на 10% больше урона";
        }

        if (stars === 2) {
          return "При переключении цели после убийства в VATS ваши следующие (2) цели получают на 10% и 20% больше урона";
        }

        if (stars === 3) {
          return "При переключении цели после убийства в VATS ваши следующие (3) цели получают на 10%, 20% и затем 30% больше урона";
        }

        return "";
      },
      levelRequirment: 50,
      iconSource: `${process.env.PUBLIC_URL}/assets/agility/FO76_Gun_Fu.png`,
      selectedStars: 1,
      type: SPECIALS.AGILITY,
      order: 30,
    },
  ],
  type: SPECIALS.AGILITY,
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

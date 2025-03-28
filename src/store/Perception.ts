import { create } from "zustand";

import { PerkStoreData } from "../types/Perk";
import { SPECIALS } from "../entities/Specials";

export const usePerceptionStore = create<PerkStoreData>((set) => ({
  perkList: [
    {
      perkId: "rifleman",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Неавтоматические карабины наносят на 10% больше урона";
        }

        if (stars === 2) {
          return "Неавтоматические карабины наносят на 15% больше урона";
        }

        if (stars === 3) {
          return "Неавтоматические карабины наносят на 20% больше урона";
        }

        return "Неавтоматические карабины наносят на 10% больше урона";
      },
      title: "Стрелок из карабинов",
      levelRequirment: 2,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/Fo4_Rifleman.png`,
      modificator: 10,
      modificatorStep: 5,
      selectedStars: 1,
    },
    {
      perkId: "concetratedFire",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете возможность выбирать через VATS конечности противников, также ваш урон увеличивается на 0.1, точность увеличивается на 10% при стрельбе через VATS";
        }

        if (stars === 2) {
          return "Вы получаете возможность выбирать через VATS конечности противников, также ваш урон увеличивается на 0.2, точность увеличивается на 15% при стрельбе через VATS";
        }

        if (stars === 3) {
          return "Вы получаете возможность выбирать через VATS конечности противников, также ваш урон увеличивается на 0.3, точность увеличивается на 20% при стрельбе через VATS";
        }

        return "Вы получаете возможность выбирать через VATS конечности противников, также ваш урон увеличивается на 0.1, точность увеличивается на 10% при стрельбе через VATS";
      },
      title: "Массированный огонь",
      levelRequirment: 2,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Concentrated_Fire.png`,
      modificator: 10,
      modificatorStep: 5,
      sideModificator: 0.01,
      sideModificatorStep: 0.01,
      selectedStars: 1,
    },
    {
      perkId: "archer",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Луки и арбалеты наносят на 10% больше урона";
        }

        if (stars === 2) {
          return "Луки и арбалеты наносят на 15% больше урона";
        }

        if (stars === 3) {
          return "Луки и арбалеты наносят на 20% больше урона";
        }

        return "Луки и арбалеты наносят на 10% больше урона";
      },
      title: "Лучник",
      levelRequirment: 2,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Archer.png`,
      modificator: 10,
      modificatorStep: 5,
      selectedStars: 1,
    },
    {
      perkId: "butchersBounty",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Шанс выпадения мяса из трупа животного увеличен на 40%";
        }

        if (stars === 2) {
          return "Шанс выпадения мяса из трупа животного увеличен на 60%";
        }

        if (stars === 3) {
          return "Шанс выпадения мяса из трупа животного увеличен на 80%";
        }

        return "Шанс выпадения мяса из трупа животного увеличен на 40%";
      },
      title: "Награда мясника",
      levelRequirment: 3,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Butchers_Bounty.png`,
      modificator: 40,
      modificatorStep: 20,
      selectedStars: 1,
    },
    {
      perkId: "greenThumb",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы собираете в два раза больше растений";
        }

        return "Вы собираете в два раза больше растений";
      },
      title: "Садовник",
      levelRequirment: 4,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Green_Thumb.png`,
      modificator: 2,
      modificatorStep: 1,
      selectedStars: 1,
    },
    {
      perkId: "picklock",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +1 к навыкам взлома, область успешного взлома больше на 10%";
        }

        return "Вы получаете +1 к навыкам взлома, область успешного взлома больше на 10%";
      },
      title: "Взломщик",
      levelRequirment: 5,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Picklock.png`,
      modificator: 10,
      modificatorStep: 1,
      selectedStars: 1,
    },
    {
      perkId: "commando",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Автоматическое оружие наносит на 10% больше урона";
        }

        if (stars === 2) {
          return "Автоматическое оружие наносит на 15% больше урона";
        }

        if (stars === 3) {
          return "Автоматическое оружие наносит на 20% больше урона";
        }

        return "Автоматическое оружие наносит на 10% больше урона";
      },
      title: "Коммандос",
      levelRequirment: 5,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Commando.png`,
      modificator: 10,
      modificatorStep: 5,
      selectedStars: 1,
    },
    {
      perkId: "fireInTheHole",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "При броске вы видите линию полёта метаемого снаряда, ваши снаряды летят на 15% дальше";
        }

        if (stars === 2) {
          return "При броске вы видите линию полёта метаемого снаряда, ваши снаряды летят на 30% дальше";
        }

        if (stars === 3) {
          return "При броске вы видите линию полёта метаемого снаряда, ваши снаряды летят на 50% дальше";
        }

        return "При броске вы видите линию полёта метаемого снаряда, ваши снаряды летят на 15% дальше";
      },
      title: "Ложись!",
      levelRequirment: 5,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Fire_in_the_Hole.png`,
      modificator: 15,
      modificatorStep: 15,
      maxModificatorStep: 50,
      selectedStars: 1,
    },
    {
      perkId: "bowBeforeMe",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши стрелы из лука и арбалета игнорируют 12% брони и имеют 3% шанс ошеломить противника";
        }

        if (stars === 2) {
          return "Ваши стрелы из лука и арбалета игнорируют 24% брони и имеют 6% шанс ошеломить противника";
        }

        if (stars === 3) {
          return "Ваши стрелы из лука и арбалета игнорируют 36% брони и имеют 9% шанс ошеломить противника";
        }

        return "Ваши стрелы из лука и арбалета игнорируют 12% брони и имеют 3% шанс ошеломить противника";
      },
      title: "Талантливый лучник",
      levelRequirment: 6,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Bow_Before_Me.png`,
      modificator: 12,
      modificatorStep: 12,
      sideModificator: 3,
      sideModificatorStep: 3,
      selectedStars: 1,
    },
    {
      perkId: "crackShot",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "При стрельбе из пистолета в режиме прицеливания вы получаете на 10% больше дальнобойности и увеличенную точность";
        }

        if (stars === 2) {
          return "При стрельбе из пистолета в режиме прицеливания вы получаете на 20% больше дальнобойности и увеличенную точность";
        }

        if (stars === 3) {
          return "При стрельбе из пистолета в режиме прицеливания вы получаете на 30% больше дальнобойности и увеличенную точность";
        }

        return "При стрельбе из пистолета в режиме прицеливания вы получаете на 10% больше дальнобойности и увеличенную точность";
      },
      title: "Прирожденный стрелок",
      levelRequirment: 7,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Crack_Shot.png`,
      modificator: 10,
      modificatorStep: 10,
      selectedStars: 1,
    },
    {
      perkId: "skeetShooter",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваша стрельба из дробовика имеет улучшению точность и уменьшенный разброс";
        }

        if (stars === 2) {
          return "Ваша стрельба из дробовика имеет более улучшению точность и уменьшенный разброс";
        }

        if (stars === 3) {
          return "Ваша стрельба из дробовика имеет ещё более улучшению точность и уменьшенный разброс";
        }

        return "Ваша стрельба из дробовика имеет улучшению точность и уменьшенный разброс";
      },
      title: "Стрельба по тарелкам",
      levelRequirment: 10,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Skeet_Shooter.png`,
      modificator: 0,
      modificatorStep: 0,
      selectedStars: 1,
    },
    {
      perkId: "pannapictagraphist",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "У вас чутье на журналы, вы слышите специальный аудиосигнал когда рядом с вами есть журнал";
        }

        return "У вас чутье на журналы, вы слышите специальный аудиосигнал когда рядом с вами есть журнал";
      },
      title: "Коллекционер журналов",
      levelRequirment: 12,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Pannapictagraphist.png`,
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 1,
    },
    {
      perkId: "exterminator",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы игнорируете 25% брони любого насекомого";
        }

        if (stars === 2) {
          return "Вы игнорируете 50% брони любого насекомого";
        }

        if (stars === 3) {
          return "Вы игнорируете 75% брони любого насекомого";
        }

        return "Вы игнорируете 25% брони любого насекомого";
      },
      title: "Дезинсектор",
      levelRequirment: 14,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Exterminator.png`,
      modificator: 25,
      modificatorStep: 25,
      selectedStars: 1,
    },
    {
      perkId: "expertRifleman",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Неавтоматические карабины наносят на 10% больше урона";
        }

        if (stars === 2) {
          return "Неавтоматические карабины наносят на 15% больше урона";
        }

        if (stars === 3) {
          return "Неавтоматические карабины наносят на 20% больше урона";
        }

        return "Неавтоматические карабины наносят на 10% больше урона";
      },
      title: "Эксперт по карабинам",
      levelRequirment: 10,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/Fo4_Rifleman.png`,
      modificator: 10,
      modificatorStep: 5,
      selectedStars: 1,
    },
    {
      perkId: "expertArcher",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши луки и арбалеты наносят на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваши луки и арбалеты наносят на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваши луки и арбалеты наносят на 20% больше урона";
        }

        return "Ваши луки и арбалеты наносят на 10% больше урона";
      },
      title: "Эксперт лучник",
      levelRequirment: 15,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Archer_Expert.png`,
      modificator: 10,
      modificatorStep: 5,
      selectedStars: 1,
    },
    {
      perkId: "perceptiBobble",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "У вас чутье на пупсов, вы слышите специальный аудиосигнал когда рядом с вами есть пупс";
        }

        return "У вас чутье на пупсов, вы слышите специальный аудиосигнал когда рядом с вами есть пупс";
      },
      title: "Пупсолокатор",
      levelRequirment: 16,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Percepti-bobble.png`,
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 1,
    },
    {
      perkId: "groundPounder",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы перезаряжаете винтовки на 10% быстрее, ваша точность при стрельбе от бедра повышена";
        }

        if (stars === 2) {
          return "Вы перезаряжаете винтовки на 20% быстрее, ваша точность при стрельбе от бедра повышена";
        }

        if (stars === 3) {
          return "Вы перезаряжаете винтовки на 30% быстрее, ваша точность при стрельбе от бедра повышена";
        }

        return "Вы перезаряжаете винтовки на 10% быстрее, ваша точность при стрельбе от бедра повышена";
      },
      title: "Пехотинец",
      levelRequirment: 18,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Ground_Pounder.png`,
      modificator: 10,
      modificatorStep: 10,
      sideModificator: 0.85,
      sideModificatorStep: 0.15,
      selectedStars: 1,
    },
    {
      perkId: "expertPicklock",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Область успешного взлома больше на 10%, +1 к навыку взлома";
        }

        return "Область успешного взлома больше на 10%, +1 к навыку взлома";
      },
      title: "Опытный взломщик",
      levelRequirment: 19,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Expert_Picklock.png`,
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 1,
    },
    {
      perkId: "expertCommando",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Автоматическое оружие наносит на 10% больше урона";
        }

        if (stars === 2) {
          return "Автоматическое оружие наносит на 15% больше урона";
        }

        if (stars === 3) {
          return "Автоматическое оружие наносит на 20% больше урона";
        }

        return "Автоматическое оружие наносит на 10% больше урона";
      },
      title: "Эксперт коммандос",
      levelRequirment: 20,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Expert_Commando.png`,
      modificator: 10,
      modificatorStep: 5,
      selectedStars: 1,
    },
    {
      perkId: "awareness",
      cost: 2,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Интерфейс режима VATS показывает дополнительную информацию о сопротивлениях противника";
        }

        return "Интерфейс режима VATS показывает дополнительную информацию о сопротивлениях противника";
      },
      title: "Осведомленность",
      levelRequirment: 20,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Awareness.png`,
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 1,
    },

    {
      perkId: "fortuneFinder",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете возможность слышать аудиосигнал, когда поблизости есть тайник с крышками";
        }

        return "Вы получаете возможность слышать аудиосигнал, когда поблизости есть тайник с крышками";
      },
      title: "Кладоискатель",
      levelRequirment: 22,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Fortune_Finder.png`,
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 1,
    },
    {
      perkId: "nightPerson",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +1 к интеллекту и восприятию во временной интервал между с 6ч вечера и до 6ч утра";
        }

        if (stars === 2) {
          return "Вы получаете +2 к интеллекту и восприятию во временной интервал между с 6ч вечера и до 6ч утра";
        }

        if (stars === 3) {
          return "Вы получаете +3 к интеллекту и восприятию во временной интервал между с 6ч вечера и до 6ч утра";
        }

        return "Вы получаете +1 к интеллекту и восприятию во временной интервал между с 6ч вечера и до 6ч утра";
      },
      title: "Ночное существо",
      levelRequirment: 24,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Night_Person.png`,
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 1,
    },
    {
      perkId: "sniper",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете возможность удерживать дыхание в режиме прицеливания на 25% дольше";
        }

        if (stars === 2) {
          return "Вы получаете возможность удерживать дыхание в режиме прицеливания на 50% дольше";
        }

        if (stars === 3) {
          return "Вы получаете возможность удерживать дыхание в режиме прицеливания на 75% дольше";
        }

        return "Вы получаете возможность удерживать дыхание в режиме прицеливания на 25% дольше";
      },
      title: "Снайпер",
      levelRequirment: 28,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Sniper.png`,
      modificator: 25,
      modificatorStep: 25,
      selectedStars: 1,
    },
    {
      perkId: "tankKiller",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши пистолеты и винтовки игнорируют 12% брони противника и имеют 3% шанс ошеломления";
        }

        if (stars === 2) {
          return "Ваши пистолеты и винтовки игнорируют 24% брони противника и имеют 6% шанс ошеломления";
        }

        if (stars === 3) {
          return "Ваши пистолеты и винтовки игнорируют 36% брони противника и имеют 9% шанс ошеломления";
        }

        return "Ваши пистолеты и винтовки игнорируют 12% брони противника и имеют 3% шанс ошеломления";
      },
      title: "Убийца танков",
      levelRequirment: 30,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Tank_Killer.png`,
      modificator: 12,
      modificatorStep: 12,
      sideModificator: 3,
      sideModificatorStep: 3,
      selectedStars: 1,
    },
    {
      perkId: "refractor",
      cost: 1,
      totalAmountOfStars: 4,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете +10 к сопротивлению энерго урону";
        }

        if (stars === 2) {
          return "Вы получаете +20 к сопротивлению энерго урону";
        }

        if (stars === 3) {
          return "Вы получаете +30 к сопротивлению энерго урону";
        }

        if (stars === 4) {
          return "Вы получаете +40 к сопротивлению энерго урону";
        }

        return "Вы получаете +10 к сопротивлению энерго урону";
      },
      title: "Отражатель",
      levelRequirment: 32,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Refractor.png`,
      modificator: 10,
      modificatorStep: 10,
      selectedStars: 1,
    },
    {
      perkId: "glowSight",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы наносите на 20% больше урона светящимся противникам";
        }

        if (stars === 2) {
          return "Вы наносите на 40% больше урона светящимся противникам";
        }

        if (stars === 3) {
          return "Вы наносите на 60% больше урона светящимся противникам";
        }

        return "Вы наносите на 20% больше урона светящимся противникам";
      },
      title: "Прицел с подсветкой",
      levelRequirment: 33,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Glow_Sight.png`,
      modificator: 20,
      modificatorStep: 20,
      selectedStars: 1,
    },
    {
      perkId: "masterRifleman",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Неавтоматические карабины наносят на 10% больше урона";
        }

        if (stars === 2) {
          return "Неавтоматические карабины наносят на 15% больше урона";
        }

        if (stars === 3) {
          return "Неавтоматические карабины наносят на 20% больше урона";
        }

        return "Неавтоматические карабины наносят на 10% больше урона";
      },
      title: "Мастер стрелок из карабина",
      levelRequirment: 35,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Master_Rifleman.png`,
      modificator: 10,
      modificatorStep: 5,
      selectedStars: 1,
    },
    {
      perkId: "grenadier",
      cost: 1,
      totalAmountOfStars: 2,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Радиус поражения у вашей взрывчатки увеличен на 50%";
        }

        if (stars === 2) {
          return "Радиус поражения у вашей взрывчатки увеличен вдвое";
        }

        return "Радиус поражения у вашей взрывчатки увеличен на 50%";
      },
      title: "Гренадёр",
      levelRequirment: 35,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Grenadier.png`,
      modificator: 50,
      modificatorStep: 50,
      selectedStars: 1,
    },
    {
      perkId: "masterArcher",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Ваши луки и арбалеты наносят на 10% больше урона";
        }

        if (stars === 2) {
          return "Ваши луки и арбалеты наносят на 15% больше урона";
        }

        if (stars === 3) {
          return "Ваши луки и арбалеты наносят на 20% больше урона";
        }

        return "Ваши луки и арбалеты наносят на 10% больше урона";
      },
      title: "Мастер лучник",
      levelRequirment: 35,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Archer_Master.png`,
      modificator: 10,
      modificatorStep: 5,
      selectedStars: 1,
    },
    {
      perkId: "longShot",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Винтовки в режиме прицеливания получают +10% к дальности боя и точности";
        }

        if (stars === 2) {
          return "Винтовки в режиме прицеливания получают +20% к дальности боя и точности";
        }

        if (stars === 3) {
          return "Винтовки в режиме прицеливания получают +30% к дальности боя и точности";
        }

        return "Винтовки в режиме прицеливания получают +10% к дальности боя и точности";
      },
      title: "Выстрел с дистанции",
      levelRequirment: 37,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Long_Shot.png`,
      modificator: 10,
      modificatorStep: 10,
      selectedStars: 1,
    },
    {
      perkId: "masterCommando",
      cost: 1,
      totalAmountOfStars: 3,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Автоматическое оружие наносит на 10% больше урона";
        }

        if (stars === 2) {
          return "Автоматическое оружие наносит на 15% больше урона";
        }

        if (stars === 3) {
          return "Автоматическое оружие наносит на 20% больше урона";
        }

        return "Автоматическое оружие наносит на 10% больше урона";
      },
      title: "Мастер коммандос",
      levelRequirment: 40,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Master_Commando.png`,
      modificator: 10,
      modificatorStep: 5,
      selectedStars: 1,
    },
    {
      perkId: "masterLockPick",
      cost: 1,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Область успешного взлома больше на 10%, +1 к навыку взлома";
        }

        return "Область успешного взлома больше на 10%, +1 к навыку взлома";
      },
      title: "Эксперт взломщик",
      levelRequirment: 40,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Master_Picklock.png`,
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 1,
    },
    {
      perkId: "nightEyes",
      cost: 2,
      totalAmountOfStars: 1,
      getDescriptionBasedOnStars: (stars: number) => {
        if (stars === 1) {
          return "Вы получаете возможность ночного видения в режиме скрытности";
        }

        return "Вы получаете возможность ночного видения в режиме скрытности";
      },
      title: "Ночное зрение",
      levelRequirment: 50,
      iconSource: `${process.env.PUBLIC_URL}/assets/perception/FO76_Night_Eyes.png`,
      modificator: 1,
      modificatorStep: 1,
      selectedStars: 1,
    },
  ],
  type: SPECIALS.PERCEPTION,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}));

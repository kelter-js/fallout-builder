import { makeAutoObservable } from "mobx";

interface IPerk {
  perkId: string;
  totalAmountOfStars: number;
  cost: number;
  description: string;
  title: string;
  levelRequirment: number;
  iconSource: string;
  modificator: number;
  modificatorStep: number;
}

class MainStore {
  perkList: IPerk[] = [
    {
      perkId: 'gladiator',
      cost: 1,
      totalAmountOfStars: 3,
      description: 'Ваше одноручное оружие ближнего боя наносит на 10% больше урона',
      title: 'Гладиатор',
      levelRequirment: 2,
      iconSource: '',
      modificator: 10,
      modificatorStep: 5,
    },
    {
      perkId: 'travelingPharmacy',
      cost: 1,
      totalAmountOfStars: 3,
      description: 'Вес всех препаратов (включая стимпаки) уменьшен на 30%',
      title: 'Странствующая аптека',
      levelRequirment: 3,
      iconSource: '',
      modificator: 30,
      modificatorStep: 30,
    },
    {
      perkId: 'ironFist',
      cost: 1,
      totalAmountOfStars: 3,
      description: 'Урон от ударов кулаками повышен на 10%',
      title: 'Железный кулак',
      levelRequirment: 3,
      iconSource: '',
      modificator: 10,
      modificatorStep: 5,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  };
};

export default new MainStore();
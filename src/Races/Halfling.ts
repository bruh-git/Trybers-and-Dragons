import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _instanceCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instanceCreated += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instanceCreated;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
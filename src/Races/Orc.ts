import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static _instanceCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instanceCreated += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instanceCreated;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
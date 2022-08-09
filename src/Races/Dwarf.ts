import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _instanceCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instanceCreated += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instanceCreated;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
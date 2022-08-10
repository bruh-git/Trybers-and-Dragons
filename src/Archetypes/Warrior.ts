import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _instanceCreated = 0;

  constructor(name: string) {
    super(name);
    Warrior._instanceCreated += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior._instanceCreated;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}
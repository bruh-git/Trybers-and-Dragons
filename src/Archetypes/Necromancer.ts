import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _instanceCreated = 0;

  constructor(name: string) {
    super(name);
    Necromancer._instanceCreated += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instanceCreated;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}
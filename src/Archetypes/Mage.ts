import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _instanceCreated = 0;

  constructor(name: string) {
    super(name);
    Mage._instanceCreated += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage._instanceCreated;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}
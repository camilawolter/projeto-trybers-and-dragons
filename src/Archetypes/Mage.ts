import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _eneryType: EnergyType = 'mana';
  static numberInstances = 0;

  constructor(name: string) {
    super(name);
    Mage.numberInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.numberInstances;
  }

  get energyType(): EnergyType {
    return this._eneryType;
  }
}
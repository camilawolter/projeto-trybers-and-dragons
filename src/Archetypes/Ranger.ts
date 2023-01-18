import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _eneryType: EnergyType = 'stamina';
  static numberInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger.numberInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.numberInstances;
  }

  get energyType(): EnergyType {
    return this._eneryType;
  }
}
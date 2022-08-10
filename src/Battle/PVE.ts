import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player: Fighter, private _environments: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    this._environments.forEach((environment) => {
      this.player.attack(environment);
      environment.attack(this.player);
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
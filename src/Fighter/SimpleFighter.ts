import Fighter from '../Fighter';

export default interface SimpleFighter extends Fighter{
  attack(enemy: SimpleFighter): void;
}
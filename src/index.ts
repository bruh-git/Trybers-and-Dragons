import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVE, PVP } from './Battle';
import getRandomInt from './utils';

const player1 = new Character('Bruna');
const player2 = new Character('Eduarda');
const player3 = new Character('Thiago');

for (let i = 0; i < getRandomInt(1, 5) + 1; i += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
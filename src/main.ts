import Spawner from 'controllers/spawner';

export const loop = () => {
  console.log(`Current game tick is ${Game.time}`)

  Spawner.run();
  for (let name in Game.creeps) {
    const creep = Game.creeps[name];
  }

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
};

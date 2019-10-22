import { expect } from 'chai';
import Spawner from 'controllers/spawner';

describe('spawner', () => {
  beforeEach(() => {
    // @ts-ignore : allow adding Game to global
    global.Game = _.clone(Game);
    // @ts-ignore : allow adding Memory to global
    global.Memory = _.clone(Memory);
    // spawner = new Spawner();
  })
  it('should not spawn when no energy', () => {
    Spawner.run();
    expect(Game.creeps).to.have.lengthOf(0);
  });
  it('should spawn worker when enough energy and no other creeps', () => {
    // TODO
  });
})

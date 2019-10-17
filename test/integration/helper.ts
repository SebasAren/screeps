const { readFileSync } = require('fs');
const { ScreepsServer, stdHooks } = require('screeps-server-mockup');
const DIST_MAIN_JS = 'dist/main.js';

/*
 * Helper class for creating a ScreepsServer and resetting it between tests.
 * See https://github.com/Hiryus/screeps-server-mockup for instructions on
 * manipulating the terrain and game state.
 */
class IntegrationTestHelper {
  private SERVER;
  private PLAYER;

  get server() {
    return this.SERVER;
  }

  get player() {
    return this.PLAYER;
  }

  public async beforeEach() {
    this.SERVER = new ScreepsServer();

    // reset world but add invaders and source keepers bots
    await this.SERVER.world.reset();

    // create a stub world composed of 9 rooms with sources and controller
    await this.SERVER.world.stubWorld();

    // add a player with the built dist/main.js file
    const modules = {
        main: readFileSync(DIST_MAIN_JS).toString(),
    };
    this.PLAYER = await this.SERVER.world.addBot({ username: 'player', room: 'W0N1', x: 15, y: 15, modules });

    // Start server
    await this.SERVER.start();
  }

  public async afterEach() {
    await this.SERVER.stop();
  }
}

beforeEach(async () => {
  await helper.beforeEach();
});

afterEach(async () => {
  await helper.afterEach();
});

before(() => {
  stdHooks.hookWrite();
});

after(() => {
  process.exit();
});

export const helper = new IntegrationTestHelper();

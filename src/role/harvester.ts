import CreepController from 'role';

export default class RoleHarvester implements CreepController {
  public creep: Creep;

  constructor(creep: Creep) {
    this.creep = creep;
  }

  run() {
    if (this.creep.carry.energy < this.creep.carryCapacity) {
      let sources = this.creep.room.find(FIND_SOURCES);
      if (this.creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        this.creep.moveTo(sources[0]);
      }
    } else {
      if (this.creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        this.creep.moveTo(Game.spawns['Spawn1']);
      }
    }
  }
}

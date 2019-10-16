'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const loop = () => {
    console.log(`Current game tick is ${Game.time}`);
    // Automatically delete memory of missing creeps
    for (const name in Memory.creeps) {
        if (!(name in Game.creeps)) {
            delete Memory.creeps[name];
        }
    }
};

exports.loop = loop;
//# sourceMappingURL=main.js.map

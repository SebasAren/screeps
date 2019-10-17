import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import screeps from 'rollup-plugin-screeps';

let cfg;
const dest = process.env.DEST;
if (!dest) {
 console.log("No destination specified - code will be compiled but not uploaded");
} else if ((cfg = require("./screeps.json")[dest]) == null) {
  throw new Error("Invalid upload destination");
}

export default {
  input: 'src/main.ts',
  plugins: [
    clear({ targets: ['dist'] }),
    resolve(),
    typescript({tsconfig: './tsconfig.json'}),
    screeps({ config: cfg, dryRun: cfg == null }),
  ],
  output: {
    file: 'dist/main.js',
    format: 'cjs',
    sourcemap: true,
  }
}

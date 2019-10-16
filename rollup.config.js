import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/main.ts',
  plugins: [
    clear({ targets: ['dist'] }),
    resolve(),
    commonjs(),
    typescript({tsconfig: './tsconfig.json'}),
  ],
  output: {
    file: 'dist/main.js',
    format: 'cjs',
    sourcemap: true,
  }
}

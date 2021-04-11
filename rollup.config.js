import ts from "rollup-plugin-typescript2"
import sourceMaps from "rollup-plugin-sourcemaps"
import { uglify } from "rollup-plugin-uglify"
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './src/index.ts',
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    console.error(warning.message);
  },
  plugins: [
    ts({
      useTsconfigDeclarationDir: true
    }),
    sourceMaps(),
    uglify(),
    resolve({ preferBuiltins: false, mainFields: ['browser'] }),
    commonjs()
  ],
  output: [
    {
      format: "cjs",
      file: "dist/ts-3dtiles.cjs.js",
      sourcemap: true
    },
    {
      format: "es",
      file: "dist/ts-3dtiles.esm.js",
      sourcemap: true
    },
    {
      format: "umd",
      file: "dist/ts-3dtiles.umd.js",
      name: "ts3dtils",
      sourcemap: true
    }
  ]
}
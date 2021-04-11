import ts from "rollup-plugin-typescript2"
import sourceMaps from "rollup-plugin-sourcemaps"
import { uglify } from "rollup-plugin-uglify"
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const rollupConfig = {
  input: './src/index.ts',
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    console.error(warning.message);
  },
  /** plugins 必须有顺序的使用 */
  plugins: [
    // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs(),
    resolve({ preferBuiltins: false, mainFields: ['browser'] }),

    ts({
      useTsconfigDeclarationDir: true
    }),
    sourceMaps(),
    uglify(),
  ],
  output: [
    {
      format: "cjs",
      file: "dist/ts-3dtiles.common.js",
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

export default rollupConfig
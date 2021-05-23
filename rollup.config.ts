import typescript from "rollup-plugin-typescript2" // 处理typescript
import json from "@rollup/plugin-json"
import sourceMaps from "rollup-plugin-sourcemaps"
import resolve from "rollup-plugin-node-resolve" // 你的包用到第三方npm包
import commonjs from "rollup-plugin-commonjs" // 你的包用到的第三方只有commonjs形式的包
import builtins from "rollup-plugin-node-builtins" // 如果你的包或依赖用到了node环境的builtins fs等
import { terser } from "rollup-plugin-terser" // 压缩，可以判断模式，开发模式不加入到plugins

const isUnminifined = process.env.build === "unminifined"

const basePlugins = [
  typescript({ useTsconfigDeclarationDir: true }),
  json(),
  builtins(),
  resolve({ preferBuiltins: false, mainFields: ["browser"] }),
  commonjs(),
  sourceMaps()
]
const devPlugins = []
const minifinedPlugins = [terser()]

const plugins = [...basePlugins].concat(isUnminifined ? devPlugins : minifinedPlugins)

const rollupConfig = {
  input: "./src/index.ts",
  onwarn: function (warning) {
    if (warning.code === "THIS_IS_UNDEFINED") {
      return
    }
    console.error(warning.message)
  },
  /** plugins 必须有顺序的使用 */
  plugins: plugins,
  output: [
    {
      format: "cjs",
      file: "dist/commonjs/index.js",
      sourcemap: true
    },
    {
      format: "es",
      file: "dist/esmodule/ts-3dtiles.esm.js",
      sourcemap: true
    },
    {
      format: "umd",
      file: "dist/umd/ts-3dtiles.umd.js",
      name: "ts3dtiles",
      sourcemap: true
    }
  ]
}

export default rollupConfig

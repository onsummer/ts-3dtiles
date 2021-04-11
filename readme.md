# 介绍

一个个人玩具项目，使用 typescript 编写的用于解析、读取：

- gltf/glb
- 3dtiles -> tileset.json
- 3dtiles -> tile文件

的库。

在未来，或许提供插件机制，支持创建 gltf、3dtiles

# 使用

在浏览器端有两种用法，一种是使用浏览器已经支持的 esm 方式加载：

``` html
<script type="module">
  import * as SDK from './ts-3dtiles.esm.js'
  // or
  // import { GLTFDocument, Tileset } from './ts-3dtiles.esm.js'
</script>
```

另一种是传统的方式。

``` html
<script src="./ts-3dtiles.umd.js"></script>
```

输出全局对象 `ts3dtiles` 即可使用。(如果你不喜欢这个变量名，可以自己替换一个全局变量名，`const you_like = ts3dtiles;`)

``` 
> ts3dtils

> {Asset: ƒ, B3dm: ƒ, B3dmHeader: ƒ, BatchTable: ƒ, Cmpt: ƒ, …}
  Asset: class
  B3dm: class
  B3dmHeader: class v
  BatchTable: class x
  Cmpt: class
  ...
```

# 文档

// TODO ：jsDoc配置
// TODO ：代码注释

# TODO

- `gltf` 完善 gltf 全线属性读取能力
- `gltf` gltf 的创建功能
  - 支持 gltf 创建功能的插件机制，允许外部编写程序进行转换
- `tileset` 读取层级 BatchTable 的能力
- `gltf` 支持 draco 读取，使用 wasm 库
- `tileset` 接入 3dtiles-next 扩展特性

# 所用到的第三方库

- iobuffer：操作二进制数据
- @valeera/mathx：线性代数基础运算
- gl-matrix：线性代数基础运算
- uri-js：操作URI

- rollup：打包用
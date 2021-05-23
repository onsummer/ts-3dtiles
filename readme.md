# 1 介绍

一个个人玩具项目，使用 typescript 编写的用于解析、读取：

- gltf/glb
- 3dtiles -> tileset.json
- 3dtiles -> tile文件

的库。

在未来，或许提供插件机制，支持创建 gltf、3dtiles

# 2 上手使用

在浏览器端有两种用法，一种是使用浏览器已经支持的 esm 方式加载：

``` html
<script type="module">
  import * as SDK from './ts-3dtiles.esm.js'
</script>
```

或者使用解构赋值来获取函数：
```html
<script type="module">
  import { GLTFDocument, Tileset } from './ts-3dtiles.esm.js'
</script>
```

另一种是传统的方式。

``` html
<script src="./ts-3dtiles.umd.js"></script>
<script>
  console.log(ts3dtiles)
</script>
```

输出全局对象 `ts3dtiles` 即可使用。

``` 
> ts3dtiles

> {Asset: ƒ, B3dm: ƒ, B3dmHeader: ƒ, BatchTable: ƒ, Cmpt: ƒ, …}
  Asset: class
  B3dm: class
  B3dmHeader: class v
  BatchTable: class x
  Cmpt: class
  ...
```

如果你不喜欢这个变量名，可以自己替换一个全局变量名，`const you_like = ts3dtiles;`

``` html
<script src="./ts-3dtiles.umd.js"></script>
<script>
  const SDK = window.ts3dtiles
  console.log(SDK)
</script>
```

# 3 文档

// TODO ：jsDoc配置

// TODO ：代码注释

# 4 TODO

- `gltf` gltf 的创建功能 API 设计如下：
  - `Builder API`: 接近 glTF 的属性表达的一种 API，目前已不稳定测试中（2021年5月24日）
  - `Action API`: 一种模块式的增删改查 API，与 `Builder API` 不同的是，`Builder API` 比较合适创建简单的 glTF 模型，而 `Action API` 适合增删改模型
- `tileset` 读取层级 BatchTable 的能力
- `gltf` 支持 draco 读取，使用 wasm 库
- `tileset` 接入 3dtiles-next 扩展特性

# 5 所用到的第三方库

- iobuffer：操作二进制数据
- @valeera/mathx：线性代数基础运算
- gl-matrix：线性代数基础运算
- uri-js：操作URI

- rollup：打包用

# 写入队列

`GLTFWriteQueue`
`GLTFFactory`

写入队列可以拥有N个

- `GLTFUpdateAction`：更新动作
- `GLTFDropAction`：删除动作
- `GLTFAddAction`：添加动作

// TODO
上述三个动作实现了 `IGLTFAction`，该接口规定了以下几个方法：

``` ts
interface IGLTFAction {
  /** methods */
  emit(): void

  /** properties */
  doc: GLTFDocument
  locked: boolean // 是否放在对应资源的对象中比较好？
}
```

// END TODO

最后 submit 时依次执行，若发生写入冲突，则抛出 `GLTFWriteExpecion` 异常。
interface IGLTFWriteAction { 
  type: string
  submit() : boolean
}

export default IGLTFWriteAction

export { default as GLTFAddAction } from './gltf-add-action'
export { default as GLTFDropAction } from './gltf-drop-action'
export { default as GLTFUpdateAction } from './gltf-update-action'

export * from './bag'
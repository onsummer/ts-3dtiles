/// <reference types="node" />
declare const readGLB: (binary: Uint8Array | ArrayBuffer | Buffer) => import("../../core/gltf-document").default;
export default readGLB;

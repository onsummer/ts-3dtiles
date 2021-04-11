function writeDefinedProperty(obj: any, name: string, data: any) {
  if (data !== undefined)
    Object.defineProperty(obj, name, {
      value: data
    })
}

export default writeDefinedProperty
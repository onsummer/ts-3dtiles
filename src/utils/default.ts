export const defaultValue = (obj: any, value: any) => {
  if (obj !== undefined || obj !== null) {
    return obj
  }
  return value
}
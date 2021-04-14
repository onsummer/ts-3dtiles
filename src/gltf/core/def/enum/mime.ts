enum MIME {
  JPG = "image/jpg",
  JPEG = "image/jpeg",
  PNG = "image/png",
  WEBP = "image/webp",
}

export const MIMEValues = Object.freeze(Object.values(MIME) as string[])

export default MIME
export interface IDiscounts {
  id: number
  attributes: Attributes
}

interface Attributes {
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  title: string
  buttonBackground: string
  buttonColor: string
  promo: string
  image: Image
}

interface Image {
  data: Data
}

interface Data {
  id: number
  attributes: Attributes2
}

interface Attributes2 {
  name: string
  alternativeText: string
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

interface Formats {
  small: Small
  medium: Medium
  thumbnail: Thumbnail
}

interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
}

interface Medium {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
}

interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
}

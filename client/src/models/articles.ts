export interface IArticles {
  id: number
  attributes: Attributes
}

interface Attributes {
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  author: string
  time_read: string
  title: string
  summary: string
  content: string
  avatar: Avatar
  img_main: ImgMain
  tags: Tags
  localizations: Localizations
  pagination: Pagination
}

interface Avatar {
  data: Data
}

interface Data {
  id: number
  attributes: Attributes2
}

interface Attributes2 {
  name: string
  alternativeText: string
  caption: string
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

interface ImgMain {
  data: Data2
}

interface Data2 {
  id: number
  attributes: Attributes3
}

interface Attributes3 {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats2
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

interface Formats2 {
  large: Large
  small: Small2
  medium: Medium2
  thumbnail: Thumbnail2
}

interface Large {
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

interface Small2 {
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

interface Medium2 {
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

interface Thumbnail2 {
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

interface Tags {
  data: Daum[]
}

interface Daum {
  id: number
  attributes: Attributes4
}

interface Attributes4 {
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface Localizations {
  data: any[]
}

interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

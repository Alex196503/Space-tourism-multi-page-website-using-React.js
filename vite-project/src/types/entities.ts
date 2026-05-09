export type Destination = {
  id?: string
  name: string
  images?: {
    png?: string
    webp?: string
  }
  description: string
  distance: string
  travel: string
  urlImage?: string
}
export type Crew = {
  name: string
  images?: {
    png?: string
    webp?: string
  }
  role: string
  bio: string
  id?: string
  urlImage?: string
}
export type Technology = {
  name: string
  images?: {
    portrait: string
    landscape: string
  }
  description: string
  id?: string
  urlImage?: string
}

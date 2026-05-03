import { type SetStateAction } from "react"
export interface NavbarList {
  number: string
  title: string
  url: string
}
export interface NavbarListMobile extends NavbarList {
  className: string
}
export type MobileMenuProps = {
  setMobileMenuActive: React.Dispatch<SetStateAction<boolean>>
  isMobileMenuActive: boolean
}
export interface PageHeaderProps {
  number: string
  title: string
}
export type Destination = {
  id: string
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}
export type Crew = {
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
}
export type Technology = {
  name: string
  images: {
    portrait: string
    landscape: string
  }
  description: string
}
export type JSONResponse = {
  crew: Crew[]
  destinations: Destination[]
  technology: Technology[]
}
export interface PlanetProps {
  planetFound: Destination | undefined
  onSetPlanetChosen?: (arg0: string) => void
}
export interface PlanetProps2 extends PlanetProps {
  data: Destination[] | null
}
export type ParameterProps = {
  labels?: string[]
  values?: (string | undefined)[]
}
export interface SecondContainerHeroProps {
  memberFound: Crew | undefined
}
export interface FirstContainerHeroProps extends SecondContainerHeroProps {
  setMember: (arg0: string) => void
  data: Crew[] | null
}
export interface SecondContainerTechProps {
  techFound: Technology | undefined
}
export interface FirstContainerTechProps extends SecondContainerTechProps {
  onSetTech: (arg0: string) => void
  data: Technology[] | null
}

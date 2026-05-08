import { type SetStateAction } from "react"
import type { NavigateFunction } from "react-router-dom"
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
  deleteDestination: (name: string | undefined) => void
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
export interface FullCrewProps extends FirstContainerHeroProps {
  deleteMember: (name: string | undefined) => void
}
export interface SecondContainerTechProps {
  techFound: Technology | undefined
}
export interface ContainerTechPropsWithDelete extends SecondContainerTechProps {
  deleteTech: (name: string | undefined) => void
}
export interface FirstContainerTechProps extends SecondContainerTechProps {
  onSetTech: (arg0: string) => void
  data: Technology[] | null
}
export interface FullTechProps extends FirstContainerTechProps {
  deleteTech: (name: string | undefined) => void
}
export interface UploadInputProps {
  required: boolean
  url: string | undefined
  onChange: (arg0: any) => void
}
export interface CreatePageProps {
  destinations: Destination[]
  setDestinations: React.Dispatch<React.SetStateAction<Destination[]>>
  technologies: Technology[]
  setTechnologies: React.Dispatch<React.SetStateAction<Technology[]>>
  members: Crew[]
  setMembers: React.Dispatch<React.SetStateAction<Crew[]>>
}
export interface CreateFormProps extends CreatePageProps {
  type: string | null
}
export interface TextInputProps {
  children: string
  name: string
  placeholder?: string
  value: string
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement,
      Element
    >
  ) => void
  maxLength?: number
}
export interface TextareaProps extends TextInputProps {
  rows: number
}
export type DestinationPageProps = {
  destinations: Destination[]
  deleteDestination: (name: string | undefined) => void
}
export type CrewPageProps = {
  crews: Crew[]
  deleteMember: (name: string | undefined) => void
}
export type TechPageProps = {
  technologies: Technology[]
  deleteTech: (name: string | undefined) => void
}
export interface DeleteParams<T> {
  name: string | undefined
  type: string
  data: T[]
  setData: React.Dispatch<React.SetStateAction<T[]>>
  navigate: NavigateFunction
  basePath: string
}

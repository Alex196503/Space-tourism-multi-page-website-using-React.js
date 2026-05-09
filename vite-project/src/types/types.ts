import type { NavigateFunction } from "react-router-dom"
export * from "../types/uiTypes"
export * from "../types/entities"
import type { Crew, Technology, Destination } from "../types/entities"
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
export interface UserActionProps {
  element: "planet" | "member" | "technology"
  onDelete: (name: string | undefined) => void
  name: string | undefined
}

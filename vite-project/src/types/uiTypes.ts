import { type SetStateAction } from "react"
import { type Crew, type Technology } from "./types"
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

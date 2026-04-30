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
    web: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}

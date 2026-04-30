import type { NavbarList } from "../../../types/types"
import { NavLink } from "react-router-dom"
export const NavbarItem = ({ number, title, url }: NavbarList) => {
  return (
    <>
      <li className="flex items-center">
        <NavLink to={url} className="flex items-center">
          <span className="span-header">{number}</span>
          <span className="text-white">{title}</span>
        </NavLink>
      </li>
    </>
  )
}

import { Link } from "react-router-dom"
import type { NavbarListMobile } from "../../../types/types"

export const NavbarItemMobile = ({
  number,
  title,
  url,
  className
}: NavbarListMobile) => {
  return (
    <>
      <li className={className}>
        <Link to={url} className="flex items-center">
          <span className="span-header">{number}</span>
          <span className="text-white">{title}</span>
        </Link>
      </li>
    </>
  )
}

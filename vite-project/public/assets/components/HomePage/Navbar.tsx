import { type NavbarList } from "../../../types/types"
import { NavbarItem } from "./NavbarItem"
export const Navbar = () => {
  let lists: NavbarList[] = [
    { number: "00", title: "Home", url: "/" },
    { number: "01", title: "Destination", url: "/destination" },
    { number: "02", title: "Crew", url: "/crew" },
    { number: "03", title: "Technology", url: "/tech" }
  ]
  return (
    <>
      <nav className="hidden md:block md:w-full md:h-[80px] md:flex md:justify-center md:bg-white/5 backdrop-blur-md border-b border-white/10">
        <ul className="flex justify-around items-center w-full max-w-[800px] uppercase font-medium tracking-[2.7px]">
          {lists.map((list) => {
            return (
              <NavbarItem
                key={list.number}
                number={list.number}
                title={list.title}
                url={list.url}
              />
            )
          })}
        </ul>
      </nav>
    </>
  )
}

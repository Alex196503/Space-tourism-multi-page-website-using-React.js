import { type NavbarList } from "../../../types/types"
import { NavbarItemMobile } from "./NavbarItemMobile"

export const MobileHeader = () => {
  let lists: NavbarList[] = [
    { number: "00", title: "Home", url: "/" },
    { number: "01", title: "Destination", url: "/destination" },
    { number: "02", title: "Crew", url: "/crew" },
    { number: "03", title: "Technology", url: "/tech" }
  ]
  return (
    <div className="fixed inset-0 z-50 md:hidden w-[100%] h-screen bg-white/5 backdrop-blur-2xl">
      <section className="flex w-full flex-col pt-20 gap-y-7 items-center">
        <ul className="flex flex-col items-center gap-y-3 uppercase font-barlow tracking-[2.7px] text-base text-white">
          {lists.map((list) => {
            return (
              <NavbarItemMobile
                className="group"
                key={list.number}
                number={list.number}
                title={list.title}
                url={list.url}
              />
            )
          })}
        </ul>
      </section>
    </div>
  )
}

import { GoStarFill } from "react-icons/go"
import { ImMenu } from "react-icons/im"
import { Navbar } from "./Navbar"
import { type MobileMenuProps } from "../../../types/types"
import { MobileHeader } from "./MobileMenuContainer"
let StarPage = GoStarFill as React.ElementType
let HamburgerMenu = ImMenu as React.ElementType
export const Header = ({
  setMobileMenuActive,
  isMobileMenuActive
}: MobileMenuProps) => {
  return (
    <header
      id="header"
      className="w-full relative flex justify-between gap-x-5 items-center pl-10 py-6 px-4 md:pt-10"
    >
      <div className="w-[40px] mt-4 md:mt-0 h-[40px] md:w-[80px] md:h-[60px] bg-white rounded-[50%] flex items-center justify-center">
        <StarPage className="cursor-pointer text-black w-[20px] h-[40px]" />
      </div>
      <button
        type="button"
        className="relative z-100 cursor-pointer block md:hidden"
        onClick={() => setMobileMenuActive(!isMobileMenuActive)}
      >
        {" "}
        <HamburgerMenu />{" "}
      </button>
      <section className="hidden lg:block ml-6 w-[450px] h-[2px] border-1 border-[#D0D6F9] "></section>
      {isMobileMenuActive && <MobileHeader />}
      <Navbar />
    </header>
  )
}

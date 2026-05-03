import type { MobileMenuProps } from "../../../types/types"
import { useEffect } from "react"
export const FirstHeroSection = ({
  setMobileMenuActive,
  isMobileMenuActive
}: MobileMenuProps) => {
  useEffect(() => {
    const handleResize = () => {
      let width = window.innerWidth
      if (width !== null && width >= 768) {
        setMobileMenuActive(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <>
      <section className="first-section">
        {!isMobileMenuActive && (
          <h2 className="uppercase font-barlow  tracking-[4.75px] text-base md:text-xl mb-6">
            So, you want to travel to
          </h2>
        )}
        <h1 className="uppercase font-medium text-gray-300 md:text-9xl text-4xl py-4">
          Space
        </h1>
        <p className="text-gray-300 font-light md:w-[460px] text-sm md:text-lg leading-relaxed font-barlow">
          Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the
          edge of it. Well sit back, and relax because we’ll give you
          a truly out of this world experience!
        </p>
      </section>
    </>
  )
}

import { useOutletContext } from "react-router-dom"
import { FirstHeroSection } from "../assets/components/HomePage/FirstHeroSection"
import { SecondHeroSection } from "../assets/components/HomePage/SecondHeroSection"
import { type MobileMenuProps } from "../types/types"
export const HomePage = () => {
  const { isMobileMenuActive, setMobileMenuActive } =
    useOutletContext<MobileMenuProps>()
  return (
    <main className="w-full h-[calc(100vh-175px)] gap-y-10 flex flex-col lg:flex-row items-center lg:items-end justify-between px-6 md:px-24 md:mt-10 py-6 pb-24 lg:pb-32 max-w-[1440px] mx-auto">
      <FirstHeroSection
        isMobileMenuActive={isMobileMenuActive}
        setMobileMenuActive={setMobileMenuActive}
      />
      <SecondHeroSection />
    </main>
  )
}

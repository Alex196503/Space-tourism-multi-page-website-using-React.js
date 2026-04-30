import { ButtonSecondSection } from "./ButtonSecondSection"
export const SecondHeroSection = () => {
  return (
    <>
      <div className="flex items-center justify-center lg:mb-12 relative group">
        <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
        <ButtonSecondSection message="Explore" />
      </div>
    </>
  )
}

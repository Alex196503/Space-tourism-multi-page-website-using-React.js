import { type SecondContainerTechProps } from "../../../types/types"
import { useEffect, useState } from "react"
export const VisualShowcase = ({
  techFound
}: SecondContainerTechProps) => {
  let [isMobileScreenActive, setMobileActive] = useState(
    window.innerWidth <= 768
  )
  useEffect(() => {
    const resizeHandler = () => {
      setMobileActive(window.innerWidth <= 768)
    }
    window.addEventListener("resize", resizeHandler)
    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  }, [])
  return (
    <div className="lg:w-1/2 flex justify-end">
      <div className="w-full h-[310px] md:h-[500px] lg:h-[450px] lg:w-[475px] object-cover bg-cover md:bg-contain bg-no-repeat bg-center">
        <img
          src={
            isMobileScreenActive
              ? techFound?.images.landscape
              : techFound?.images.portrait
          }
          className="w-full h-full"
          alt="Image with our tech"
        />
      </div>
    </div>
  )
}

import { type SecondContainerHeroProps } from "../../../types/types"
export const SecondContainerHero = ({
  memberFound
}: SecondContainerHeroProps) => {
  return (
    <div className="w-full px-5 pb-0">
      <img
        src={memberFound?.images.webp}
        alt="Image with someone from the crew"
        className="object-contain"
      />
    </div>
  )
}

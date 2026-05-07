import { type SecondContainerHeroProps } from "../../../types/types"
export const SecondContainerHero = ({
  memberFound
}: SecondContainerHeroProps) => {
  return (
    <div className="w-full md:px-10 md:ml-10 pb-0">
      <img
        src={memberFound?.images?.webp || memberFound?.urlImage}
        alt="Image with someone from the crew"
        className="object-contain"
      />
    </div>
  )
}

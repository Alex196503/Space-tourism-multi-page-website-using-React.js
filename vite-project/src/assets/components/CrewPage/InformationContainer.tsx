import { type SecondContainerHeroProps } from "../../../types/types"
export const InformationContainer = ({
  memberFound
}: SecondContainerHeroProps) => {
  return (
    <div className="w-full flex flex-col gap-y-3 items-center md:items-start">
      <h3 className="uppercase text-gray-300 text-2xl tracking-wide">
        {memberFound?.role}
      </h3>
      <p className="text-gray-300 text-6xl font-light text-center md:text-left">
        {memberFound?.name}
      </p>
      <p className="text-gray-100 text-sm leading-[1.5] text-center md:text-left font-medium w-full md:max-w-[375px]">
        {memberFound?.bio}
      </p>
    </div>
  )
}

import type { Destination } from "../../../types/types"

export const HeroSection = ({
  planetFound
}: {
  planetFound: Destination | undefined
}) => {
  return (
    <>
      <section className="flex flex-col text-center md:text-left py-10 md:gap-y-7 gap-y-4">
        <h1 className="text-6xl mt-4 uppercase font-light tracking-wider">
          {planetFound?.name}
        </h1>
        <p className="text-[16px] leading-[1.7] text-gray-300 w-[400px] font-medium ">
          {planetFound?.description}
        </p>
        <hr className="mt-4 text-gray-700" />
      </section>
    </>
  )
}

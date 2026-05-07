import type { SecondContainerTechProps } from "../../../types/types"
import { UserActions } from "../HomePage/UserActions"

export const TechSpecs = ({
  techFound
}: SecondContainerTechProps) => (
  <div className="flex flex-col gap-y-4 w-full text-center md:text-left py-7 md:py-4">
    <h1 className="text-gray-300 text-sm uppercase tracking-[1.5px]">
      The terminology...
    </h1>
    <h2 className="text-5xl tracking-widest uppercase mb-4">
      {techFound?.name}
    </h2>
    <p className="mt-3 text-gray-300 text-xl">
      {techFound?.description}
    </p>
    <UserActions element="technology" />
  </div>
)

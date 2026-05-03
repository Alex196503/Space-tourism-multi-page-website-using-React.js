import { StepIndicator } from "./StepIndicator"
import { TechSpecs } from "./TechSpecs"
import { type FirstContainerTechProps } from "../../../types/types"
export const StageContext = ({
  onSetTech,
  techFound,
  data
}: FirstContainerTechProps) => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start lg:w-1/2">
      <StepIndicator
        onSetTech={onSetTech}
        techFound={techFound}
        data={data}
      />
      <TechSpecs techFound={techFound} />
    </section>
  )
}

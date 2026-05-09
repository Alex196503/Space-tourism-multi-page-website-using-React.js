import { PageHeader } from "../assets/components/DestinationPage/PageHeader"
import { StageContext } from "../assets/components/TechnologyPage/StageContext"
import { VisualShowcase } from "../assets/components/TechnologyPage/VisualShowcase"
import type { TechPageProps } from "../types/types"
import { useSearchParams } from "react-router-dom"
export const TechnologyPage = ({
  technologies,
  deleteTech
}: TechPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  let techFromUrl = searchParams.get("name") || "Launch vehicle"
  const changeSet = (name: string) => {
    setSearchParams({ name: name })
  }
  let techFound = technologies?.find(
    (tech) => tech.name === techFromUrl
  )
  //fallback: in case the user edits the name of the default one - Launch vehicle
  if (!techFound && technologies && technologies.length > 0) {
    techFound = technologies[0]
  }
  return (
    <main className="w-full h-full gap-y-10 md:gap-y-0 flex flex-col items-center md:items-center lg:items-start px-6 md:gap-x-50 md:px-24 md:mt-10 py-6 pb-24 lg:pb-32 max-w-[1440px] mx-auto">
      <PageHeader number="03" title="space launch 01" />
      <div className="w-full flex justify-between flex-col md:mt-10 md:py-10 py-5 md:flex-row gap-y-10">
        <StageContext
          onSetTech={changeSet}
          techFound={techFound}
          data={technologies}
          deleteTech={deleteTech}
        />
        <VisualShowcase techFound={techFound} />
      </div>
    </main>
  )
}

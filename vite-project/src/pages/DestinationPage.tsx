import { FirstContainerSection } from "../assets/components/DestinationPage/FirstContainerSection"
import { SecondContainer } from "../assets/components/DestinationPage/SecondContainer"
import type { DestinationPageProps } from "../types/types"
import { useSearchParams } from "react-router-dom"
export const DestinationPage = ({
  destinations,
  deleteDestination
}: DestinationPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  let planetFromUrl = searchParams.get("name") || "Moon"
  let planetFound = destinations?.find(
    (destionation) => destionation.name === planetFromUrl
  )
  const setPlanet = (name: string) => {
    setSearchParams({ name: name })
  }
  return (
    <main className="w-full h-full gap-y-10 md:gap-y-0 flex flex-col lg:flex-row items-center md:items-center lg:items-start px-6 md:gap-x-50 md:px-24 md:mt-10 py-6 pb-24 lg:pb-32 max-w-[1440px] mx-auto">
      <FirstContainerSection planetFound={planetFound} />
      <SecondContainer
        planetFound={planetFound}
        onSetPlanetChosen={setPlanet}
        data={destinations}
        deleteDestination={deleteDestination}
      />
    </main>
  )
}

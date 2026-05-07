import { FirstContainerSection } from "../assets/components/DestinationPage/FirstContainerSection"
import { SecondContainer } from "../assets/components/DestinationPage/SecondContainer"
import { useState } from "react"
import type { Destination } from "../types/types"
export const DestinationPage = ({
  destinations
}: {
  destinations: Destination[]
}) => {
  const [planet, setPlanetChosen] = useState<string | null>("Mars")
  let planetFound = destinations?.find(
    (planeta) => planeta.name === planet
  )
  const setPlanet = (name: string) => {
    setPlanetChosen(name)
  }
  return (
    <main className="w-full h-full gap-y-10 md:gap-y-0 flex flex-col lg:flex-row items-center md:items-center lg:items-start px-6 md:gap-x-50 md:px-24 md:mt-10 py-6 pb-24 lg:pb-32 max-w-[1440px] mx-auto">
      <FirstContainerSection planetFound={planetFound} />
      <SecondContainer
        planetFound={planetFound}
        onSetPlanetChosen={setPlanet}
        data={destinations}
      />
    </main>
  )
}

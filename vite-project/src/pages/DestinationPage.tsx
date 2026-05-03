import { FirstContainerSection } from "../assets/components/DestinationPage/FirstContainerSection"
import { SecondContainer } from "../assets/components/DestinationPage/SecondContainer"
import { useEffect, useState } from "react"
import type { Destination } from "../types/types"
import { fetchingData } from "../utils/HandlerFunction"
export const DestinationPage = () => {
  const [data, setData] = useState<Destination[] | null>([])
  useEffect(() => {
    const loadData = async () => {
      let res = await fetchingData("destinations")
      setData(res)
    }
    loadData()
  }, [])
  const [planet, setPlanetChosen] = useState<string | null>("Mars")
  let planetFound = data?.find((planeta) => planeta.name === planet)
  const setPlanet = (name: string) => {
    setPlanetChosen(name)
  }
  return (
    <main className="w-full h-full gap-y-10 md:gap-y-0 flex flex-col lg:flex-row items-center md:items-center lg:items-start px-6 md:gap-x-50 md:px-24 md:mt-10 py-6 pb-24 lg:pb-32 max-w-[1440px] mx-auto">
      <FirstContainerSection planetFound={planetFound} />
      <SecondContainer
        planetFound={planetFound}
        onSetPlanetChosen={setPlanet}
        data={data}
      />
    </main>
  )
}

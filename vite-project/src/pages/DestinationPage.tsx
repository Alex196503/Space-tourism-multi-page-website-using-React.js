import { FirstContainerSection } from "../assets/components/DestinationPage/FirstContainerSection"
import { SecondContainer } from "../assets/components/DestinationPage/SecondContainer"
import { useEffect, useState } from "react"
export const DestinationPage = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchingData = async (): Promise<void> => {
      try {
        let req = await fetch("../data/data.json")
        if (!req.ok) {
          throw new Error(`The response is not ok! ${req.statusText}`)
        }
        let res = await req.json()
        setData(res)
        console.log(res)
      } catch (err) {
        throw new Error(`Something bad happened! ${err}`)
      }
    }
    fetchingData()
  }, [])
  return (
    <main className="w-full h-full gap-y-10 md:gap-y-0 flex flex-col md:flex-row items-center md:items-start px-6 md:gap-x-50 md:px-24 md:mt-10 py-6 pb-24 lg:pb-32 max-w-[1440px] mx-auto">
      <FirstContainerSection />
      <SecondContainer />
    </main>
  )
}

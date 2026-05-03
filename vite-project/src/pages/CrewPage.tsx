import { SecondContainerHero } from "../assets/components/CrewPage/SecondContainerHero"
import { FirstContainerHero } from "../assets/components/CrewPage/FirstContainerHero"
import { useEffect, useState } from "react"
import { type Crew } from "../types/types"
import { fetchingData } from "../utils/HandlerFunction"
export const CrewPage = () => {
  const [data, setData] = useState<Crew[] | null>([])
  useEffect(() => {
    fetchingData("crew")
      .then((res) => setData(res))
      .catch((error) => console.log(error))
  }, [])
  const [memberChosen, setMemberChosen] = useState<string | null>(
    "Anousheh Ansari"
  )
  const setMember = (name: string) => {
    setMemberChosen(name)
  }
  const memberFound = data?.find(
    (member) => member.name === memberChosen
  )
  return (
    <main className="w-full h-full overflow-auto gap-y-10 md:gap-y-0 flex flex-col lg:flex-row items-center md:items-center lg:items-start px-9  md:px-30 md:mt-10 py-6  max-w-[1440px] mx-auto">
      <FirstContainerHero
        memberFound={memberFound}
        setMember={setMember}
        data={data}
      />
      <SecondContainerHero memberFound={memberFound} />
    </main>
  )
}

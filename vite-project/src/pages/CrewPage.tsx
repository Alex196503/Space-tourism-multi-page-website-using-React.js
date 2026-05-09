import { SecondContainerHero } from "../assets/components/CrewPage/SecondContainerHero"
import { FirstContainerHero } from "../assets/components/CrewPage/FirstContainerHero"
import { type CrewPageProps } from "../types/types"
import { useSearchParams } from "react-router-dom"
export const CrewPage = ({ crews, deleteMember }: CrewPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const memberFromUrl = searchParams.get("name") || "Anousheh Ansari"
  let memberFound = crews.find(
    (member) => member.name === memberFromUrl
  )
  //fallback: in case the user edits the name of the default one - Anousheh Ansari
  if (!memberFound && crews && crews.length > 0) {
    memberFound = crews[0]
  }
  const setMember = (name: string) => {
    setSearchParams({ name: name })
  }
  return (
    <main className="w-full h-full overflow-auto gap-y-10 md:gap-y-0 flex flex-col lg:flex-row items-center md:items-center lg:items-start px-9  md:px-30 md:mt-10 py-6  max-w-[1440px] mx-auto">
      <FirstContainerHero
        memberFound={memberFound}
        setMember={setMember}
        data={crews}
        deleteMember={deleteMember}
      />
      <SecondContainerHero memberFound={memberFound} />
    </main>
  )
}

import { useSearchParams } from "react-router-dom"
import { CreateForm } from "../assets/components/CreatePage/CreateForm"
import type { CreatePageProps } from "../types/types"
export const CreatePage = ({
  destinations,
  setDestinations,
  technologies,
  setTechnologies,
  members,
  setMembers
}: CreatePageProps) => {
  const [searchParams] = useSearchParams()
  const type = searchParams.get("type")
  return (
    <main className="h-full overflow-auto gap-y-10 md:gap-y-0 flex items-center md:items-center justify-center px-9 mb-20 md:mb-5  md:px-30 md:mt-10 py-6 max-w-[750px] mx-auto">
      <div className="w-full bg-white h-fit rounded-sm flex flex-col gap-y-4">
        <CreateForm
          destinations={destinations}
          setDestinations={setDestinations}
          technologies={technologies}
          setTechnologies={setTechnologies}
          type={type}
          members={members}
          setMembers={setMembers}
        />
      </div>
    </main>
  )
}

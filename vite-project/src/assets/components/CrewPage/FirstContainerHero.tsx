import { PageHeader } from "../DestinationPage/PageHeader"
import { InformationContainer } from "./InformationContainer"
import { ElipsisContainer } from "./ElipsisContainer"
import type { FullCrewProps } from "../../../types/types"
import { UserActions } from "../HomePage/UserActions"

export const FirstContainerHero = ({
  memberFound,
  setMember,
  data,
  deleteMember
}: FullCrewProps) => {
  return (
    <section className="flex flex-col mt-5 py-7 w-full items-center md:items-start justify-center md:justify-start gap-y-6">
      <PageHeader number="02" title="Meet your crew" />
      <InformationContainer memberFound={memberFound} />
      <ElipsisContainer
        setMember={setMember}
        data={data}
        memberFound={memberFound}
      />
      <UserActions onDelete={deleteMember} element="member" name={memberFound?.name} />
    </section>
  )
}

import { PageHeader } from "../DestinationPage/PageHeader"
import { InformationContainer } from "./InformationContainer"
import { ElipsisContainer } from "./ElipsisContainer"
import type { FirstContainerHeroProps } from "../../../types/types"
export const FirstContainerHero = ({
  memberFound,
  setMember,
  data
}: FirstContainerHeroProps) => {
  return (
    <section className="flex flex-col mt-5 py-7 w-full items-center md:items-start justify-center md:justify-start gap-y-6">
      <PageHeader number="02" title="Meet your crew" />
      <InformationContainer memberFound={memberFound} />
      <ElipsisContainer
        setMember={setMember}
        data={data}
        memberFound={memberFound}
      />
    </section>
  )
}

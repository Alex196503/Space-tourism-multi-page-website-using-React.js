import { FaCircle } from "react-icons/fa"
import { type FirstContainerHeroProps } from "../../../types/types"
export const ElipsisContainer = ({
  setMember,
  data,
  memberFound
}: FirstContainerHeroProps) => {
  let members = data?.map((member) => member.name)
  return (
    <div className="mt-4 md:py-7 py-4 flex flex-row gap-x-4 items-center">
      {members?.map((member, _index) => {
        return (
          <span
            key={member}
            onClick={() => setMember(member)}
            className="w-3 h-3 cursor-pointer"
          >
            <FaCircle
              color={member === memberFound?.name ? "white" : "grey"}
            />
          </span>
        )
      })}
    </div>
  )
}

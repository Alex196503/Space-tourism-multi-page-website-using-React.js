import { PageHeader } from "./PageHeader"
import { type Destination } from "../../../types/types"
export const FirstContainerSection = ({
  planetFound
}: {
  planetFound: Destination | undefined
}) => {
  return (
    <>
      <section className="first-section ">
        <div className="flex flex-col items-center lg:items-start w-full md:w-[500px]">
          <PageHeader number="01" title="Pick your destination" />
          <img
            src={planetFound?.images.webp}
            className="md:w-[400px] w-[350px] animate-[spin_30s_linear_infinite]"
            alt={`Image with the ${planetFound?.name}`}
          />
        </div>
      </section>
    </>
  )
}

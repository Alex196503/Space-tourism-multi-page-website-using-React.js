import type { Destination } from "../../../types/types"

export const ParametersContainer = ({
  planetFound
}: {
  planetFound: Destination | undefined
}) => {
  return (
    <>
      <section className="flex items-center justify-between">
        <h3 className="parameter-paragraph">avg. distance</h3>
        <h3 className="parameter-paragraph">EST.travel time</h3>
      </section>
      <section className="flex items-center justify-between w-[275px]">
        <p className="parameter-value-paragraph">
          {planetFound?.distance}
        </p>
        <p className="parameter-value-paragraph">
          {planetFound?.travel}
        </p>
      </section>
    </>
  )
}

import type { Destination } from "../../../types/types"
import { ParametersContainerLabel } from "./ParametersContainerLabel"
import { ParametersContainerValues } from "./ParametersContainerValues"
export const ParametersContainer = ({
  planetFound
}: {
  planetFound: Destination | undefined
}) => {
  return (
    <>
      <ParametersContainerLabel
        labels={["avg distance", "est travel time", "asfasf"]}
      />
      <ParametersContainerValues
        values={[
          planetFound?.distance,
          planetFound?.travel,
          "asfasf"
        ]}
      />
    </>
  )
}

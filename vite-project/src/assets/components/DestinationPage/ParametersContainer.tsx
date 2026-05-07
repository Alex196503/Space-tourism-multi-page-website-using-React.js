import type { Destination } from "../../../types/types"
import { ParametersContainerLabel } from "./ParametersContainerLabel"
import { ParametersContainerValues } from "./ParametersContainerValues"
export const ParametersContainer = ({
  planetFound
}: {
  planetFound: Destination | undefined
}) => {
  const sanitizeTimeTravel = (time: string | undefined) => {
    let hasDigits = null
    if (time) {
      hasDigits = /\d/.test(time)
    }
    if (!time || !hasDigits) return "N/A"
    const hasUnit = /[a-zA-Z]/.test(time)
    return hasUnit ? time : `${time} days`
  }
  return (
    <>
      <ParametersContainerLabel
        labels={["avg distance", "est travel time"]}
      />
      <ParametersContainerValues
        values={[
          planetFound?.distance
            ? planetFound.distance.toLowerCase().includes("km")
              ? planetFound.distance
              : `${planetFound.distance} km`
            : "N/A",
          sanitizeTimeTravel(planetFound?.travel)
        ]}
      />
    </>
  )
}

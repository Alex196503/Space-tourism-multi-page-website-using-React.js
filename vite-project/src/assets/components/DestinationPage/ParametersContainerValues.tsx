import type { ParameterProps } from "../../../types/types"

export const ParametersContainerValues = ({
  values
}: ParameterProps) => {
  return (
    <section className="section-grid">
      {values?.map((value, index) => {
        return (
          <h3 key={index} className="parameter-value-paragraph">
            {value}
          </h3>
        )
      })}
    </section>
  )
}

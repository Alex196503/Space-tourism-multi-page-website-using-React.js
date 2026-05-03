import type { ParameterProps } from "../../../types/types"

export const ParametersContainerLabel = ({
  labels
}: ParameterProps) => {
  return (
    <section className="section-grid">
      {labels?.map((label) => {
        return (
          <h3 key={label} className="parameter-paragraph">
            {label}
          </h3>
        )
      })}
    </section>
  )
}

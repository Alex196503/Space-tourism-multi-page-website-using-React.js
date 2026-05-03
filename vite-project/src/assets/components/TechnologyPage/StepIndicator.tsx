import type { FirstContainerTechProps } from "../../../types/types"

export const StepIndicator = ({
  data,
  onSetTech,
  techFound
}: FirstContainerTechProps) => (
  <>
    <div className="flex flex-row gap-x-7 md:flex-col gap-y-7 md:w-1/4">
      {data?.map((tech, index) => {
        return (
          <button
            type="button"
            className={
              tech.name === techFound?.name
                ? "btn-active"
                : "btn-notActive"
            }
            key={tech.name}
            onClick={() => onSetTech(tech.name)}
          >
            {" "}
            {index + 1}
          </button>
        )
      })}
    </div>
  </>
)

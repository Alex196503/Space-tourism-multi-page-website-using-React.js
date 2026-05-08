import type { PlanetProps2 } from "../../../types/types"
import { HeroSection } from "./HeroSection"
import { ParametersContainer } from "./ParametersContainer"
import { UserActions } from "../HomePage/UserActions"

export const SecondContainer = ({
  data,
  planetFound,
  onSetPlanetChosen,
  deleteDestination
}: PlanetProps2) => {
  let planets = data
    ? data.map((destination) => destination.name)
    : []

  return (
    <article className="px-5 md:py-12 mt-12 flex flex-col items-center lg:items-start w-full">
      <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:flex lg:items-center lg:flex-wrap lg:gap-x-10">
        {planets.map((planet, _index) => {
          return (
            <li key={planet}>
              <button
                onClick={() => {
                  if (onSetPlanetChosen && planetFound) {
                    onSetPlanetChosen(planet)
                  }
                }}
                className={`link-destination ${planetFound?.name === planet ? "before:bg-white before:w-full before:h-[3px] before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:transform before:-translate-y-1/2" : ""}`}
              >
                {planet}
              </button>
            </li>
          )
        })}
      </ul>
      <HeroSection planetFound={planetFound} />
      <div className="flex flex-col items-center md:items-start justify-center gap-y-3 w-full max-w-[600px] mt-3 pt-3">
        <ParametersContainer planetFound={planetFound} />
      </div>
      <UserActions
        element="planet"
        name={planetFound?.name}
        onDelete={deleteDestination}
      />
    </article>
  )
}

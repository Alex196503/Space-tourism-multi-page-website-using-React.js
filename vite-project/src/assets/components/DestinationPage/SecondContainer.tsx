import type { PlanetProps2 } from "../../../types/types"
import { HeroSection } from "./HeroSection"
import { ParametersContainer } from "./ParametersContainer"
import { UserActions } from "../HomePage/UserActions"

export const SecondContainer = ({
  data,
  planetFound,
  onSetPlanetChosen
}: PlanetProps2) => {
  let planets = data
    ? data.map((destination) => destination.name)
    : []

  return (
    <article className="px-5 md:py-12 mt-12 flex flex-col items-center lg:items-start w-full">
      <ul className="flex items-center gap-x-10">
        {planets.map((planet) => {
          return (
            <li key={planet}>
              <button
                onClick={() => {
                  if (onSetPlanetChosen && planetFound) {
                    onSetPlanetChosen(planet)
                  }
                }}
                className={`link-destination ${planetFound?.name === planet ? "before:bg-white before:w-full before:h-[3px] before:content-[''] before:absolute before:left-0 before:bottom-[-30px] before:transform before:-translate-y-1/2" : ""}`}
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
      <UserActions element="planet" />
    </article>
  )
}

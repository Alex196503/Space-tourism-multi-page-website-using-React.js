import type { PlanetProps2 } from "../../../types/types"
import { HeroSection } from "./HeroSection"
import { ParametersContainer } from "./ParametersContainer"
export const SecondContainer = ({
  data,
  planetFound,
  onSetPlanetChosen
}: PlanetProps2) => {
  let planets = data
    ? data.map((destination) => destination.name)
    : []

  return (
    <article className="px-5 md:py-12 mt-12 flex flex-col items-center md:items-start w-full">
      <ul className="flex items-center gap-x-10">
        {planets.map((planet) => {
          return (
            <li key={planet}>
              <button
                onClick={() => {
                  if (onSetPlanetChosen && planetFound) {
                    onSetPlanetChosen(planetFound.name)
                  }
                }}
                className="link-destination"
              >
                {planet}
              </button>
            </li>
          )
        })}
      </ul>
      <HeroSection planetFound={planetFound} />
      <div className="flex flex-col justify-between gap-y-6 w-[300px]">
        <ParametersContainer planetFound={planetFound} />
      </div>
    </article>
  )
}

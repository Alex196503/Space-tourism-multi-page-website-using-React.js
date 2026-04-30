import { HeroSection } from "./HeroSection"
import { ParametersContainer } from "./ParametersContainer"
export const SecondContainer = () => {
  let planets = ["Moon", "Mars", "Europa", "Titan"]
  return (
    <article className="px-5 md:py-12 mt-12 flex flex-col items-center md:items-start w-full">
      <ul className="flex items-center gap-x-10">
        {planets.map((planet) => {
          return (
            <li key={planet}>
              <button className="link-destination">{planet}</button>
            </li>
          )
        })}
      </ul>
      <HeroSection />
      <div className="flex flex-col justify-between gap-y-6 w-[300px]">
        <ParametersContainer />
      </div>
    </article>
  )
}

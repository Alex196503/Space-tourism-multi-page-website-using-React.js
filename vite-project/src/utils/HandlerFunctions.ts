
import type {
  Crew,
  Destination,
  JSONResponse,
  Technology
} from "../types/types"
// Handler function used with generics in typescript
export const fetchingData = async <T extends keyof JSONResponse>(
  value: T
): Promise<JSONResponse[T]> => {
  try {
    let req = await fetch("/data/data.json")
    if (!req.ok) {
      throw new Error(`The response is not ok! ${req.statusText}`)
    }
    let res: JSONResponse = await req.json()
    return res[value]
  } catch (err) {
    throw new Error(`Something bad happened! ${err}`)
  }
}
//Handler function used to get the items from the local storage
export const getItem = <T>(item: string): T[] => {
  let saved = localStorage.getItem(item)
  if (saved) {
    return JSON.parse(saved)
  } else return []
}
//Function used to find if that name introduced by user already exists in the localStorage or in the json files
export const isNameFound = (
  type: Destination[] | Crew[] | Technology[],
  value: string
) => {
  let nameFound = type.find(
    (destination) =>
      destination.name.toLowerCase() === value.toLowerCase()
  )
  return nameFound
}

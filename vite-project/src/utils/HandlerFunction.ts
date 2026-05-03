import type { JSONResponse } from "../types/types"
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

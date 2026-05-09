import type { Destination, Technology } from "../types/types"
import type { Crew } from "../types/types"
//Prepares the initial form data object based on the entity type (planet, member, or technology).
export const prepareEditFields = (
  type: string | null,
  currentName: string,
  descriptiveItem: string,
  planetFound: Destination | undefined,
  previewImage: string,
  memberFound: Crew | undefined
) => {
  switch (type) {
    case "planet": {
      return {
        name: currentName,
        description: descriptiveItem,
        distance: planetFound?.distance,
        travel: planetFound?.travel,
        urlImage: previewImage
      }
    }
    case "member": {
      return {
        name: currentName,
        bio: memberFound?.bio,
        role: memberFound?.role,
        urlImage: previewImage
      }
    }
    default: {
      return {
        name: currentName,
        description: descriptiveItem,
        urlImage: previewImage
      }
    }
  }
}

//Resolves the correct image source URL by prioritizing the custom user-provided
export const getActiveImage = (
  type: string | null,
  planetFound: Destination | undefined,
  memberFound: Crew | undefined,
  technologyFound: Technology | undefined
) => {
  switch (type) {
    case "planet":
      return planetFound?.urlImage || planetFound?.images?.webp
    case "member":
      return memberFound?.urlImage || memberFound?.images?.webp
    default:
      return (
        technologyFound?.urlImage ||
        technologyFound?.images?.landscape
      )
  }
}

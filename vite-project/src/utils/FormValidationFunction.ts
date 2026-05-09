import { toast } from "react-toastify"
import type { Crew, Destination, Technology } from "../types/types"
export const validateForm = (
  formData: Destination | Crew | Technology,
  type: string | null,
  isNameFound: (
    type: Destination[] | Crew[] | Technology[],
    value: string
  ) => Destination | Crew | Technology | undefined,
  destinations: Destination[],
  members: Crew[],
  technologies: Technology[]
): boolean => {
  let isValid = true
  if (formData.name.trim() === "") {
    toast.error("Name is required!")
    isValid = false
  }
  if (type === "planet" && formData.name.length >= 12) {
    toast.error(
      "Please introduce a name with less than 12 characters!"
    )
    isValid = false
  }
  if (
    (type === "planet" || type === "technology") &&
    "description" in formData &&
    formData.description.trim() === ""
  ) {
    toast.error("Description is required")
    isValid = false
  }
  if (
    type === "member" &&
    "bio" in formData &&
    formData.bio.trim() === ""
  ) {
    toast.error("Bio is required")
    isValid = false
  }
  if (
    type === "member" &&
    "role" in formData &&
    formData.role.trim() === ""
  ) {
    toast.error("Role is required")
    isValid = false
  }
  if (type === "planet" && isNameFound(destinations, formData.name)) {
    toast.error("Name already exists!")
    isValid = false
  }
  if (type === "member" && isNameFound(members, formData.name)) {
    toast.error("Name already exists!")
    isValid = false
  }
  if (
    type === "technology" &&
    isNameFound(technologies, formData.name)
  ) {
    toast.error("Name already exists!")
    isValid = false
  }
  return isValid
}

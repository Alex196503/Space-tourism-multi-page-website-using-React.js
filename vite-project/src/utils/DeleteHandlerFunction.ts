//Function used to delete a type (either a destination, or a crew, or a technology)
import { type DeleteParams } from "../types/types"
import { toast } from "react-toastify"
export const deleteElement = <T extends { name: string }>({
  name,
  type,
  data,
  setData,
  navigate,
  basePath
}: DeleteParams<T>) => {
  if (!name) return
  const windowConfirm = window.confirm(
    `Are you sure you want to delete this ${type}?`
  )
  if (!windowConfirm) return
  let updatedData = data.filter((element: T) => element.name !== name)
  setData(updatedData)
  toast.success(
    `${type[0].toUpperCase() + type.slice(1)} has been succesfully deleted!`
  )
  navigate(
    updatedData.length > 0
      ? `/${basePath}?name=${updatedData[0].name}`
      : "/"
  )
}

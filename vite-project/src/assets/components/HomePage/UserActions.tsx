import { Link } from "react-router-dom"

export const UserActions = ({
  element,
  onDelete,
  name
}: {
  element: string
  onDelete: (name: string | undefined) => void
  name: string | undefined
}) => {
  const URLHandler = (element: string, path: string) => {
    switch (element) {
      case "planet":
        return `${path}?type=planet`
      case "technology":
        return `${path}?type=technology`
      case "member":
        return `${path}?type=member`
    }
  }
  return (
    <div className="mt-3 py-6 flex flex-row items-center md:items-start justify-center md:justify-start gap-x-4 md:gap-x-7 gap-y-3 w-full">
      <Link
        to={URLHandler(element, "/create") as string}
        className="bg-sky-500 hover:bg-sky-700 btn-props"
      >
        Create a new {element}
      </Link>
      <Link
        to={URLHandler(element, "/edit") as string}
        className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 btn-props"
      >
        Edit {element}
      </Link>
      <button
        type="button"
        onClick={() => {
          onDelete(name)
        }}
        className="bg-rose-500 hover:bg-rose-600 focus:outline-2 focus:outline-offset-2 focus:outline-rose-500 active:bg-rose-700 btn-props"
      >
        Delete {element}
      </button>
    </div>
  )
}

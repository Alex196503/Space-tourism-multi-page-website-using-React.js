import { FaExclamationTriangle } from "react-icons/fa"
import { Link } from "react-router-dom"
let TriangleIcon = FaExclamationTriangle as React.ElementType
export const NotFoundPage = () => {
  return (
    <section className="text-center mt-4 px-5 w-full flex flex-col items-center justify-center gap-y-6">
      <TriangleIcon className="text-yellow-400 fa-4x mb-4 text-5xl" />
      <h1 className="heading-one">404 Not Found</h1>
      <p className="text-xl font-medium text-white.">
        This page does not exist
      </p>
      <Link
        to="/"
        className="text-white font-bold px-3 py-2 mt-4 bg-indigo-700 hover:bg-indigo-600 transition-colors duration-300 rounded"
      >
        Go back
      </Link>
    </section>
  )
}

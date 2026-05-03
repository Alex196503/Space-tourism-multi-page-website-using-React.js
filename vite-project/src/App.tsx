import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { MainLayout } from "./layouts/MainLayout"
import { DestinationPage } from "./pages/DestinationPage"
import { CrewPage } from "./pages/CrewPage"
import { TechnologyPage } from "./pages/TechnologyPage"
import { NotFoundPage } from "./pages/404ErrorPage"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/crew" element={<CrewPage />} />
      <Route path="/tech" element={<TechnologyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
export const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}
export default App

import { Routes, Route, BrowserRouter } from "react-router-dom"

import { HomePage } from "./pages/HomePage"
import { MainLayout } from "./layouts/MainLayout"
import { DestinationPage } from "./pages/DestinationPage"
import { CrewPage } from "./pages/CrewPage"
import { TechnologyPage } from "./pages/TechnologyPage"
import { NotFoundPage } from "./pages/404ErrorPage"
import { CreatePage } from "./pages/CreatePage"
import { useEffect, useState } from "react"
import {
  type Technology,
  type Destination,
  type Crew
} from "./types/types"
import { getItem } from "./utils/HandlerFunction"
export const App = () => {
  let [destinations, setDestinations] = useState<Destination[]>(
    getItem("destinations")
  )
  let [technology, setTechnologies] = useState<Technology[]>(
    getItem("technologies")
  )
  let [members, setMembers] = useState<Crew[]>(getItem("members"))
  useEffect(() => {
    localStorage.setItem("destinations", JSON.stringify(destinations))
    localStorage.setItem("technologies", JSON.stringify(technology))
    localStorage.setItem("members", JSON.stringify(members))
  }, [destinations, technology, members])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/destination"
              element={<DestinationPage />}
            />
            <Route path="/crew" element={<CrewPage />} />
            <Route path="/tech" element={<TechnologyPage />} />
            <Route
              path="/create"
              element={
                <CreatePage
                  destinations={destinations}
                  setDestinations={setDestinations}
                  technologies={technology}
                  setTechnologies={setTechnologies}
                  members={members}
                  setMembers={setMembers}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

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
import { fetchingData, getItem } from "./utils/HandlerFunction"
export const App = () => {
  const [destinations, setDestination] = useState<Destination[]>(
    getItem("destinations") || []
  )
  const [technologies, setTechnology] = useState<Technology[]>(
    getItem("technologies") || []
  )
  const [members, setMember] = useState<Crew[]>(
    getItem("members") || []
  )
  useEffect(() => {
    const loadData = async () => {
      try {
        let res = await fetchingData("destinations")
        let res2 = await fetchingData("crew")
        let res3 = await fetchingData("technology")
        setDestination((prev) => {
          if (!res) return prev
          let jsonData = res.filter((destination: Destination) =>
            prev.every((item) => item.name !== destination.name)
          )
          return [...prev, ...jsonData]
        })
        setTechnology((prev) => {
          if (!res3) return prev
          let jsonData = res3.filter((tech: Technology) =>
            prev.every((item) => item.name !== tech.name)
          )
          return [...prev, ...jsonData]
        })
        setMember((prev) => {
          if (!res2) return prev
          let jsonData = res2.filter((member: Crew) =>
            prev.every((item) => item.name !== member.name)
          )
          return [...prev, ...jsonData]
        })
      } catch (err) {
        console.error(`Something bad happened! ${err}`)
      }
    }
    loadData()
  }, [])

  useEffect(() => {
    localStorage.setItem("destinations", JSON.stringify(destinations))
    localStorage.setItem("technologies", JSON.stringify(technologies))
    localStorage.setItem("members", JSON.stringify(members))
  }, [destinations, technologies, members])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/destination"
              element={
                <DestinationPage destinations={destinations} />
              }
            />
            <Route
              path="/crew"
              element={<CrewPage crews={members} />}
            />
            <Route
              path="/tech"
              element={<TechnologyPage technologies={technologies} />}
            />
            <Route
              path="/create"
              element={
                <CreatePage
                  destinations={destinations}
                  setDestinations={setDestination}
                  technologies={technologies}
                  setTechnologies={setTechnology}
                  members={members}
                  setMembers={setMember}
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

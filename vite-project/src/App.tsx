import { Routes, Route, useNavigate } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { MainLayout } from "./layouts/MainLayout"
import { DestinationPage } from "./pages/DestinationPage"
import { CrewPage } from "./pages/CrewPage"
import { TechnologyPage } from "./pages/TechnologyPage"
import { NotFoundPage } from "./pages/404ErrorPage"
import { CreatePage } from "./pages/CreatePage"
import { useEffect, useState } from "react"
import { EditPage } from "./pages/EditPage"
import {
  type Technology,
  type Destination,
  type Crew
} from "./types/types"
import { fetchingData, getItem } from "./utils/HandlerFunctions"
import { deleteElement } from "./utils/DeleteHandlerFunction"

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
  let navigate = useNavigate()
  // calling the delete handler function for every element: destination, member, tech
  const deleteDestination = (nameFromBtn: string | undefined) => {
    deleteElement({
      name: nameFromBtn,
      type: "planet",
      data: destinations,
      setData: setDestination,
      navigate: navigate,
      basePath: "destination"
    })
  }
  const deleteMember = (nameFromBtn: string | undefined) => {
    deleteElement({
      name: nameFromBtn,
      type: "member",
      data: members,
      setData: setMember,
      navigate: navigate,
      basePath: "crew"
    })
  }
  const deleteTech = (nameFromBtn: string | undefined) => {
    deleteElement({
      name: nameFromBtn,
      type: "technology",
      data: technologies,
      setData: setTechnology,
      navigate: navigate,
      basePath: "tech"
    })
  }
  useEffect(() => {
    const loadData = async () => {
      try {
        const hasDestinations = getItem("destinations")?.length > 0
        const hasCrew = getItem("members")?.length > 0
        const hasTech = getItem("technologies")?.length > 0
        let res = await fetchingData("destinations")
        let res2 = await fetchingData("crew")
        let res3 = await fetchingData("technology")
        if (!hasDestinations) {
          setDestination(res || [])
        }
        if (!hasCrew) {
          setMember(res2 || [])
        }
        if (!hasTech) {
          setTechnology(res3 || [])
        }
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
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/destination"
            element={
              <DestinationPage
                destinations={destinations}
                deleteDestination={deleteDestination}
              />
            }
          />
          <Route
            path="/crew"
            element={
              <CrewPage crews={members} deleteMember={deleteMember} />
            }
          />
          <Route
            path="/tech"
            element={
              <TechnologyPage
                technologies={technologies}
                deleteTech={deleteTech}
              />
            }
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
          <Route
            path="/edit/:name"
            element={
              <EditPage
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
    </>
  )
}
export default App

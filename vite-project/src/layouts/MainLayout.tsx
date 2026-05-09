import { Outlet } from "react-router-dom"
import { Header } from "../assets/components/HomePage/Header"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
export const MainLayout = () => {
  const location = useLocation()
  const [isMobileMenuActive, setMobileMenuActive] = useState(false)
  const getBgImage = () => {
    switch (location.pathname) {
      case "/":
        return "bg-cover bg-no-repeat bg-center md:bg-[url(/assets/home/background-home-tablet.jpg)] lg:bg-[url(/assets/home/background-home-desktop.jpg)] bg-[url(/assets/home/background-home-mobile.jpg)]"
      case "/destination":
        return "bg-cover bg-no-repeat bg-center md:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-[url(/assets/destination/background-destination-mobile.jpg)]"
      case "/crew":
        return "bg-cover bg-no-repeat bg-center md:bg-[url(/assets/crew/background-crew-tablet.jpg)] lg:bg-[url(/assets/crew/background-crew-desktop.jpg)] bg-[url(/assets/crew/background-crew-mobile.jpg)]"
      case "/tech":
        return "bg-cover bg-no-repeat bg-center md:bg-[url(/assets/technology/background-technology-tablet.jpg)] lg:bg-[url(/assets/technology/background-technology-desktop.jpg)] bg-[url(/assets/technology/background-technology-mobile.jpg)]"
      default:
        return "lg:bg-[url(/assets/home/background-home-desktop.jpg)]"
    }
  }
  return (
    <>
      <div className={`min-h-screen w-full ${getBgImage()}`}>
        <Header
          setMobileMenuActive={setMobileMenuActive}
          isMobileMenuActive={isMobileMenuActive}
        />
        <Outlet
          context={{ isMobileMenuActive, setMobileMenuActive }}
        />
      </div>
      <ToastContainer />
    </>
  )
}

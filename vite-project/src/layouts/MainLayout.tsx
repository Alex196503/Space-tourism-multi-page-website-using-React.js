import { Outlet } from "react-router-dom"
// 1. Importurile pentru HOME
import homeDesktop from "./assets/home/background-home-desktop.jpg"
import homeTablet from "./assets/home/background-home-tablet.jpg"
import homeMobile from "./assets/home/background-home-mobile.jpg"
// Destination images imported
import destDesktop from "./assets/destination/background-destination-desktop.jpg"
import destTablet from "./assets/destination/background-destination-tablet.jpg"
import destMobile from "./assets/destination/background-destination-mobile.jpg"

//Crew images imported
import crewDesktop from "./assets/crew/background-crew-desktop.jpg"
import crewTablet from "./assets/crew/background-crew-tablet.jpg"
import crewMobile from "./assets/crew/background-crew-mobile.jpg"

//Technology images imported
import techDesktop from "./assets/technology/background-technology-desktop.jpg"
import techTablet from "./assets/technology/background-technology-tablet.jpg"
import techMobile from "./assets/technology/background-technology-mobile.jpg"
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
        return `bg-cover bg-no-repeat bg-center md:bg-[url(${homeTablet})] lg:bg-[url(${homeDesktop})] bg-[url(${homeMobile})]`

      case "/destination":
        return `bg-cover bg-no-repeat bg-center md:bg-[url(${destTablet})] lg:bg-[url(${destDesktop})] bg-[url(${destMobile})]`

      case "/crew":
        return `bg-cover bg-no-repeat bg-center md:bg-[url(${crewTablet})] lg:bg-[url(${crewDesktop})] bg-[url(${crewMobile})]`

      case "/tech":
        return `bg-cover bg-no-repeat bg-center md:bg-[url(${techTablet})] lg:bg-[url(${techDesktop})] bg-[url(${techMobile})]`

      default:
        return `lg:bg-[url(${homeDesktop})] bg-cover bg-no-repeat bg-center`
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

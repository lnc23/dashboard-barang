import { ReactNode } from "react"
import { Navbar } from "../Navbar"
import { SideBar } from "../SideBar"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <SideBar>
      <div className="top-0 right-0 fixed xl:opacity-100 lg:opacity-0 opacity-0 duration-300 z-10 bg-[#9DB2BF] w-full">
        <Navbar />
      </div>
      <div className="flex flex-col overflow-auto w-screen h-screen max-h-screen">
        {children}
      </div>
    </SideBar>
  )
}

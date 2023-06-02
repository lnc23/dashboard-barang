import { ReactNode } from "react"
import { Navbar } from "../Navbar"
import { SideBar } from "../SideBar"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <SideBar>
      <div className="top-0 right-0 fixed z-10 bg-[#9DB2BF] w-full">
        <Navbar />
      </div>
      {children}
    </SideBar>
  )
}

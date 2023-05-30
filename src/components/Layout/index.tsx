import { ReactNode } from "react"
import { Navbar } from "../Navbar"
import { SideBar } from "../SideBar"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex relative flex-row">
      <SideBar />
      <div className="flex flex-col">
        <div className="absolute right-0">
          <Navbar />
        </div>
        <div className="mt-16 mx-10">{children}</div>
      </div>
    </div>
  )
}

import { ReactNode } from "react"
import { Navbar } from "../Navbar"
import { SideBar } from "../SideBar"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <view className="max-w-[1920px] w-fit flex flex-wrap">
      <SideBar>
        <div className="top-0 right-0 fixed z-10 bg-[#9DB2BF] w-full">
          <Navbar />
        </div>
        <div className="w-full   overflow-y-auto">{children}</div>
      </SideBar>
    </view>
  )
}

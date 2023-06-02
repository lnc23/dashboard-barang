"use client"
import { ReactNode, useEffect, useState } from "react"
import { IconBase } from "react-icons"
import { BsChevronDown, BsChevronUp, BsGraphUp } from "react-icons/bs"
import {
  MdOutlineDataset,
  MdOutlineDriveFileRenameOutline,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md"
import { HiTemplate } from "react-icons/hi"
import { TbReport } from "react-icons/tb"
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link"

type Props = {
  children: ReactNode
}

export const SideBar = ({ children }: Props) => {
  const [isSideOpen, setIsSideOpen] = useState<boolean>(true)
  const [isDown, setIsDown] = useState<any>([])
  const [isShowUser, setIsShowUser] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      if (screenWidth <= 1279) {
        setIsSideOpen(false)
        setIsShowUser(true)
      } else {
        setIsShowUser(false)
        setIsSideOpen(true)
      }
    }

    // Initial check
    handleResize()

    // Listen to the window resize event
    window.addEventListener("resize", handleResize)

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const menu = [
    {
      name: "Dashboard",
      path: "/",
      child: [],
      icon: <BsGraphUp />,
    },
    {
      name: "Master Data",
      path: "/",
      child: [
        {
          name: "Barang",
          path: "/",
          icon: <MdOutlineDriveFileRenameOutline />,
        },
        {
          name: "Stok Barang",
          path: "/",
          icon: <MdOutlineProductionQuantityLimits />,
        },
      ],
      icon: <MdOutlineDataset />,
    },
    {
      name: "Barang Masuk",
      path: "/barangmasuk",
      child: [],
      icon: <HiTemplate />,
    },
    {
      name: "Barang Keluar",
      path: "/",
      child: [],
      icon: <HiTemplate />,
    },
    {
      name: "Report Penjualan",
      path: "/",
      child: [],
      icon: <TbReport />,
    },
    {
      name: "Daftar User",
      path: "/",
      child: [],
      icon: <AiOutlineUsergroupAdd />,
    },
    {
      name: "Master Data",
      path: "/",
      child: [
        {
          name: "Barang",
          path: "/",
          icon: <MdOutlineDriveFileRenameOutline />,
        },
        {
          name: "Stok Barang",
          path: "/",
          icon: <MdOutlineProductionQuantityLimits />,
        },
      ],
      icon: <MdOutlineDataset />,
    },
  ]
  const tempArrIsDown = (index: any) => {
    const tempArr = [...isDown]
    tempArr[index] = !isDown[index] ?? true
    setIsDown(tempArr)
  }

  const handleSideBar = (index: any) => {
    if (menu[index].child.length > 0) {
      tempArrIsDown(index)
    }
  }

  const handleChevronIcon = (index: any) => {
    return (
      <BsChevronDown
        className={`absolute right-5 duration-100 ${
          isDown[index] ? "-rotate-180" : ""
        }`}
      />
    )
  }

  return (
    <div className="flex">
      <div
        className={` ${
          isSideOpen
            ? "w-72 min-w-[18rem] duration-500"
            : "w-0 min-w-[0rem] duration-500"
        } h-screen bg-[#27374D] z-20 shadow-2xl top-0 left-0 xl:sticky lg:fixed fixed`}
      >
        <button
          className={`bg-[#27374D] p-2 rounded-md absolute -right-10 top-2 `}
          onClick={() => setIsSideOpen(!isSideOpen)}
        >
          <GiHamburgerMenu />
        </button>
        <nav
          // hidden={isSideOpen ? false : true}
          className={`transition-opacity ${
            isSideOpen
              ? "block opacity-100 duration-1000"
              : "block opacity-0 duration-100"
          }`}
        >
          {isShowUser ? (
            <div className="flex w-full items-center px-7 justify-center mb-5 mt-7">
              <div className="rounded-xl bg-[#526D82] py-5 flex justify-center items-center w-full">
                User: YansonFer
              </div>
            </div>
          ) : null}

          {menu.map((menu, index) => (
            <ul key={index}>
              <li className="relative hover:bg-[#526D82] hover:duration-500 hover:w-full hover:py-5 py-5 hover:rounded-sm">
                {menu.child.length > 0 ? (
                  <button
                    className="ml-5 text-white flex flex-row items-center gap-5"
                    onClick={() => handleSideBar(index)}
                  >
                    {menu.icon}
                    <span className="flex font-medium text-lg">
                      {menu.name}
                    </span>
                    {menu.child.length > 0 ? handleChevronIcon(index) : null}
                  </button>
                ) : (
                  <Link
                    className="ml-5 text-white flex flex-row items-center gap-5"
                    href={menu.path}
                  >
                    {menu.icon}
                    <span className="flex font-medium text-lg">
                      {menu.name}
                    </span>
                    {menu.child.length > 0 ? handleChevronIcon(index) : null}
                  </Link>
                )}
              </li>
              {menu.child.length > 0
                ? menu.child.map((child, indexchild) =>
                    isDown[index] ? (
                      <ul key={indexchild}>
                        {
                          <li className="relative hover:bg-[#526D82] hover:duration-500 hover:py-3 py-3 hover:w-full hover:rounded-sm">
                            <button
                              className="ml-14 text-white flex flex-row items-center gap-5"
                              onClick={() => console.log(child.path)}
                            >
                              {child.icon}
                              <text className="font-medium text-lg">
                                {child.name}
                              </text>
                            </button>
                          </li>
                        }
                      </ul>
                    ) : null
                  )
                : null}
            </ul>
          ))}
        </nav>
      </div>
      {children}
    </div>
  )
}

"use client"
import { useState } from "react"
import { IconBase } from "react-icons"
import { BsGraphUp, BsChevronDown, BsChevronUp } from "react-icons/bs"
import {
  MdOutlineDataset,
  MdOutlineDriveFileRenameOutline,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md"
import { HiTemplate } from "react-icons/hi"
import { TbReport } from "react-icons/tb"
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"

export const SideBar = () => {
  const [isDown, setIsDown] = useState<boolean>(false)
  const [isSideOpen, setIsSideOpen] = useState<boolean>(true)

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
      path: "/",
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
  ]

  const handleSideBar = (index: number) => {
    if (menu[index].child.length > 0) {
      setIsDown(!isDown)
    }
  }

  const handleChevronIcon = () => {
    if (isDown) {
      return <BsChevronDown className="absolute right-5" />
    } else {
      return <BsChevronUp className="absolute right-5" />
    }
  }

  return (
    <div className="flex flex-row bg-red-700 z-10">
      <div
        className={`flex  ${
          isSideOpen ? "w-72" : "w-0"
        } h-screen bg-[#27374D] shadow-2xl`}
      >
        <nav
          hidden={isSideOpen ? false : true}
          className="xl:mt-0 sm:mt-10 w-full mt-10"
        >
          {menu.map((menu, index) => (
            <ul key={index}>
              <li className="relative hover:bg-[#526D82] hover:w-full hover:py-5 py-5  hover:rounded-sm">
                <button
                  className="ml-5 text-white flex flex-row items-center gap-5"
                  onClick={() => handleSideBar(index)}
                >
                  {menu.icon}
                  <span className="flex font-medium text-lg">{menu.name}</span>
                  {menu.child.length > 0 ? handleChevronIcon() : null}
                </button>
              </li>
              {menu.child.length > 0
                ? menu.child.map((child, index) =>
                    isDown ? (
                      <ul key={index}>
                        {
                          <li className="relative hover:bg-[#526D82] hover:py-3 py-3 hover:w-full hover:rounded-sm">
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
      <div
        className={`p-2 rounded-lg absolute ${
          isSideOpen ? "xl:left-72 sm:left-0 left-0" : "left-0"
        }`}
      >
        <button
          className={`bg-[#27374D] p-2 rounded-md `}
          onClick={() => setIsSideOpen(!isSideOpen)}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  )
}

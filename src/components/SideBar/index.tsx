"use client"
import { useState } from "react"
import { IconBase } from "react-icons"
import { BsGraphUp, BsChevronDown, BsChevronUp } from "react-icons/bs"

export const SideBar = () => {
  const [isDown, setIsDown] = useState<boolean>(false)

  const menu = [
    {
      id: 1,
      name: "Dashboard",
      path: "/",
      child: [],
    },
    {
      id: 2,
      name: "Master Data",
      path: "/",
      child: [
        { name: "Barang", path: "/" },
        { name: "Stok Barang", path: "/" },
      ],
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
    <div className="absolute flex flex-col w-72 max-h-screen min-h-screen bg-[#27374D] shadow-2xl">
      <nav className="w-full h-full">
        {menu.map((menu, index) => (
          <ul key={index}>
            <li className="relative hover:bg-[#526D82] hover:w-full hover:py-5 py-5  hover:rounded-sm">
              <button
                className="ml-5 text-white flex flex-row items-center gap-5"
                onClick={() => handleSideBar(index)}
              >
                <BsGraphUp />
                <text className="flex font-medium text-lg">{menu.name}</text>
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
                            <BsGraphUp />
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
  )
}

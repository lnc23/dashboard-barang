"use client"
import { ReactNode, useEffect, useState } from "react"
import { BsChevronDown, BsGraphUp } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link"
import { RxComponent1 } from "react-icons/rx"
import { FiLogIn, FiMenu } from "react-icons/fi"

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
      name: "Login Page",
      path: "/loginpage",
      child: [],
      icon: <FiLogIn />,
    },
    {
      name: "Component",
      path: "/",
      child: [
        {
          name: "Form Input",
          path: "/",
          icon: <RxComponent1 />,
        },
        {
          name: "Table",
          path: "/",
          icon: <RxComponent1 />,
        },
        {
          name: "Button",
          path: "/",
          icon: <RxComponent1 />,
        },
        {
          name: "Toast",
          path: "/",
          icon: <RxComponent1 />,
        },
        {
          name: "Loading",
          path: "/",
          icon: <RxComponent1 />,
        },
      ],
      icon: <RxComponent1 />,
    },
    {
      name: "example Child Menu",
      path: "/",
      child: [
        {
          name: "Example 1",
          path: "/",
          icon: <FiMenu />,
        },
        {
          name: "Example 2",
          path: "/",
          icon: <FiMenu />,
        },
        {
          name: "Example 3",
          path: "/",
          icon: <FiMenu />,
        },
      ],
      icon: <FiMenu />,
    },
    {
      name: "Order",
      path: "/",
      child: [
        {
          name: "Create Order",
          path: "/",
          icon: <FiMenu />,
        },
        {
          name: "List Order",
          path: "/",
          icon: <FiMenu />,
        },
      ],
      icon: <FiMenu />,
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
    // test commit
    <div className="flex">
      <div
        className={` ${
          isSideOpen ? "w-72 min-w-[18rem] " : "w-0 min-w-[0rem] "
        } h-screen bg-[#27374D] z-20 shadow-2xl top-0 left-0 xl:sticky lg:fixed fixed duration-300`}
      >
        <button
          className={`bg-[#27374D] p-2 rounded-md absolute -right-10 top-2 `}
          onClick={() => setIsSideOpen(!isSideOpen)}
        >
          <GiHamburgerMenu />
        </button>
        <nav
          className={`transition-opacity overflow-auto max-h-screen ${
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

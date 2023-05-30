"use client"
import { useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

export const Navbar = () => {
  const [isDrop, setIsDrop] = useState<boolean>(false)

  const handleDrop = () => {
    if (isDrop) {
      return <BiChevronDown />
    } else {
      return <BiChevronUp />
    }
  }

  return (
    <div className="flex relative justify-end items-center py-2 mr-10">
      <button
        className="py-2 flex flex-row items-center space-x-3 px-3 rounded-md hover:bg-[#2f4057] bg-[#27374D]"
        onClick={() => setIsDrop(!isDrop)}
      >
        <span>YansonFer</span>
        {handleDrop()}
      </button>
      {isDrop ? (
        <div className="absolute top-[55px] rounded-md bg-[#27374D]">
          <ul>
            <li className="py-3 px-5">My Profile</li>
            <li className="border-b-[1px] border-[#DDE6ED]"></li>
            <li className="py-3 px-5">LogOut</li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}

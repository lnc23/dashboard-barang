"use client"
import { useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

export const Navbar = () => {
  const [isDrop, setIsDrop] = useState<boolean>(false)

  const handleDrop = () => {
    return (
      <BiChevronDown
        className={`${!isDrop ? "rotate-180" : ""} duration-300`}
      />
    )
  }

  return (
    <div className="flex justify-end items-center py-2 mr-10 sticky top-0">
      <button
        className="py-2 flex flex-row items-center space-x-3 px-3 rounded-md hover:bg-[#2f4057] bg-[#27374D]"
        onClick={() => setIsDrop(!isDrop)}
      >
        <span>YansonFer</span>
        {handleDrop()}
      </button>
      <div
        className={`absolute top-[55px] rounded-md duration-300 bg-[#27374D] ${
          isDrop ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul>
          <li className="py-3 px-5">My Profile</li>
          <li className="border-b-[1px] border-[#DDE6ED]"></li>
          <li className="py-3 px-5">LogOut</li>
        </ul>
      </div>
    </div>
  )
}

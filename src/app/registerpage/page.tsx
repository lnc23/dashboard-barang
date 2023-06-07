"use client"
import Link from "next/link"
import React from "react"
import { BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import SendRouter, { useRouter } from "next/navigation"

export default function LoginPAge() {
  const router = useRouter()

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="bg-white min-w-fit flex flex-col justify-center space-y-5 xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-full xl:h-fit lg:h-fit md:h-fit h-full w-full sm:h-full items-center rounded-xl shadow-gray-500 shadow-2xl py-5 px-10">
        <span className="text-black text-3xl font-semibold">Sign Up</span>
        {/* start signup with */}
        <button className="flex flex-col min-w-fit w-full min-h-fit border-[2px] duration-300 border-[#cdcdcd] rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] hover:shadow-gray-400 hover:shadow-lg">
          <div className="flex flex-row w-full py-2 px-10 justify-center items-center gap-3">
            <FcGoogle size={30} />
            <span className="text-black text-lg">Google Account</span>
          </div>
        </button>
        <button className="flex flex-col min-w-fit min-h-fit w-full border-[2px] duration-300 border-[#cdcdcd] rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] hover:shadow-gray-400 hover:shadow-lg">
          <div className="flex flex-row w-full py-2 px-10 justify-center items-center gap-3">
            <BsFacebook size={30} color="blue" />
            <span className="text-black text-lg">Facebook Account</span>
          </div>
        </button>
        {/* end signup with */}
        <div className="flex w-full items-center">
          <div className="flex w-full border-b-[1px] border-black"></div>
          <div className="mx-4 text-black">Or</div>
          <div className="flex w-full border-b-[1px] border-black"></div>
        </div>
        <span className="text-black text-sm font-normal">
          Sign Up with Email
        </span>
        <input
          className="flex w-full border-[2px] border-[#cdcdcd] duration-300 p-3 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
          placeholder="Email"
        ></input>
        <input
          className="flex w-full border-[2px] border-[#cdcdcd] duration-300 p-3 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
          placeholder="Username"
        ></input>
        <input
          className="flex w-full border-[2px] border-[#cdcdcd] duration-300 p-3 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
          placeholder="Password"
          type="password"
        ></input>
        <input
          className="flex w-full border-[2px] border-[#cdcdcd] duration-300 p-3 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
          placeholder="Confirm your password"
          type="password"
        ></input>
        {/* signin and singup */}
        <div className="flex w-full gap-2 flex-col justify-center items-center">
          <button
            onClick={() => router.push("/")}
            className="bg-[#27374D] duration-300 rounded-lg flex w-full justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500"
          >
            <span className="font-semibold">Sign Up</span>
          </button>
          <button
            onClick={() => router.push("/loginpage")}
            className="bg-[#DDE6ED] duration-300 rounded-lg flex w-full justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500"
          >
            <span className="font-semibold text-black">Back</span>
          </button>
        </div>
      </div>
    </div>
  )
}

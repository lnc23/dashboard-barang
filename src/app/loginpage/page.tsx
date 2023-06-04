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
      <div className="bg-white flex flex-col justify-center space-y-5 xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-full xl:h-fit lg:h-fit md:h-fit h-full w-full sm:h-full items-center rounded-xl shadow-gray-500 shadow-2xl py-5 px-10">
        <span className="text-black text-3xl font-semibold">Sign In</span>
        {/* start login with */}
        <button className="flex flex-col w-full shadow-2xl border-[1px] border-gray-500 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] hover:shadow-gray-400 hover:shadow-2xl">
          <div className="flex flex-row w-full py-2 px-10 justify-center items-center gap-3">
            <FcGoogle size={30} />
            <span className="text-black text-lg">Google Account</span>
          </div>
        </button>
        <button className="flex flex-col w-full shadow-2xl border-[1px] border-gray-500 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] hover:shadow-gray-400 hover:shadow-2xl">
          <div className="flex flex-row w-full py-2 px-10 justify-center items-center gap-3">
            <BsFacebook size={30} color="blue" />
            <span className="text-black text-lg">Facebook Account</span>
          </div>
        </button>
        {/* end login with */}
        <div className="flex w-full items-center">
          <div className="flex w-full border-b-[1px] border-black"></div>
          <div className="mx-4 text-black">Or</div>
          <div className="flex w-full border-b-[1px] border-black"></div>
        </div>
        <span className="text-black text-sm font-normal">
          Login With Email / Username
        </span>
        <input
          className="flex w-full border-[1px] border-gray-500 p-3 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
          placeholder="Email / Username"
        ></input>
        <input
          className="flex w-full border-[1px] border-gray-500 p-3 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
          placeholder="Password"
          type="password"
        ></input>
        {/* signin and singup */}
        <div className="flex w-full gap-2 flex-col justify-center items-center">
          <button
            onClick={() => router.push("/")}
            className="bg-[#27374D] shadow-xl rounded-lg flex w-full justify-center items-center p-4 hover:py-5 hover:px-6 hover:shadow-2xl hover:shadow-gray-500"
          >
            <span className="font-semibold">Sign In</span>
          </button>
          <button className="bg-[#DDE6ED] shadow-xl rounded-lg flex w-full justify-center items-center p-4 hover:py-5 hover:px-6 hover:shadow-2xl hover:shadow-gray-500">
            <span className="font-semibold text-black">Sign Up</span>
          </button>
        </div>
        {/* forget password */}
        <div className="flex flex-row w-full justify-center items-center gap-2">
          <span className="text-black font-medium ">Forget Your Password?</span>
          <Link href={"/"} className="text-[#526D82] hover:text-[#27374D]">
            Click Here
          </Link>
        </div>
      </div>
    </div>
  )
}

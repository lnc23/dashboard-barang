"use client"
import { Layout, Section } from "@/components"
import { useState } from "react"
import { BsEye, BsEyeSlash } from "react-icons/bs"

export default function InputLabelPage() {
  const [isEye, setIsEye] = useState<boolean>(false)

  return (
    <Layout>
      <div className="px-10 py-10 flex-grow">
        <Section marginTop={"5"}>
          <div className="flex flex-col w-full px-10 space-y-2">
            {/* basic imnput label */}
            <div className="flex flex-col w-full">
              <span className="text-xl text-black font-bold">
                Components for input form
              </span>
              <label className="text-black mt-10">Basic Input Label</label>
              <input
                className="flex w-full mt-1 border-[2px] border-[#cdcdcd] duration-300 px-3 py-1 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
                placeholder="Example"
              ></input>
            </div>

            {/* pasword input label */}
            <div className="flex flex-col w-full">
              <label className="text-black mt-10">Password Input Label</label>
              <input
                type="password"
                className="flex w-full mt-1 border-[2px] border-[#cdcdcd] duration-300 px-3 py-1 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
                placeholder="Your Password"
              ></input>
            </div>

            {/* pasword with eye input label */}
            <div className="flex flex-col w-full">
              <label className="text-black mt-10">
                Password Input Label with eye
              </label>
              <div className="relative  h-fit w-full flex item-center">
                <input
                  type={`${isEye ? "text" : "password"}`}
                  className="flex w-full border-[2px] border-[#cdcdcd] duration-300 px-3 py-1 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
                  placeholder="Your Password"
                ></input>
                {!isEye ? (
                  <BsEyeSlash
                    size={20}
                    onClick={() => setIsEye(!isEye)}
                    color="black"
                    className="absolute right-3 top-2"
                  />
                ) : (
                  <BsEye
                    size={20}
                    onClick={() => setIsEye(!isEye)}
                    color="black"
                    className="absolute right-3 top-2"
                  />
                )}
              </div>
            </div>

            {/* input label with button */}
            <div className="flex flex-col w-full">
              <label className="text-black mt-10">
                Input Label with button
              </label>
              <div className="relative  h-fit w-full flex flex-row">
                <input
                  type={`${isEye ? "text" : "password"}`}
                  className="flex w-full border-[2px] border-[#cdcdcd] duration-300 px-3 py-1 rounded-l-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
                  placeholder="example"
                ></input>
                <button className="rounded-r-lg p-1 px-10 bg-[#27374D] text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  )
}

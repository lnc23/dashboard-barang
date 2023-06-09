"use client"
import { Layout, Section } from "@/components"
import { RxComponent1 } from "react-icons/rx"
import { BiLoaderAlt, BiLoaderCircle } from "react-icons/bi"
import { RiLoader3Fill } from "react-icons/ri"
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai"
import { IoIosCreate } from "react-icons/io"
export default function ButtonPage() {
  return (
    <Layout>
      <div className="flex flex-row font-bold text-lg text-[#27374D] mt-16 ml-10 items-center space-x-2">
        <RxComponent1 />
        <span>/</span>
        <span>Component</span>
        <span>/</span>
        <span>Button</span>
      </div>
      <div className="w-full flex flex-grow px-10 pb-5">
        <Section marginTop={"10"}>
          <div className="flex flex-col w-full space-y-2">
            <span className="text-xl text-black font-bold">
              Buttons Component
            </span>
            <span className="text-black">
              This button component was designed by myself with the hope that it
              can serve as a reference for buttons in this dashboard.
            </span>
            {/* start basic button */}
            <span className="text-black font-bold pt-5">Basic Button</span>
            <button className="bg-[#27374D] w-fit px-5 rounded-lg flex duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button</span>
            </button>
            {/* end basic button */}
            {/* start button loading */}
            <span className="text-black font-bold pt-5">
              Button With Loading
            </span>
            <button
              disabled
              className="bg-[#27374D] rounded-lg flex w-fit px-5 space-x-1 duration-300 justify-center items-center p-4"
            >
              <span className="font-semibold">Button</span>
              <span className="animate-spin flex items-center" color="white">
                <BiLoaderCircle size={20} />
              </span>
            </button>
            <button
              disabled
              className="bg-[#27374D] rounded-lg flex space-x-1 w-fit px-5 duration-300 justify-center items-center p-4"
            >
              <span className="font-semibold">Button</span>
              <span className="animate-spin flex items-center" color="white">
                <BiLoaderAlt size={20} />
              </span>
            </button>
            <button
              disabled
              className="bg-[#27374D] rounded-lg flex space-x-1 w-fit px-5 duration-300 justify-center items-center p-4"
            >
              <span className="font-semibold">Button</span>
              <span className="animate-spin flex items-center" color="white">
                <RiLoader3Fill size={20} />
              </span>
            </button>
            {/* end button loading */}
            {/* start button width */}
            <span className="text-black font-bold pt-5">Button width</span>
            <button className="bg-[#27374D] rounded-lg flex w-fit px-5 space-x-1 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button (w-fit)</span>
            </button>
            <button className="bg-[#27374D] rounded-lg w-1/6 flex space-x-1 px-5 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button (w-1/6)</span>
            </button>
            <button className="bg-[#27374D] rounded-lg flex w-1/5 space-x-1 px-5 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button (w-1/5)</span>
            </button>
            <button className="bg-[#27374D] rounded-lg flex w-1/4 space-x-1 px-5 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button (w-1/4)</span>
            </button>
            <button className="bg-[#27374D] rounded-lg flex w-1/3 space-x-1 px-5 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button (w-1/3)</span>
            </button>
            <button className="bg-[#27374D] rounded-lg flex w-1/2 space-x-1 px-5 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button (w-1/2)</span>
            </button>
            <button className="bg-[#27374D] rounded-lg flex w-full space-x-1 px-5 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button (w-full)</span>
            </button>
            {/* end button width */}
            {/* start button colors */}
            <span className="text-black font-bold pt-5">Button Colors</span>
            <button className="bg-red-700 rounded-lg flex w-fit px-5 space-x-1 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button</span>
            </button>
            <button className="bg-green-700 rounded-lg w-fit flex space-x-1 px-5 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button</span>
            </button>
            <button className="bg-blue-700 rounded-lg flex w-fit space-x-1 px-5 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button</span>
            </button>
            <button className="bg-gray-700 rounded-lg flex w-fit space-x-1 px-5 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button</span>
            </button>
            <button className="bg-yellow-700 rounded-lg flex w-fit space-x-1 px-5 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Button</span>
            </button>
            {/* end button colros */}
            {/* start button colors */}
            <span className="text-black font-bold pt-5">Button Icon</span>
            <button className="bg-red-700 rounded-lg flex w-fit px-3 space-x-1 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Delete</span>
              <AiOutlineDelete size={24} />
            </button>
            <button className="bg-yellow-500 rounded-lg w-fit flex space-x-1 px-3 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Edit</span>
              <AiOutlineEdit size={24} />
            </button>
            <button className="bg-green-600 rounded-lg flex w-fit space-x-1 px-3 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Create</span>
              <IoIosCreate size={24} />
            </button>
            <button className="bg-gray-700 rounded-lg flex w-fit space-x-1 px-3 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-semibold">Detail</span>
              <AiOutlineEye size={24} />
            </button>
            {/* end button colros */}
          </div>
        </Section>
      </div>
    </Layout>
  )
}

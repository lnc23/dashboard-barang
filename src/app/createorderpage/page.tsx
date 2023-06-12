"use client"
import { Layout, Section } from "@/components"
import moment from "moment"
import { useState } from "react"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { RxComponent1 } from "react-icons/rx"

export default function CreateOrderPage() {
  const newDate = moment(new Date()).format("yyyy-MM-DD")
  const [date, setDate] = useState(`${newDate.toString()}`)

  console.log(newDate)

  return (
    <Layout>
      <div className="flex flex-row font-bold text-lg text-[#27374D] mt-16 ml-10 items-center space-x-2">
        <RxComponent1 />
        <span>/</span>
        <span>Order</span>
        <span>/</span>
        <span>Create Order</span>
      </div>
      <div className="px-10 py-1 flex-grow">
        <Section marginTop={"5"}>
          <div className="flex flex-col w-full space-y-2">
            {/* basic imnput label */}
            <div className="flex flex-col w-full">
              <span className="text-xl text-black font-bold border-b-4 border-[#27374D] w-fit">
                Create Order
              </span>
            </div>
            {/* form input */}
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 items-center pt-5">
              <div className="flex flex-col w-full">
                <label className="text-black font-medium">Items Code</label>
                <select
                  defaultValue={"-"}
                  className="flex w-full mt-1 border-[2px] border-gray-400 duration-300 px-3 py-1 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
                >
                  <option hidden value={"-"} disabled>
                    --Select Items Code--
                  </option>
                  <option>A323</option>
                  <option>B123</option>
                  <option>A513</option>
                  <option>Z422</option>
                  <option>B325</option>
                  <option>C312</option>
                  <option>G534</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-black font-medium">Item Name</label>
                <input
                  className="flex w-full mt-1 border-[2px] border-gray-400 duration-300 px-3 py-1 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
                  placeholder="Item Name"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-black font-medium">Date</label>
                <input
                  value={date}
                  type="date"
                  min={0}
                  className="flex w-full mt-1 border-[2px] border-gray-400 duration-300 px-3 py-1 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
                  onChange={(e) => setDate(e.currentTarget.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-black font-medium">Quantity</label>
                <input
                  type="number"
                  min={0}
                  className="flex w-full mt-1 border-[2px] border-gray-400 duration-300 px-3 py-1 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
                  placeholder="Quantity"
                />
              </div>
              <div className="flex flex-col mb-3 w-full">
                <label className="text-black font-medium">Price</label>
                <input
                  type="number"
                  min={0}
                  className="flex w-full mt-1 border-[2px] border-gray-400 duration-300 px-3 py-1 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
                  placeholder="Price"
                />
              </div>
            </div>
            {/* end form input */}
            <button className="bg-[#27374D] rounded-lg flex w-full space-x-1 px-5 duration-300 justify-center items-center py-3 hover:shadow-lg hover:shadow-gray-500">
              <span className="font-medium">Submit</span>
            </button>
          </div>
        </Section>
      </div>
    </Layout>
  )
}

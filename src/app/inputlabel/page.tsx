"use client"
import { Layout, Section } from "@/components"

export default function InputLabelPage() {
  return (
    <Layout>
      <div className="px-10 py-10 flex-grow">
        <Section marginTop={"5"}>
          <div className="flex flex-col w-full px-10">
            <span className="text-xl text-black font-bold">
              Components for input form
            </span>
            <span className="text-black mt-10">Basic Input Label</span>
            <input
              className="flex w-full border-[1px] border-gray-500 px-3 py-1 rounded-lg hover:border-[#526D82] hover:border-2 focus:outline-none focus:border-[#526D82] text-black"
              placeholder="Example"
            ></input>
          </div>
        </Section>
      </div>
    </Layout>
  )
}

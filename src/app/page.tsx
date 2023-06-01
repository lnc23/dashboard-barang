"use client"
import React, { PureComponent } from "react"
import { Layout, Section } from "@/components"
import { BsGraphUp } from "react-icons/bs"

export default function Home() {
  return (
    <div className="overflow-auto flex w-screen h-screen max-h-screen max-w-screen">
      <Layout>
        <div className="flex flex-col w-full">
          <div className="flex flex-row font-bold text-[#27374D] mt-20 ml-10 items-center space-x-3">
            <BsGraphUp />
            <span> / </span>
            <span> Dashboard</span>
          </div>
          {/* isi content */}
        </div>
      </Layout>
    </div>
  )
}

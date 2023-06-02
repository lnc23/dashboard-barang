"use client"
import React, { PureComponent, useEffect, useRef, useState } from "react"
import { CardDashboard, Layout, Section } from "@/components"
import { BsGraphUp, BsArrowDown } from "react-icons/bs"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { CiMenuKebab } from "react-icons/ci"

export default function Home() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  return (
    <div className="flex flex-col overflow-auto h-screen max-w-screen max-h-screen">
      <Layout>
        <div className="flex flex-col flex-grow">
          <div className="flex flex-row font-bold text-xl text-[#27374D] mt-20 ml-10 items-center space-x-3">
            <BsGraphUp />
            <span>/</span>
            <span>Dashboard</span>
          </div>
          {/* start section card` */}
          <CardDashboard />
          {/* end section card */}
          <Section marginTop="5">
            <div className="xl:flex xl:flex-col lg:flex lg:flex-col md:grid md:grid-cols-1 sm:flex sm:flex-col flex flex-col h-full xl:justify-center lg:justify-center justify-start xl:items-center lg:items-center items-start flex-grow min-w-fit">
              <span className="text-[#27374D] font-bold text-lg self-start">
                Sales Chart
              </span>
              <ResponsiveContainer width="95%" height={500}>
                <LineChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Section>
        </div>
      </Layout>
    </div>
  )
}

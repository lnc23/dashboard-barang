"use client"
import React, { PureComponent, useRef } from "react"
import { CardDashboard, Layout, Section } from "@/components"
import { BsGraphUp, BsArrowDown } from "react-icons/bs"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Cell,
  Pie,
  PieChart,
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

  const dataPie = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

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
          <Section marginTop="10" padingX="10">
            <div className="flex flex-col h-full justify-center items-center flex-grow">
              <span className="text-[#27374D] font-bold text-lg self-start">
                Sales
              </span>
              <div className="flex w-fit mt-10 h-[100%] justify-center items-center">
                <ResponsiveContainer width={1350} height={500}>
                  <LineChart
                    width={1000}
                    height={1000}
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
            </div>
          </Section>
        </div>
      </Layout>
    </div>
  )
}

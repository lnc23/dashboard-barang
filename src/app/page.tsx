"use client"
import React, {
  PureComponent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
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
import { MRT_ColumnDef, MaterialReactTable } from "material-react-table"
import { IOrder, ISales } from "@/interface"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"

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

  const dataTableSales: ISales[] = [
    {
      id: 1,
      transaction_date: "06-04-2023",
      name: "Carrot",
      quantity: 33,
      price: 532000,
    },
    {
      id: 2,
      transaction_date: "07-04-2023",
      name: "Arrowroot",
      quantity: 38,
      price: 1000000,
    },
    {
      id: 3,
      transaction_date: "03-04-2023",
      name: "Carrot",
      quantity: 20,
      price: 372000,
    },
    {
      id: 4,
      transaction_date: "03-04-2023",
      name: "Carrot",
      quantity: 20,
      price: 372000,
    },
    {
      id: 5,
      transaction_date: "03-04-2023",
      name: "Carrot",
      quantity: 20,
      price: 372000,
    },
    {
      id: 6,
      transaction_date: "03-04-2023",
      name: "Carrot",
      quantity: 20,
      price: 372000,
    },
  ]

  const dataTableOrder: IOrder[] = [
    {
      order_date: "06-04-2023",
      name: "Carrot",
      quantity: 33,
      price: 532000,
    },
    {
      order_date: "07-04-2023",
      name: "Arrowroot",
      quantity: 38,
      price: 1000000,
    },
    {
      order_date: "03-04-2023",
      name: "Carrot",
      quantity: 20,
      price: 372000,
    },
    {
      order_date: "03-04-2023",
      name: "Carrot",
      quantity: 20,
      price: 372000,
    },
    {
      order_date: "03-04-2023",
      name: "Carrot",
      quantity: 20,
      price: 372000,
    },
    {
      order_date: "03-04-2023",
      name: "Carrot",
      quantity: 20,
      price: 372000,
    },
  ]

  const columns = useMemo<MRT_ColumnDef<ISales>[]>(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "ID",
        size: 150,
      },
      {
        accessorKey: "transaction_date",
        header: "Transaction Date",
        size: 150,
      },
      {
        accessorKey: "name", //normal accessorKey
        header: "Name",
        size: 200,
      },
      {
        accessorKey: "quantity",
        header: "qty",
        size: 50,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 150,
      },
    ],
    []
  )

  const columnsOrder = useMemo<MRT_ColumnDef<IOrder>[]>(
    () => [
      {
        accessorKey: "order_date",
        header: "Transaction Date",
        size: 150,
      },
      {
        accessorKey: "name", //normal accessorKey
        header: "Name",
        size: 200,
      },
      {
        accessorKey: "quantity",
        header: "qty",
        size: 50,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 150,
      },
    ],
    []
  )

  return (
    <Layout>
      <div className="flex flex-col flex-grow py-5">
        <div className="flex flex-row font-bold text-lg text-[#27374D] mt-16 ml-10 items-center space-x-2">
          <BsGraphUp />
          <span>/</span>
          <span>Dashboard</span>
        </div>
        {/* start section card` */}
        <CardDashboard />
        {/* end section card */}
        {/* start chart */}
        <div className="flex w-full px-10">
          <Section marginTop="5">
            <div className="xl:flex xl:flex-col lg:flex lg:flex-col md:grid md:grid-cols-1 sm:flex sm:flex-col flex flex-col h-full xl:justify-center lg:justify-center justify-start xl:items-center lg:items-center items-start flex-grow min-w-fit">
              <span className="text-[#27374D] font-bold text-lg self-start mb-4">
                Sales Chart
              </span>
              <ResponsiveContainer width="95%" height={500}>
                <LineChart
                  key="chart"
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
        {/* end chart */}
        <div className="grid px-10 xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 flex-grow w-full mt-5 items-center justify-center gap-3">
          <div className="flex bg-white rounded-lg p-2 flex-col w-full space-y-5">
            <span className="text-[#27374D] font-bold text-lg self-start">
              Report Sales
            </span>
            <MaterialReactTable
              key="table sales"
              columns={columns}
              data={dataTableSales}
            />
          </div>
          <div className="flex bg-white rounded-lg p-2 flex-col w-full space-y-5">
            <span className="text-[#27374D] font-bold text-lg self-start">
              Report Order
            </span>
            <MaterialReactTable
              key="table order"
              columns={columnsOrder}
              data={dataTableOrder}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

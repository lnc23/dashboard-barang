"use client"
import { Layout, Section } from "@/components"
import { ISales } from "@/interface"
import { Box, Button } from "@mui/material"
import { data } from "autoprefixer"
import {
  MRT_ColumnDef,
  MRT_Row,
  MaterialReactTable,
} from "material-react-table"
import Link from "next/link"
import { useMemo, useState } from "react"
import { BsDownload, BsEye, BsEyeSlash } from "react-icons/bs"
import { ExportToCsv } from "export-to-csv"
import { RxComponent1 } from "react-icons/rx"

export default function TablePage() {
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

  const csvOptions = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  }

  const csvExporter = new ExportToCsv(csvOptions)

  const handleExportRows = (rows: MRT_Row<ISales>[]) => {
    csvExporter.generateCsv(rows.map((row) => row.original))
  }

  const handleExportData = () => {
    csvExporter.generateCsv(data)
  }

  return (
    <Layout>
      <div className="flex flex-row font-bold text-lg text-[#27374D] mt-16 ml-10 items-center space-x-2">
        <RxComponent1 />
        <span>/</span>
        <span>Component</span>
        <span>/</span>
        <span>Table</span>
      </div>
      <div className="w-full grid">
        <div className=" flex flex-col gap-2 bg-white rounded-lg p-5 mt-4 mx-10">
          <span className="text-black text-2xl font-bold">Table Component</span>
          <span className="text-black">
            For this project, the table component is built using React Table
            material. To see more examples, you can simply click on this link{" "}
            <Link
              className="text-blue-700 rounded-lg px-1 hover:shadow-gray-400 hover:shadow-lg duration-300"
              href={
                "https://www.material-react-table.com/docs/getting-started/install"
              }
            >
              Material React Table
            </Link>
          </span>
          <label className="text-black font-bold mt-5">Standart Table</label>
          <MaterialReactTable
            key="standart table"
            columns={columns}
            data={dataTableSales}
          />
          <span className="text-black font-bold mt-10">Table With Import</span>
          <MaterialReactTable
            columns={columns}
            data={dataTableSales}
            enableRowSelection
            positionToolbarAlertBanner="bottom"
            renderTopToolbarCustomActions={({ table }) => (
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  p: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  className="bg-[#27374D] hover:bg-[#27374D] hover:shadow-lg hover:shadow-gray-500" //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                  onClick={handleExportData}
                  startIcon={<BsDownload />}
                  variant="contained"
                >
                  Export All Data
                </Button>
                <Button
                  disabled={table.getPrePaginationRowModel().rows.length === 0}
                  className="bg-[#27374D] hover:bg-[#27374D] hover:shadow-lg hover:shadow-gray-500" //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                  onClick={() =>
                    handleExportRows(table.getPrePaginationRowModel().rows)
                  }
                  startIcon={<BsDownload />}
                  variant="contained"
                >
                  Export All Rows
                </Button>
                <Button
                  disabled={table.getRowModel().rows.length === 0}
                  className="bg-[#27374D] hover:bg-[#27374D] hover:shadow-lg hover:shadow-gray-500" //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                  onClick={() => handleExportRows(table.getRowModel().rows)}
                  startIcon={<BsDownload />}
                  variant="contained"
                >
                  Export Page Rows
                </Button>
                <Button
                  disabled={
                    !table.getIsSomeRowsSelected() &&
                    !table.getIsAllRowsSelected()
                  }
                  className="bg-[#27374D] hover:bg-[#27374D] hover:shadow-lg hover:shadow-gray-500" //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                  onClick={() =>
                    handleExportRows(table.getSelectedRowModel().rows)
                  }
                  startIcon={<BsDownload />}
                  variant="contained"
                >
                  Export Selected Rows
                </Button>
              </Box>
            )}
          />
        </div>
      </div>
    </Layout>
  )
}

"use client"
import { Layout, Section } from "@/components"
import { ISales } from "@/interface"
import { Box, Button } from "@mui/material"
import { data } from "autoprefixer"
import { ExportToCsv } from "export-to-csv"
import {
  MRT_ColumnDef,
  MRT_Row,
  MaterialReactTable,
} from "material-react-table"
import { useMemo } from "react"
import { BsDownload } from "react-icons/bs"
import { RxComponent1 } from "react-icons/rx"

export default function ListOrderPage() {
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
        <span>Order</span>
        <span>/</span>
        <span>List Order</span>
      </div>
      <div className="px-10 py-1 flex-grow">
        <Section marginTop={"5"}>
          <div className="grid grid-cols-1 w-full gap-10">
            <span className="text-xl text-black font-bold border-b-4 border-[#27374D] w-fit">
              List Order
            </span>

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
                    disabled={
                      table.getPrePaginationRowModel().rows.length === 0
                    }
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
        </Section>
      </div>
    </Layout>
  )
}

import { data } from "autoprefixer"
import { BsArrowDown } from "react-icons/bs"
import { CiMenuKebab } from "react-icons/ci"
import { ResponsiveContainer, LineChart, Line } from "recharts"

export const CardDashboard = () => {
  const dataSales = [
    {
      name: "Page A",
      pv: 2000,
    },
    {
      name: "Page B",
      pv: 1900,
    },
    {
      name: "Page C",
      pv: 2300,
    },
    {
      name: "Page D",
      pv: 1800,
    },
    {
      name: "Page E",
      pv: 2100,
    },
    {
      name: "Page F",
      pv: 1500,
    },
    {
      name: "Page G",
      pv: 1000,
    },
  ]

  const dataExpense = [
    {
      name: "Page A",
      pv: 1500,
    },
    {
      name: "Page B",
      pv: 1200,
    },
    {
      name: "Page C",
      pv: 1700,
    },
    {
      name: "Page D",
      pv: 2000,
    },
    {
      name: "Page E",
      pv: 1800,
    },
    {
      name: "Page F",
      pv: 2100,
    },
    {
      name: "Page G",
      pv: 1700,
    },
  ]

  const dataOrder = [
    {
      name: "Page A",
      pv: 1100,
    },
    {
      name: "Page B",
      pv: 2000,
    },
    {
      name: "Page C",
      pv: 1700,
    },
    {
      name: "Page D",
      pv: 2000,
    },
    {
      name: "Page E",
      pv: 1800,
    },
    {
      name: "Page F",
      pv: 2100,
    },
    {
      name: "Page G",
      pv: 1700,
    },
  ]

  const dataLoss = [
    {
      name: "Page A",
      pv: 1100,
    },
    {
      name: "Page B",
      pv: 2000,
    },
    {
      name: "Page C",
      pv: 1700,
    },
    {
      name: "Page D",
      pv: 2000,
    },
    {
      name: "Page E",
      pv: 1800,
    },
    {
      name: "Page F",
      pv: 2100,
    },
    {
      name: "Page G",
      pv: 2500,
    },
  ]

  return (
    <div className="xl:flex xl:flex-row lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 grid grid-cols-1 justify-center xl:flex-grow mt-5 xl:px-10 px-1 gap-10">
      {/* start card 1 */}
      <div className="flex-col flex bg-blue-900 w-full h-fit shadow-2xl rounded-lg p-5 relative min-w-fit">
        <div className="absolute right-3">
          <button className="p-2 rounded-full hover:bg-blue-950 hover:opacity-100 hover:duration-500">
            <CiMenuKebab size={30} />
          </button>
        </div>
        <span className="font-bold space-x-3 flex flex-row text-2xl text-[#DDE6ED]">
          Rp 600.000k
          <span className="text-lg ml-3 flex flex-row items-center text-[#DDE6ED]">
            (-13.3% <BsArrowDown /> )
          </span>
        </span>
        <span className="text-lg text-[#DDE6ED]">Total Sales</span>
        <div className="flex items-center mt-5  justify-center">
          <ResponsiveContainer width={300} height={150}>
            <LineChart width={300} height={100} data={dataSales}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#DDE6ED"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* end card 1 */}
      {/* start card 2 */}
      <div className="flex-col flex bg-green-900 w-full h-fit shadow-2xl rounded-lg p-5 relative min-w-fit">
        <div className="absolute right-3">
          <button className="p-2 rounded-full hover:bg-green-950 hover:opacity-100 hover:duration-500">
            <CiMenuKebab size={30} />
          </button>
        </div>
        <span className="font-bold space-x-3 flex flex-row text-2xl text-[#DDE6ED]">
          Rp 600.000k
          <span className="text-lg ml-3 flex flex-row items-center text-[#DDE6ED]">
            (-13.3% <BsArrowDown /> )
          </span>
        </span>
        <span className="text-lg text-[#DDE6ED]">Total Order</span>
        <div className="flex items-center mt-5  justify-center">
          <ResponsiveContainer width={300} height={150}>
            <LineChart width={300} height={100} data={dataOrder}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#DDE6ED"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* end card 2 */}
      {/* start card 3 */}
      <div className="flex-col flex bg-red-900 h-fit w-full shadow-2xl rounded-lg p-5 relative min-w-fit">
        <div className="absolute right-3">
          <button className="p-2 rounded-full hover:bg-red-950 hover:opacity-100 hover:duration-500">
            <CiMenuKebab size={30} />
          </button>
        </div>
        <span className="font-bold space-x-3 flex flex-row text-2xl text-[#DDE6ED]">
          Rp 712.300k
          <span className="text-lg ml-3 flex flex-row items-center text-[#DDE6ED]">
            (10.5% <BsArrowDown className="rotate-180" /> )
          </span>
        </span>
        <span className="text-lg text-[#DDE6ED]">Total Expense</span>
        <div className="flex items-center mt-5   justify-center">
          <ResponsiveContainer width={300} height={150}>
            <LineChart width={300} height={100} data={dataExpense}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#DDE6ED"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* end card 3 */}
      {/* start card 3 */}
      <div className="flex-col flex bg-yellow-900 h-fit w-full shadow-2xl rounded-lg p-5 relative min-w-fit">
        <div className="absolute right-3">
          <button className="p-2 rounded-full hover:bg-yellow-950 hover:opacity-100 hover:duration-500">
            <CiMenuKebab size={30} />
          </button>
        </div>
        <span className="font-bold space-x-3 flex flex-row text-2xl text-[#DDE6ED]">
          Rp 712.300k
          <span className="text-lg ml-3 flex flex-row items-center text-[#DDE6ED]">
            (10.5% <BsArrowDown className="rotate-180" /> )
          </span>
        </span>
        <span className="text-lg text-[#DDE6ED]">Total Loss</span>
        <div className="flex items-center mt-5   justify-center">
          <ResponsiveContainer width={300} height={150}>
            <LineChart width={300} height={100} data={dataLoss}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#DDE6ED"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* end card 3 */}
    </div>
  )
}

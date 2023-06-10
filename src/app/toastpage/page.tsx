"use client"
import { Layout, Section } from "@/components"
import Link from "next/link"
import { RxComponent1 } from "react-icons/rx"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function ToastPage() {
  const toastSucces = () => {
    return toast.success("this is exmaple success toast")
  }

  const toastError = () => {
    return toast.error("this is exmaple error toast")
  }

  const toastWithWarning = () => {
    return toast.warning("this is example warning toast")
  }

  return (
    <Layout>
      <div className=" flex flex-col w-full justify-center items-center">
        <ToastContainer position="top-center" />
      </div>
      <div className="flex flex-row self-start font-bold text-lg text-[#27374D] mt-16 ml-10 items-center space-x-2">
        <RxComponent1 />
        <span>/</span>
        <span>Component</span>
        <span>/</span>
        <span>Toast</span>
      </div>
      <div className="w-full flex flex-grow px-10 pb-5">
        <Section marginTop={"10"}>
          <div className="flex flex-col w-full gap-2">
            <span className="text-xl text-black font-bold">
              Toast Component
            </span>
            <span className="text-black flex flex-row">
              For this project, the table component is built using react
              toastify. To see more examples, you can simply click on this link
              {"  "}
              <Link
                href="https://github.com/fkhadra/react-toastify"
                className="px-1 hover:shadow-lg rounded-lg hover:shadow-gray-500 duration-300 ml-1 text-blue-600"
              >
                react-toastify
              </Link>{" "}
            </span>
            {/* toast success */}
            <span className="font-bold text-black"> Success Toast</span>
            <span className="text-black">this is example of success Toast</span>
            <button
              onClick={toastSucces}
              className="bg-[#27374D] rounded-lg flex w-fit px-5 space-x-1 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500"
            >
              <span className="font-semibold">Success Toast</span>
            </button>
            {/* end toast error */}
            {/* toast success */}
            <span className="font-bold text-black">Toast Error</span>
            <span className="text-black">this is example of Error Toast</span>
            <button
              onClick={toastError}
              className="bg-[#27374D] rounded-lg flex w-fit px-5 space-x-1 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500"
            >
              <span className="font-semibold">Error Toast</span>
            </button>
            {/* end toast error */}
            {/* toast success */}
            <span className="font-bold text-black">Toast Warning</span>
            <span className="text-black">this is example of Warning Toast</span>
            <button
              onClick={toastWithWarning}
              className="bg-[#27374D] rounded-lg flex w-fit px-5 space-x-1 duration-300 justify-center items-center p-4 hover:shadow-lg hover:shadow-gray-500"
            >
              <span className="font-semibold">Warning Toast</span>
            </button>
            {/* end toast error */}
          </div>
        </Section>
      </div>
    </Layout>
  )
}

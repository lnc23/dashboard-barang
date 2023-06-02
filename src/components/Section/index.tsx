import { ReactNode } from "react"

type Props = {
  marginTop: string
  children: ReactNode
}

export const Section = ({ marginTop, children}: Props) => {
  return (
    <div className={`xl:px-10 lg:px-10 md:px-10 sm:px-1 px-1`}>
      <div
        className={`bg-[#DDE6ED] w-full min-w-fit flex rounded-lg p-5 mt-${marginTop}`}
      >
        {children}
      </div>
    </div>
  )
}

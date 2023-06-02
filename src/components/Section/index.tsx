import { ReactNode } from "react"

type Props = {
  marginTop: string
  children: ReactNode
}

export const Section = ({ marginTop, children}: Props) => {
  return (
    <div className={`px-10`}>
      <div
        className={`bg-[#DDE6ED] w-full min-w-fit flex rounded-lg p-5 mt-${marginTop}`}
      >
        {children}
      </div>
    </div>
  )
}

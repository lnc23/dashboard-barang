import { ReactNode } from "react"

type Props = {
  padingX: string
  marginTop: string
  children: ReactNode
}

export const Section = ({ marginTop, children, padingX }: Props) => {
  return (
    <div className={`px-${padingX}`}>
      <div
        className={`bg-[#DDE6ED] w-full min-w-fit flex rounded-lg p-5 mt-${marginTop}`}
      >
        {children}
      </div>
    </div>
  )
}

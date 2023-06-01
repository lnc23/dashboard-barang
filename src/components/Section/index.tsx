import { ReactNode } from "react"

type Props = {
  marginTop: string
  children: ReactNode
}

export const Section = ({ marginTop, children }: Props) => {
  return (
    <div className={`bg-white  flex rounded-lg p-5 mt-${marginTop} mx-10`}>
      {children}
    </div>
  )
}

import { ReactNode, useState } from "react"

type Props = {
  marginTop: string
  children: ReactNode
}

export const Section = ({ marginTop, children }: Props) => {
  return (
    <div
      className={`bg-white w-full min-w-fit flex rounded-lg p-5 mt-${marginTop}`}
    >
      {children}
    </div>
  )
}

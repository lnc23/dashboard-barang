"use client"

import { StoreProvider } from "easy-peasy"
import store from "../store"

export function Providers({ children }: any) {
  return <StoreProvider store={store}>{children}</StoreProvider>
}

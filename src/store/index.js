"use client"
import { action, createStore } from "easy-peasy"

const store = createStore({
  isDown: [],
  isSidebarClick: "/",
  sidebarClick: action((state, payload) => {
    state.isSidebarClick = payload
  }),
  tempArrIsDown: action((state, payload) => {
    const tempArr = [...state.isDown]
    tempArr[payload] = !state.isDown[payload] && true
    state.isDown = tempArr
    console.log("liat payload", payload)
  }),
})

export default store

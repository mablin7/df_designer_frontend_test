import React from "react"
import "./styles/index.scss"
import { useState, useEffect, createRef } from "react"
import { computeLayout } from "./utils/computeLayout"
import GraphLayout from "./components/GraphLayout"
import GraphDropdown from "./components/Dropdown"

function App() {
  const [graphs, setGraphs] = useState([])
  const [graph, setGraph] = useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch("/api/graphs")
        .then((res) => res.json())
        .then((res) => setGraphs(res))
    }, 1000) // с таймером все ок
  }, []) //пока работает только на второй рендер, возможно проблема в MSW

  const fetchGraph = (buttonId) => {
    fetch(`/api/graphs/${buttonId}`)
      .then((res) => res.json())
      .then((res) => {
        setGraph({ ...computeLayout(res) }) //прежде чем положить данные в стейт, преобразуем их в удобный вид
      })
  }

  const handleClick = (buttonId) => {
    fetchGraph(buttonId)
  }
  const ref = createRef()
  return (
    <div>
      <GraphDropdown graphs={graphs} handleClick={handleClick} />
      <br />
      <GraphLayout ref={ref} graph={graph} />
    </div>
  )
}

export default App

import React from "react"
import "./styles/index.scss"
import { useState, useEffect, createRef } from "react"
import { computeLayout } from "./utils/computeLayout"
import GraphLayout from "./components/GraphLayout"
import GraphDropdown from "./components/Dropdown"

function App() {
  const [graphList, setGraphList] = useState([])
  const [graph, setGraph] = useState([])

  useEffect(() => {
    // без setTimeout useEffect видимо срабатывает раньше MSW и запрос идет на localhost:3000
    setTimeout(() => {
      fetch("/api/graphs")
        .then((res) => res.json())
        .then((res) => setGraphList(res))
    }, 1000)
  }, [])

  const fetchGraphById = (graphId) => {
    // TODO: Move to custom hook: useFetchGraph()
    fetch(`/api/graphs/${graphId}`)
      .then((res) => res.json())
      .then((res) => {
        setGraph({ ...computeLayout(res) }) //прежде чем положить данные в стейт, преобразуем их в удобный вид
      })
  }

  const handleClick = (graphId) => {
    fetchGraphById(graphId)
  }

  const ref = createRef()

  return (
    <div>
      <GraphDropdown graphs={graphList} handleClick={handleClick} />
      <br />
      <GraphLayout ref={ref} graph={graph} />
    </div>
  )
}

export default App

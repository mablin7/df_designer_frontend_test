import "./styles/index.scss"
import { useState, useEffect } from "react"
import { computeLayout } from "./utils/computeLayout"
import Graph from "./components/Graph"
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

  const handleClick = (buttonId) => {
    fetchGraph(buttonId)
  }

  const fetchGraph = (buttonId) => {
    fetch(`/api/graphs/${buttonId}`)
      .then((res) => res.json())
      .then((res) => {
        setGraph({ ...computeLayout(res) })
      })
  }

  return (
    <div>
      <GraphDropdown graphs={graphs} handleClick={handleClick} />
      <br />
      <Graph graph={graph} />
    </div>
  )
}

export default App

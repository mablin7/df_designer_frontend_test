import "./styles/index.scss"
import { useState, useEffect, useRef } from "react"
import { computeLayout } from "./utils/computeLayout"
import Graph from "./components/Graph"
import GraphDropdown from "./components/Dropdown"
import { ArcherContainer, ArcherElement } from "react-archer"
import Sandbox from "./components/Sandbox"
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
        setGraph({ ...computeLayout(res) })
      })
  }

  const handleClick = (buttonId) => {
    fetchGraph(buttonId)
  }

  return (
    <div>
      <GraphDropdown
        className="start item"
        graphs={graphs}
        handleClick={handleClick}
      />
      <br />
      <ArcherContainer strokeColor="blue" strokeWidth="5">
        <Graph graph={graph} />
      </ArcherContainer>
      {/* <Sandbox></Sandbox> */}
    </div>
  )
}

export default App

import "./styles/index.scss"
import { useState, useEffect, createRef } from "react"
import { computeLayout } from "./utils/computeLayout"
import GraphList from "./components/GraphList"
import GraphDropdown from "./components/Dropdown"
import LayoutMaker from "./utils/LayoutMaker"
import { useDrag } from "./hooks/useDrag"
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
  const ref = createRef()
  return (
    <div>
      <GraphDropdown graphs={graphs} handleClick={handleClick} />
      <br />
      <GraphList ref={ref} graph={graph} />
      {/* <LayoutMaker /> */}
      {/* <div ref={nodeRef} className="draggable"></div> */}
    </div>
  )
}

export default App

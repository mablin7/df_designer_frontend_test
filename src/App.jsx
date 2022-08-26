import "./App.css"
import { useState, useEffect } from "react"
import Graph from "./components/Graph"
import GraphDropdown from "./components/Dropdown"
import CytoscapeComponent from "react-cytoscapejs"
import { elements } from "./cytoscape.data/elements"

function App() {
  const [graphAmount, setGraphAmount] = useState([])
  useEffect(() => {
    fetch("/api/graphs")
      .then((res) => res.json())
      .then((res) => setGraphAmount(res))
  }, []) //пока работает только на второй рендер, возможно проблема в MSW
  const [graph, setGraph] = useState([])
  const handleClick = (buttonId) => {
    fetchGraph(buttonId)
  }
  const fetchGraph = (buttonId) => {
    fetch(`/api/graphs/${buttonId}`)
      .then((res) => res.json())
      .then((res) => {
        setGraph({ ...res })
      })
  }
  return (
    <div className="ui container">
      <GraphDropdown graphAmount={graphAmount} handleClick={handleClick} />
      <br />
      <Graph graph={graph} />
      {/* <CytoscapeComponent
        elements={elements}
        style={{ border: "1px solid black", width: "100%", height: "600px" }}
      /> */}
    </div>
  )
}

export default App

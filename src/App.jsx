import "./App.css"
import { useState } from "react"
import Graph from "./components/Graph"
import GraphDropdown from "./components/Dropdown"
import cytoscape from 'cytoscape'
const cy = cytoscape({
  container: document.getElementById("cy"), // container to render in
})
function App() {
  const [graph, setGraph] = useState([])
  const handleClick = (value) => {
    fetcher(value)
  }
  const fetcher = (btns) => {
    fetch(`/api/graphs/${btns - 1}`)
      .then((res) => res.json())
      .then((res) => {
        setGraph({ ...res })
      })
  }
  return (
    <div className="ui container">
      <GraphDropdown handleClick={handleClick} />
      <br />
      <Graph graph={graph} />
    </div>
  )
}

export default App

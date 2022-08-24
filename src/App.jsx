import "./App.css"
import { useState } from "react"
import Graph from "./components/Graph"
import GraphDropdown from "./components/Dropdown"
import CytoscapeComponent from "react-cytoscapejs"

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
      <CytoscapeComponent
        elements={[
          { data: { id: "1", label: "Node 1" }, position: { x: 0, y: 0 } },
          { data: { id: "2", label: "Node 2" }, position: { x: 150, y: 70 } },
          {
            data: {
              source: "1",
              target: "2",
              label: "Edge from Node1 to Node2",
            },
          },
        ]}
        style={{ border: "1px solid black", width: "100%", height: "600px" }}
      />
    </div>
  )
}

export default App

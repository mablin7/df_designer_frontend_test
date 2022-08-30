import "./App.css"
import { useState, useEffect } from "react"
import Graph from "./components/Graph"
import GraphDropdown from "./components/Dropdown"
import _ from "lodash"

function App() {
  const [graphs, setGraphs] = useState([])
  const [graph, setGraph] = useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch("/api/graphs")
        .then((res) => res.json())
        .then((res) => setGraphs(res))
    }, 500) // с таймером все ок
  }, []) //пока работает только на второй рендер, возможно проблема в MSW

  const graphModifier = (graph) => {
    const { edges, nodes } = graph
    const from = _.map(edges, _.property("fromId"))
    const to = _.map(edges, _.property("toId"))
    const both = Array.from(new Set(from.filter((e) => to.includes(e))))
    const outgoing = Array.from(new Set(from.filter((e) => !to.includes(e))))
    const incoming = Array.from(new Set(to.filter((e) => !from.includes(e))))

    const newGraph = {
      ...graph,
      nodes: nodes.map((node, idx) => ({
        ...node,
        connection: both.includes(idx)
          ? "both"
          : outgoing.includes(idx)
          ? "outgoing"
          : incoming.includes(idx)
          ? "incoming"
          : "none",
      })),
    }
    return newGraph
  }
  const handleClick = (buttonId) => {
    fetchGraph(buttonId)
  }

  const fetchGraph = (buttonId) => {
    fetch(`/api/graphs/${buttonId}`)
      .then((res) => res.json()) //TODO: доставать данные уже из стэйта
      .then((res) => {
        //или оставить как есть?
        setGraph({ ...graphModifier(res) })
      })
  }
  // LeaderLine(
  //   document.getElementById("start"),
  //   document.getElementById("end")
  // )
  return (
    <div className="ui container">
      <GraphDropdown
        id="start"
        graphAmount={graphs}
        handleClick={handleClick}
      />
      <br />
      <Graph graph={graph} />
      <p id="end">sdgsz</p>
    </div>
  )
}

export default App

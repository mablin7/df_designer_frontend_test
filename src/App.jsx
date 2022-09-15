import React from "react"
import "./styles/index.scss"
import { useState, useEffect, createRef } from "react"
import { computeLayout } from "./utils/computeLayout"
import GraphLayout from "./components/GraphLayout"
import GraphDropdown from "./components/Dropdown"
import UntangleButton from "./components/UntangleButton"

function App() {
  const [graphList, setGraphList] = useState([])
  const [graph, setGraph] = useState([])
  const [rawGraph, setRawGraph] = useState([])

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
        setRawGraph(res)
        setGraph({ ...computeLayout(res) }) //прежде чем положить данные в стейт, преобразуем их в удобный вид
      })
  }

  const handleClick = (graphId) => {
    fetchGraphById(graphId)
  }
  const handleButton = () => {
    // console.log(nodes)
  }

  const ref = createRef()
  // console.log(graph)
  return (
    <>
      <div className="flex">
        <GraphDropdown graphs={graphList} handleClick={handleClick} />
        <UntangleButton handleButton={handleButton} />
      </div>
      <br />
      <GraphLayout ref={ref} graph={graph} />
    </>
  )
}

export default App

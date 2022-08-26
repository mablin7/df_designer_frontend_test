export const elements = [
  { data: { id: "1", label: "Node 1" }, position: { x: 150, y: 150 } },
  { data: { id: "2", label: "Node 2" }, position: { x: 300, y: 300 } },
  {
    data: {
      source: "1",
      target: "2",
      label: "Edge from Node1 to Node2",
    },
  },
]

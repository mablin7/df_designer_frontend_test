export const relationsMaker = (toId) => {
  const relations = toId.map((id) => ({
    targetId: `${id}`,
    targetAnchor: "left",
    sourceAnchor: "right",
  }))
  return relations
}

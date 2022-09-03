export const relationsMaker = (toId) => {
  // вспомогательный объект для библиотеки react-archer
  const relations = toId.map((id) => ({
    targetId: `${id}`,
    targetAnchor: "left",
    sourceAnchor: "right",
  }))

  return relations
}

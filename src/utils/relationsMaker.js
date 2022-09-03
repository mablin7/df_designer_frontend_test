export const relationsMaker = (toId) => {
  const relations = toId.map((id) => ({
    targetId: `${id}`,
    targetAnchor: "left",                 //вспомогательный объект для библиотеки react-archer
    sourceAnchor: "right",
  }))
  return relations
}

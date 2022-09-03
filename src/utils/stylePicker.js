export const stylePicker = (typeOfConnection) => {
  // исходя из типа связи возвращаем значение для grid-layout
  const typeMap = {
    outgoing: "a",
    both: "b",
    incoming: "c",
  }

  return typeMap[typeOfConnection]
}

export const stylePicker = (typeOfConnection) => {
  switch (typeOfConnection) {
    case "outgoing":
      return "a"
    case "both":                    //исходя из типа связи возвращаем значение для grid-layout
      return "b"
    case "incoming":
      return "c"
  }
}

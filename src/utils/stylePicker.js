export const stylePicker = (typeOfConnection) => {
  switch (typeOfConnection) {
    case "outgoing":
      return "a"
    case "both":
      return "b"
    case "incoming":
      return "c"
  }
}

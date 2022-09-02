import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

if (process.env.NODE_ENV === "development") {
  import("./mocks/browser").then(({ worker }) => worker.start())
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
)

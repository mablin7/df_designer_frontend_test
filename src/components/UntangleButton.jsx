import { Button } from "semantic-ui-react"
import "../styles/index.scss"
const UntangleButton = ({ handleButton }) => {
  return <Button onClick={handleButton}>Untangle!</Button>
}

export default UntangleButton

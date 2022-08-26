import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

function GraphDropdown({ handleClick, graphAmount }) {
  const clickHandler = (e) => {
    handleClick(e.target.innerText - 1)
  }
  console.log(graphAmount)
  const dropdownItems = graphAmount?.map((graph) => {
    return (
      <Dropdown.Item key={graphAmount.indexOf(graph)} onClick={clickHandler}>
        {graphAmount.indexOf(graph) + 1}
      </Dropdown.Item>
    )
  })

  return (
    <DropdownButton id="dropdown-basic-button" title="GraphList">
      {dropdownItems}
    </DropdownButton>
  )
}

export default GraphDropdown

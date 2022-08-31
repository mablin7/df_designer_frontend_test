import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

function GraphDropdown({ handleClick, graphs }) {
  const clickHandler = (e) => {
    handleClick(e.target.innerText - 1)
  }
  const dropdownItems = graphs?.map((graph) => {
    return (
      <Dropdown.Item key={graphs.indexOf(graph)} onClick={clickHandler}>
        {graphs.indexOf(graph) + 1}
      </Dropdown.Item>
    )
  })

  return (
    <DropdownButton id="dropdown-basic-button" title="Graph List  ">
      {dropdownItems}
    </DropdownButton>
  )
}

export default GraphDropdown

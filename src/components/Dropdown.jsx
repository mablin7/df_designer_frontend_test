import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

function GraphDropdown({ handleClick }) {
  const clickHandler = (e) => {
      handleClick(e.target.innerText)
    //   e.stopPropagation()
  }
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="GraphList"
      onClick={(e) => console.log(e.currentTarget)}
    >
      <Dropdown.Item onClick={clickHandler}>1</Dropdown.Item>
      <Dropdown.Item onClick={clickHandler}>2</Dropdown.Item>
      <Dropdown.Item onClick={clickHandler}>3</Dropdown.Item>
    </DropdownButton>
  )
}

export default GraphDropdown

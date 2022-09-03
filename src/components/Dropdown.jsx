import React from "react"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

/*
при попытке включить тесты столкнулся с ошибками, пришлось изменить jest.config.js, добавить конфиг для babel
и установить недостающие зависимости. с тестами работыю впервые, поэтому пришлось потратить очень много времени,
чтобы понять в  чем были проблемы
тесты заработали, но я столкнулся с несколькими проблемами: без импорта React в каждый компонент 
первый тест не работал

со вторым тестом тоже возникли проблемы. если я не ошибаюсь, его нужно было писать асинхронно, и добавить userEvent
на кнопке дропдауна, так как список опций рендерится по условию(сейчас пишу и понимаю,
что его возможно стоило сделать невидимым и менять видимость по клику, тогда возможно тест был бы пройден)

второй тест получилось пройти только с рендером сразу открытого списка (иначе options просто не находились)
не стал оставлять задание в таком виде, а менять логику компонента или переписывать тесты уже нет времени
пока пытался выяснить в чем дело, переписал дропдаун сам вручную, думая, что проблема в библиотеке react bootstrap
в задании оставлю дропдаун из библиотеки, т.к. свой не было времени нормально стилизовать

третий тест не получилось завести. библиотека либо не находит опции либо не видит value. тестировал на своем дропдауне
четвертый тоже
*/

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
    <DropdownButton id="dropdown-basic-button" title="Graph List ">
      {dropdownItems}
    </DropdownButton>
  )
}

export default GraphDropdown

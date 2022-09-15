import React from "react"
import { forwardRef } from "react"
import { useDrag } from "../hooks/useDrag"
import { stylePicker } from "../utils/stylePicker"

const Node = forwardRef(({ node }, ref) => {
  // useDrag(ref)
  // console.log(ref)

  // было ошибкой тянуть react-archer в проект
  // но иначе непонятно сколько бы заняло времени написание своей логики отрисовки стрелок
  // проблема в следующем: библиотека стирает рефы вложенных в <ArcherElement> объектов
  // и я не могу получить к ним доступ, чтобы мой хук для drag'n'drop сработал
  // открыл issue в репозиториии библиотеки + написал разработчику
  // вот его комментарии и ссылка на issue:

  // Hi!
  // Thank you, there is an issue indeed.
  // I am overwriting the passed ref of the child of ArcherElement…
  // I had not thought of this.
  // Can you open an issue on the repo? It is relevant indeed :)
  // As a workaround, you can wrap your child with another div
  // <ArcherElement><div></div></ArcherElement>
  // =>
  // <ArcherElement> <div> <div ref={ref}> </div> </div> </ArcherElement>
  // Thanks!
  // Pierre

  // https://github.com/pierpo/react-archer/issues/180
  // https://photos.app.goo.gl/vMeGFMoQEJ2oH5XQ9

  //P.S. предложенный им способ не сработал
  // а хук рабочий!

  const positionMaker = (position) => {
    return position == 0
      ? "1"
      : position == 1
      ? "2"
      : position == 2
      ? "3"
      : null
  }
  //в поле node.position хранится положение ноды в столбце после "распутывания"
  //TODO: повесить добавление стилей для гридов на кнопку
  return (
    <div
      ref={ref}
      className="graph"
      key={node.id}
      style={{
        gridColumnStart: `${stylePicker(node.connection)}`

        //👇👇👇 этими стилями управляется положение ноды в столбце. стили генерируются динамически, исходя из того,
        //        в каком положении нод меньше всего пересечений ребер. проделать то же самое для остальных столбцов и алгоритм распутывания готов
        //   если расскомментировать ноды поменяют свои позиции
        // стрелки к сожалению не ререндерятся (не знаю особенность библиотеки или мой затуп)
        // gridRowStart: `${node?.position ? positionMaker(node.position) : ""}`
      }}
      id={node.id}
    >
      {node.name}({node.id})
    </div>
  )
})

export default Node

import React from "react"
import './style.css';

function NotFound(props) {

  return (
    <div className="NotFound">«Что-то пошло не так. Данной страницы не существует».</div>
  )
}

export default React.memo(NotFound)
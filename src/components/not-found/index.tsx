import React from "react"
import './style.css';

function NotFound() {

  return (
    <div className="NotFound" data-testid={'not-found'}>«Что-то пошло не так. Данной страницы не существует».</div>
  )
}

export default React.memo(NotFound)
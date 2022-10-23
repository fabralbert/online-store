import React from "react"
import './style.css';

function Loader() {

  return (
    <div className='Loader' data-testid={'loader'}>
        <div className='Loader-content'></div>
    </div>
  )
}

export default React.memo(Loader)
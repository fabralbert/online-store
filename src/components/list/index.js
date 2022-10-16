import React from 'react';

import './style.css';

function List(props) {

  return (
    <>
      <div className='List'>{props.items.map(item =>
        <div key={item.id} className='List-item'>
          {props.renderItem(item)}
        </div>
      )}
      </div>

    </>
  )
}

export default React.memo(List);

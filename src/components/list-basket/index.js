import React from 'react';

import './style.css';

function ListBasket(props) {

  return (
    <>
      <div className='ListBasket'>{props.items.map(item =>
        <div key={item.id} className='ListBasket-item'>
          {props.renderItem(item)}
        </div>
      )}
      </div>

    </>
  )
}

export default React.memo(ListBasket);

import React from 'react';

import './style.css';

interface Item {
  id: string;
  img: string;
  title: string;
  price: number;
  countLeft: number;
  description: string;
  amount?: number;
  selfTotalSum?: number;
}


interface ListProps {
  items: Item[];
  renderItem: (item: Item) => React.ReactElement;
}


function List(props: ListProps) {
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

import React from 'react';

import './style.css';

interface Item {
  id: string;
  img: string;
  title: string;
  price: number;
  countLeft: number;
  description: string;
}


interface ListProps {
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
}


function List(props: ListProps) {
  return (
    <>
      <div className='List' data-testid={'list'}>{props.items.map(item =>
        <div key={item.id} className='List-item'>
          {props.renderItem(item)}
        </div>
      )}
      </div>
    </>
  )
}

export default React.memo(List);

import React from 'react';
import './style.css';

interface Item {
  id?: string;
  img?: string;
  title?: string;
  price?: number;
  countLeft?: number;
  description?: string;
  amount?: number;
  selfTotalSum?: number;
}

interface ListBasketProps {
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
}

function ListBasket(props: ListBasketProps) {

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

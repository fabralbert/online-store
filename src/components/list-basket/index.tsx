import React from 'react';
import './style.css';

interface BasketItem {
  id: string;
  img: string;
  title: string;
  price: number;
  countLeft: number;
  description: string;
  amount: number;
  selfTotalSum: number;
}

interface ListBasketProps {
  items: BasketItem[];
  renderItem: (item: BasketItem) => React.ReactNode;
}

function ListBasket(props: ListBasketProps) {

  return (
    <>
      <div className='ListBasket' data-testid={'basket-list'}>{props.items.map(item =>
        <div key={item.id} className='ListBasket-item'>
          {props.renderItem(item)}
        </div>
      )}
      </div>

    </>
  )
}

export default React.memo(ListBasket);

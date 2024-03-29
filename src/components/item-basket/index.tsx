import React, {useCallback} from 'react';
import {Link} from "react-router-dom";
import numberFormat from "../../utils/number-format";
import './style.css';

interface Item {
  id: string;
  img: string;
  title: string;
  price: number;
  countLeft: number;
  description: string;
  amount: number;
  selfTotalSum: number;
}

interface ItemBasketProps {
  link: string;
  item: Item;
  onRemove: (id: string) => void;
  onLink: () => void;
}

function ItemBasket(props: ItemBasketProps) {

  const callbacks = {
    onRemove: useCallback(() => props.onRemove(props.item.id), [props.onRemove, props.item])
  };

  return (
    <div className='ItemBasket' data-testid={'item-basket'}>
      <div className='ItemBasket-body'>
        <div className='ItemBasket-id'>{props.item.id}</div>
        <div className='ItemBasket-title'>
          {props.link ? <Link onClick={props.onLink} to={props.link} data-testid={'btn-link-close'}>{props.item.title}</Link> : 'Название товара'}
        </div>
        <div className='ItemBasket-price'>{numberFormat(props.item.price)} ₽</div>
        <div className='ItemBasket-amount'>{props.item.amount} шт</div>
        <div className='ItemBasket-total'>{numberFormat(props.item.selfTotalSum)} ₽</div>
        <button onClick={callbacks.onRemove} data-testid={'btn-remove'}>Удалить</button>
      </div>

    </div>
  )
}

export default React.memo(ItemBasket);

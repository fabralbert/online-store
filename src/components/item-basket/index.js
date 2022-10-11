import React, {useCallback} from 'react';
import {Link} from "react-router-dom";
import numberFormat from "../../utils/number-format";
import './style.css';

function ItemBasket(props) {

  const callbacks = {
    onRemove: useCallback((e) => props.onRemove(props.item.id), [props.onRemove, props.item])
  };

  return (
    <div className='ItemBasket'>
      <div className='ItemBasket-body'>
        <div className='ItemBasket-id'>{props.item.id}</div>
        <div className='ItemBasket-title'>
          {props.link ? <Link onClick={props.onLink} to={props.link}>{props.item.title}</Link> : 'Название товара'}
        </div>
        <div className='ItemBasket-price'>{numberFormat(props.item.price)} ₽</div>
        <div className='ItemBasket-amount'>{props.item.amount} шт</div>
        <div className='ItemBasket-total'>{numberFormat(props.item.selfTotalSum)} ₽</div>
        <button onClick={callbacks.onRemove}>Удалить</button>
      </div>

    </div>
  )
}

export default React.memo(ItemBasket);

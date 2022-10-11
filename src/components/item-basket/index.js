import React, {useCallback} from 'react';
import {Link} from "react-router-dom";
import numberFormat from "../../utils/number-format";
import './style.css';

function ItemBasket(props) {

  return (
    <div className='ItemBasket'>
      <div className='ItemBasket-body'>
        <div className='ItemBasket-id'>{props.item.id.slice(0,4)}</div>
        <div className='ItemBasket-title'>
          {props.link ? <Link onClick={props.onLink} to={props.link}>{props.item.title}</Link> : 'Название товара'}
        </div>
        <div className='ItemBasket-price'>{numberFormat(props.item.price)} ₽</div>
        <div className='ItemBasket-amount'>{props.item.amount} шт</div>
        <div className='ItemBasket-total'>{numberFormat(props.item.selfTotalSum)} ₽</div>
        <button>Удалить</button>
      </div>

    </div>
  )
}

export default React.memo(ItemBasket);

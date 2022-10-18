import React from 'react';
import './style.css';
import plural from "plural-ru";
import numberFormat from "../../utils/number-format";

interface BasketSimpleProps {
  user: string;
  totalAmount: number;
  sum: number;
  onOpen: () => void;
}

function BasketSimple(props: BasketSimpleProps) {

  return (
    <>
      {
        props.user && 
        <div className='BasketSimple'>
          <span className='BasketSimple-label'>В корзине:</span>
          <span className='BasketSimple-total'>{props.totalAmount ? `${props.totalAmount} ${plural(props.totalAmount, 'товар', 'товара', 'товаров')} на сумму ${numberFormat(props.sum)} ₽` : 'пусто'}</span>
          <div className='BasketSimple-button' onClick={props.onOpen}/>
        </div>
      }
    </>
  )
}

export default React.memo(BasketSimple);

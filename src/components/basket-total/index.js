import React from 'react';
import numberFormat from "../../utils/number-format";
import './styles.css';

function BasketTotal(props) {
  return (
      <div className='BasketTotal'>
        <div className='BasketTotal-sum'>Сумма: {numberFormat(props.sum)} ₽</div>
        <button className='BasketTotal-btn-clear'>Очистить</button>
        <button className='BasketTotal-btn-pay' disabled>Оплатить</button>
      </div>
  )
}

export default React.memo(BasketTotal);

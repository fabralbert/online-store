import React from 'react';
import numberFormat from "../../utils/number-format";
import './styles.css';

interface BasketTotalProps {
  sum: number;
  onClear: () => void;
}

function BasketTotal(props: BasketTotalProps) {
  
  return (
      <div className='BasketTotal'>
        <div className='BasketTotal-sum'>Сумма: {numberFormat(props.sum)} ₽</div>
        <button className='BasketTotal-btn-clear' onClick={props.onClear}>Очистить</button>
        <button className='BasketTotal-btn-pay' disabled>Оплатить</button>
      </div>
  )
}

export default React.memo(BasketTotal);

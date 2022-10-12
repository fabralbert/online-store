import React, {useCallback} from 'react';
import {Link} from "react-router-dom";
import numberFormat from "../../utils/number-format";
import './style.css';

function Item(props) {

  const callbacks = {
    onAdd: (e) => props.onAdd(props.item.id),
    onOpen: () => props.onOpen()
  };

  return (
    <div className='Item'>
        <div className='Item-head'><img alt='book1' src={props.item.img}/></div>
        <div className='Item-prop'>
          <div className='Item-label'>Название:</div>
          <div className='Item-title'>
            {props.link ? <Link to={props.link}>{props.item.title}</Link> : props.item.title}
          </div>
        </div>
        <div className='Item-prop'>
          <div className='Item-label'>Цена: </div>
          <div className='Item-price'>{numberFormat(props.item.price)} ₽</div>
        </div>
        <div className='Item-footer'>
          {props.user ? 
          <button className='Item-btn' onClick={callbacks.onAdd}>Добавить</button> :
          <div className='Item-warning' onClick={callbacks.onOpen}>«Чтобы добавить товар в корзину залогинтесь»</div>
          }
        </div>
    </div>
  )
}

export default React.memo(Item);

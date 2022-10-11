import React from 'react';
import numberFormat from "../../utils/number-format";
import './style.css';
import book1 from '../../img/book1.jpg';

function ArticleCard(props) {

  const callbacks = {
    onAdd: () => props.onAdd(props.article.id)
  };

  return (
    <div className='ArticleCard'>
      <div className='ArticleCard-left'>
        <div className='ArticleCard-prop'>
          <img className='ArticleCard-img' src={props.article.img} alt="book" />
        </div>
      </div>
      <div className='ArticleCard-right'>
        <div className='ArticleCard-prop'>
          <div className='ArticleCard-label'>Название:</div>
          <div className='ArticleCard-value'>{props.article.title}</div>
        </div>
        <div className='ArticleCard-prop'>
          <div className='ArticleCard-label'>Цена:</div>
          <div className='ArticleCard-value'>{numberFormat(props.article.price)} ₽</div>
        </div>
        <div className='ArticleCard-prop'>
          <div className='ArticleCard-label'>В наличии:</div>
          <div className='ArticleCard-value'>{props.article.countLeft} шт</div>
        </div>
        <div className='ArticleCard-prop'>
          <div className='ArticleCard-label'>Описание:</div>
          <div className='ArticleCard-value'>{props.article.description}</div>
        </div>
        <button className='ArticleCard-btn' onClick={callbacks.onAdd}>Добавить</button>
      </div>
    </div>
  )
}

export default React.memo(ArticleCard);

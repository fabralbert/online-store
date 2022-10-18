import React from 'react';
import numberFormat from "../../utils/number-format";
import './style.css';

interface Article {
  id: string;
  img: string;
  title: string;
  price: number;
  countLeft: number;
  description: string;
}

interface ArticleCardProps {
  article: Article;
  user: string;
  onOpen: () => void;
  onEdit: () => void;
  onAdd: (id: string) => void;
}

function ArticleCard(props: ArticleCardProps) {

  const callbacks = {
    onAdd: () => props.onAdd(props.article.id),
    onOpen: () => props.onOpen(),
    onEdit: () => props.onEdit(),
  };

  return (
    <div className='ArticleCard'>
      <div className='ArticleCard-content'>
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
        </div>
      </div>
      {
        props.user ? 
        <div className='ArticleCard-buttons'>
          <button className='ArticleCard-btnAdd' onClick={callbacks.onAdd}>Добавить</button>
         {props.user === 'admin' && <button className='ArticleCard-btnEdit' onClick={callbacks.onEdit}>Редактировать</button>} 
        </div> : 
        <div className='ArticleCard-warning' onClick={callbacks.onOpen}>
          «Чтобы добавить товар в корзину залогиньтесь»
        </div>
      }

    </div>
  )
}

export default React.memo(ArticleCard);

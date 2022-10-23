import React from 'react';
import numberFormat from "../../utils/number-format";
import './style.css';

interface Article {
  id: string;
  img: string;
  title: string;
  price: number | string;
  countLeft: number | string;
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

  const onAdd = () => props.onAdd(props.article.id);
  const onOpen = () => props.onOpen();
  const onEdit = () => props.onEdit();

  return (
    <div className='ArticleCard' data-testid="article-card">
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
            <div className='ArticleCard-value'>{numberFormat(Number(props.article.price))} ₽</div>
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
        <div className='ArticleCard-buttons' data-testid="article-card-buttons">
          <button className='ArticleCard-btnAdd' onClick={onAdd} data-testid="article-card-btn-add">Добавить</button>
         {props.user === 'admin' && <button className='ArticleCard-btnEdit' onClick={onEdit} data-testid="article-card-btn-edit">Редактировать</button>} 
        </div> : 
        <div className='ArticleCard-warning' onClick={onOpen} data-testid="article-card-btn-open">
          «Чтобы добавить товар в корзину залогиньтесь»
        </div>
      }

    </div>
  )
}

export default React.memo(ArticleCard);

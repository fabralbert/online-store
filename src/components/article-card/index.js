import React from 'react';
import numberFormat from "../../utils/number-format";
import './style.css';
import book1 from '../../img/book1.jpg';

function ArticleCard(props) {

  return (
    <div className='ArticleCard'>
      <div className='ArticleCard-description'>О товаре:</div>
      <div className='ArticleCard-prop'>
        <img className='ArticleCard-img' src={book1} alt="book1" />
      </div>
      <div className='ArticleCard-prop'>
        <div className='ArticleCard-label'>Название:</div>
        <div className='ArticleCard-value'>Игра престолов</div>
      </div>
      <div className='ArticleCard-prop'>
        <div className='ArticleCard-label'>Цена:</div>
        <div className='ArticleCard-value'>{numberFormat(12321312)} ₽</div>
      </div>
      <div className='ArticleCard-prop'>
        <div className='ArticleCard-label'>В наличии:</div>
        <div className='ArticleCard-value'>5</div>
      </div>
      <div className='ArticleCard-prop'>
        <div className='ArticleCard-label'>Описание:</div>
        <div className='ArticleCard-value'>"Танцем драконов" издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу "мать драконов" Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.</div>
      </div>

      <button>Добавить</button>
    </div>
  )
}

export default React.memo(ArticleCard);

import React, {useState} from 'react';
import numberFormat from "../../utils/number-format";
import CustomTextArea from '../custom-textarea';
import CustomInput from '../custom-input';
import './style.css';

function ArticleCardEdit(props) {

  const callbacks = {
    onCancel: () => props.onCancel(),
    onSave: () => props.onSave(),
    onChangeValue:(value, name) => {
      if (name === 'description'){
        console.log('desi')
        const lengthOfValue = value.trim().length;
        setCounterLimitData(prevData => ({...prevData, [name]: lengthOfValue}));
      }
      setData(prevData => ({...prevData, [name]: value}));
    },
  };

  const [data, setData] = useState({
    title: props.article.title,
    price: props.article.price,
    countLeft: props.article.countLeft,
    description: props.article.description,
  });

  const [counterLimitData, setCounterLimitData] = useState({
    title: 0,
    price: 0,
    countLeft: 0,
    description: 0,
  });

  return (
    <div className='ArticleCardEdit'>
      <div className='ArticleCardEdit-content'>
        <div className='ArticleCardEdit-left'>
          <div className='ArticleCardEdit-prop'>
            <img className='ArticleCardEdit-img' src={props.article.img} alt="book" />
          </div>
        </div>
        <div className='ArticleCardEdit-right'>
          <div className='ArticleCardEdit-prop'>
            <div className='ArticleCardEdit-label'>Название:</div>
            {/* <input className='ArticleCardEdit-value' value={title}/> */}
            <CustomInput type='text' name='title' value={data.title} onChange={callbacks.onChangeValue} width={600}/>
          </div>
          <div className='ArticleCardEdit-prop'>
            <div className='ArticleCardEdit-label'>Цена:</div>
            {/* <input className='ArticleCardEdit-value' defaultValue={props.article.title} value={price}/> */}
            <CustomInput type='number' name='price' value={data.price} onChange={callbacks.onChangeValue} width={600}/>
          </div>
          <div className='ArticleCardEdit-prop'>
            <div className='ArticleCardEdit-label'>В наличии:</div>
            {/* <input className='ArticleCardEdit-value' value={countLeft}/> */}
            <CustomInput type='number' name='countLeft' value={data.countLeft} onChange={callbacks.onChangeValue} width={600}/>
          </div>
          <div className='ArticleCardEdit-prop'>
            <div className='ArticleCardEdit-label'>Описание:</div>
            <CustomTextArea rows={6} type='text' name='description' value={data.description} onChange={callbacks.onChangeValue} countLimit={300} totalCount={counterLimitData.description} width={600}/>
            {/* <textarea className='ArticleCardEdit-value' value={description}/> */}
          </div>
        </div>
      </div>
      {
        props.user ? 
        <div className='ArticleCardEdit-buttons'>
          <button className='ArticleCardEdit-btnAdd' onClick={callbacks.onCancel}>Отмена</button>
         <button className='ArticleCardEdit-btnEdit' onClick={callbacks.onSave}>сохранить</button> 
        </div> : 
        <div className='ArticleCardEdit-warning' onClick={callbacks.onOpen}>
          «Чтобы добавить товар в корзину залогинтесь»
        </div>
      }

    </div>
  )
}

export default React.memo(ArticleCardEdit);

import React, {useState, useEffect} from 'react';
import CustomTextArea from '../custom-textarea';
import CustomInput from '../custom-input';
import './style.css';

interface Article {
  id: string;
  img: string;
  title: string;
  price: number | string;
  countLeft: number | string;
  description: string;
}

interface DataSave {
  title: string;
  price: number | string;
  countLeft: number | string;
  description: string;
}

interface ArticleCardEditProps {
  article: Article;
  onCancel: () => void;
  onSave: (data: DataSave) => void;
}

function ArticleCardEdit(props: ArticleCardEditProps) {

  const [isValidPassed, setIsValidPassed] = useState(false)

  const callbacks = {
    // отменяем редактирование
    onCancel: () => props.onCancel(),
    // сохраняем отредактированные данные
    onSave: (e:  React.FormEvent) => {
      e.preventDefault();
      for (let itemData in data){
        callbacks.validation(itemData)
      }

      setIsValidPassed(true)
    },
    // смена состояние количества доступных символов
    onChangeValue:(value: string, name: string) => {
      if (name === 'title'){
        const lengthOfValue = value.trim().length;
        setCounterLimitData(prevData => ({...prevData, [name]: lengthOfValue}));
      }
      if (name === 'price'){
        const lengthOfValue = value.trim().length;
        setCounterLimitData(prevData => ({...prevData, [name]: lengthOfValue}));
      }
      if (name === 'countLeft'){
        const lengthOfValue = value.trim().length;
        setCounterLimitData(prevData => ({...prevData, [name]: lengthOfValue}));
      }      
      if (name === 'description'){
        const lengthOfValue = value.trim().length;
        setCounterLimitData(prevData => ({...prevData, [name]: lengthOfValue}));
      }
      setData(prevData => ({...prevData, [name]: value}));
    },

     validation: (name: string) => {
      const value = data[name as keyof typeof data] 
      
      if (!value.toString().trim()) {
        setDataError(prevData => ({...prevData, [name]: 'Поле пустое. Заполните пожалуйста.'}))
        return
      }

      switch(name) {
        case 'title': {
          if (counterLimitData[name] <= 60){
            setDataError(prevData => ({...prevData, [name]: ''}))
            return;
          } else {
            setDataError(prevData => ({...prevData, [name]: 'Превышен лимит символов в поле'}))
          }
          break;
        }
        case 'price': {
          if (counterLimitData[name] <= 30){
            setDataError(prevData => ({...prevData, [name]: ''}))
            return;
          } else {
            setDataError(prevData => ({...prevData, [name]: 'Превышен лимит символов в поле'}))
          }
          break;
        }
        case 'countLeft': {
          if (counterLimitData[name] <= 30){
            setDataError(prevData => ({...prevData, [name]: ''}))
            return;
          } else {
            setDataError(prevData => ({...prevData, [name]: 'Превышен лимит символов в поле'}))
          }
          break;
        }
        case 'description': {
          if (counterLimitData[name] <= 600){
            setDataError(prevData => ({...prevData, [name]: ''}))
            return;
          } else {
            setDataError(prevData => ({...prevData, [name]: 'Превышен лимит символов в поле'}))
          }
          break;
        }
        default: {
          setDataError(prevData => ({...prevData, [name]: ''}))
          break;
        }
      };
    }
  };

  const [data, setData] = useState({
    title: props.article.title,
    price: props.article.price,
    countLeft: props.article.countLeft,
    description: props.article.description,
  });

  // состояние ошибок
  const [dataError, setDataError] = useState({
    title: '',
    price: '',
    countLeft: '',
    description: '',
  });

  const [counterLimitData, setCounterLimitData] = useState({
    title: props.article.title.length,
    price: String(props.article.price).length,
    countLeft: String(props.article.countLeft).length,
    description: props.article.description.length,
  });

  useEffect(() => {
    const isDataErrorEmpty = Object.values(dataError).every(value => value === "");
    const isData = Object.values(data).some(value => value === "");

    if (isValidPassed && isDataErrorEmpty && !isData) {
      props.onSave(data)
    }
    setIsValidPassed(false)
  }, [isValidPassed])

  
  return (
    <form className='ArticleCardEdit' onSubmit={callbacks.onSave} data-testid="article-card-edit">
      <div className='ArticleCardEdit-content'>
        <div className='ArticleCardEdit-left'>
          <div className='ArticleCardEdit-prop'>
            <img className='ArticleCardEdit-img' src={props.article.img} alt="book" />
          </div>
        </div>
        <div className='ArticleCardEdit-right'>
          <div className='ArticleCardEdit-prop'>
            <div className='ArticleCardEdit-label'>Название:</div>
            <CustomInput type='text' name='title' value={data.title} onChange={callbacks.onChangeValue} width={600} countLimit={60} totalCount={counterLimitData.title} isCount={true}/>
            <div className='ArticleCardEdit-error'>{dataError.title}</div>
          </div>
          <div className='ArticleCardEdit-prop'>
            <div className='ArticleCardEdit-label'>Цена:</div>
            <CustomInput type='number' name='price' value={data.price} onChange={callbacks.onChangeValue} width={600} countLimit={30} totalCount={counterLimitData.price} isCount={true}/>
            <div className='ArticleCardEdit-error'>{dataError.price}</div>
          </div>
          <div className='ArticleCardEdit-prop'>
            <div className='ArticleCardEdit-label'>В наличии:</div>
            <CustomInput type='number' name='countLeft' value={data.countLeft} onChange={callbacks.onChangeValue} width={600} countLimit={30} totalCount={counterLimitData.countLeft} isCount={true}/>
            <div className='ArticleCardEdit-error'>{dataError.countLeft}</div>
          </div>
          <div className='ArticleCardEdit-prop'>
            <div className='ArticleCardEdit-label'>Описание:</div>
            <CustomTextArea rows={6} name='description' value={data.description} onChange={callbacks.onChangeValue} countLimit={600} totalCount={counterLimitData.description} width={600}/>
            <div className='ArticleCardEdit-error'>{dataError.description}</div>
          </div>
        </div>
      </div>
      <div className='ArticleCardEdit-buttons'>
        <button className='ArticleCardEdit-btnAdd' onClick={callbacks.onCancel} data-testid="article-card-edit-btn-cancel">Отмена</button>
        <button className='ArticleCardEdit-btnEdit' type='submit' data-testid="article-card-btn-save">сохранить</button> 
      </div>
    </form>
  )
}

export default React.memo(ArticleCardEdit);

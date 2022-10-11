import React, {useCallback, useEffect, useState, useContext} from 'react'
import {useNavigate} from "react-router-dom";
import CustomInput from '../custom-input';
import Field from '../field';
import './style.css';
import { ACTIONS, DataContext } from "../../context/dataContext";

function FormQuestion() { 
  const { dispatch } = useContext(DataContext);

  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false)

  // данные для контроля input и textarea
  const [data, setData] = useState({
    login: '',
    password: '',
  });

  // данные для ошибок
  const [dataError, setDataError] = useState({
    login: '',
    password: '',
  });

  // атрибуты и настройки для label и input
  const inputs = [
    {
      id: 1,
      type: "text",
      name:'login',
      placeholder: 'Ввведите логин',
      label: 'Логин',
    },
    {
      id: 2,
      type: "text",
      name:'password',
      placeholder: 'Ввведите Пароль',
      label: 'Пароль',
    },
  ]

  // все наши функции
  const callbacks = {
    // стираем форму
    resetForm: (e) => { 
      e.preventDefault();
      setData({
        login: '',
        password: '',
      })
      navigate('/')
    },

    // показываем все наши данные
    showInputsInJson: (e) => {
      e.preventDefault();
      for (let inputItemData in data){
        callbacks.validation(inputItemData)
      }

      setIsSubmitted(true)
    },

    // для смены состояния инпутов
    onChangeValue: useCallback((value, name) => {
      setData(prevData => ({...prevData, [name]: value}));
    }, []),

    // Валидация
    validation: (name) => {
      if (!data[name].trim()) {
        setDataError(prevData => ({...prevData, [name]: 'Поле пустое. Заполните пожалуйста.'}))
        return
      } else {
        setDataError(prevData => ({...prevData, [name]: ''}))
      }
    }
  }

  
  useEffect(() => {
    const isDataErrorEmpty = Object.values(dataError).every(value => value === "");
    
    // проверка что все ошибки пустые, значит ошибок в валидации нету.
    // также проверяем была уже нажата кнпока sumbit или нет
    if (isSubmitted && isDataErrorEmpty) {
      dispatch({
        type: ACTIONS.SAVE_DATA,
        payload: { 
          data,
          allInputs: [...inputs]
        },
      })
      navigate('/')
    }
    setIsSubmitted(false)
  }, [isSubmitted])

  return (
    <>
      <form className='FormQuestion' onSubmit={callbacks.showInputsInJson}>
        <h1 className='FormQuestion-title'>Авторизация</h1>
        {
          inputs.map((input) => (
          <Field label={input.label} error={dataError[input.name]} key={input.id} width={400}>
            <CustomInput type={input.type} name={input.name} value={data[input.name]} onChange={callbacks.onChangeValue} width={400}/>
          </Field>
          ))
        }
        <div className='FormQuestion-buttons'>
          <button className='FormQuestion-cancelBtn' onClick={callbacks.resetForm}>Отмена</button>
          <button className='FormQuestion-saveBtn' type='submit'>Войти</button>
        </div>
      </form>
  </>
  );
}

export default FormQuestion;
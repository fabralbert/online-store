import React, {useCallback, useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import CustomInput from '../custom-input';
import Field from '../field';
import './style.css';

function LoginForm(props) { 

  const navigate = useNavigate();

  // проверка все ли поля валидны
  const [isValidPassed, setIsValidPassed] = useState(false)

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
      // закрываем модалку
      props.onClose()
    },

    // показываем все наши данные
    onLogin: (e) => {
      e.preventDefault();
      // Валидируем по кнопке
      for (let inputItemData in data){
        callbacks.validation(inputItemData)
      }

      // проверяем на пустые поля, если везде есть какие-либо знаки значит true
      const isDataEmpty = Object.values(data).every(value => value.trim() !== "");
      // устанавливаем, то что валидация пройдена
      if (isDataEmpty){
        setIsValidPassed(true)
      }
      // вход
      props.onLogin({login: data.login, password: data.password})
    },

    // для смены состояния инпутов
    onChangeValue: useCallback((value, name) => {
      setData(prevData => ({...prevData, [name]: value}));
    }, []),

    // Валидация
    validation: (name) => {
      if (!data[name].trim()) {
        setDataError(prevData => ({...prevData, [name]: 'Поле пустое. Заполните пожалуйста.'}))
        setIsValidPassed(false)
        return
      } else {
        setDataError(prevData => ({...prevData, [name]: ''}))
      }
    }
  }

  useEffect(() => {
    if (isValidPassed && !props.errorLogin && props.user) {
      navigate('/');
      // закрываем модалку
      props.onClose()
    }

  }, [isValidPassed, props.errorLogin, props.onClose, props.user])

  return (
      <form className='LoginForm' onSubmit={callbacks.onLogin}>
        <h1 className='LoginForm-title'>Авторизация</h1>
        {
          inputs.map((input) => (
          <Field label={input.label} error={dataError[input.name]} key={input.id} width={400}>
            <CustomInput type={input.type} name={input.name} value={data[input.name]} onChange={callbacks.onChangeValue} width={400}/>
          </Field>
          ))
        }
        <div className='LoginForm-loginError'>{isValidPassed && props.errorLogin}</div>
        <div className='LoginForm-buttons'>
          <button className='LoginForm-cancelBtn' type='button' onClick={callbacks.resetForm}>Отмена</button>
          <button className='LoginForm-saveBtn' type='submit'>Войти</button>
        </div>
      </form>
  );
}

export default React.memo(LoginForm);
import React, {useCallback, useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import CustomInput from '../custom-input';
import Field from '../field';
import './style.css';


interface Data {
  username: string;
  password: string;
}

interface LoginFormProps {
  errorLogin: string | null;
  user: string,
  onClose: () => void;
  onLogin: (data: Data) => void;
}

function LoginForm(props: LoginFormProps) { 

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


  // стираем форму
  const resetForm = (e: React.FormEvent) => { 
    e.preventDefault();
    setData({
      login: '',
      password: '',
    })
    // закрываем модалку
    props.onClose()
  }

  // показываем все наши данные
  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Валидируем по кнопке
    for (let inputItemData in data){
      validation(inputItemData)
    }

    // проверяем на пустые поля, если везде есть какие-либо знаки значит true
    const isDataEmpty = Object.values(data).every(value => value.trim() !== "");
    // устанавливаем, то что валидация пройдена
    if (isDataEmpty){
      setIsValidPassed(true)
    }
    // вход
    props.onLogin({username: data.login, password: data.password})
  }

  // для смены состояния инпутов
  const onChangeValue = useCallback((value: string, name: string) => {
    setData(prevData => ({...prevData, [name]: value}));
  }, [])

  // Валидация
  const validation = (name: string) => {
    if (!data[name as keyof typeof data].trim()) {
      setDataError(prevData => ({...prevData, [name]: 'Поле пустое. Заполните пожалуйста.'}))
      setIsValidPassed(false)
      return
    } else {
      setDataError(prevData => ({...prevData, [name]: ''}))
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
      <form className='LoginForm' onSubmit={onLogin} data-testid={'login-form'}>
        <h1 className='LoginForm-title'>Авторизация</h1>
        {
          inputs.map((input) => (
          <Field label={input.label} error={dataError[input.name as keyof typeof dataError]} key={input.id} width={400}>
            <CustomInput type={input.type} name={input.name} value={data[input.name as keyof typeof data]} onChange={onChangeValue} width={400}/>
          </Field>
          ))
        }
        <div className='LoginForm-loginError' data-testid={'error'}>{isValidPassed && props.errorLogin}</div>
        <div className='LoginForm-buttons'>
          <button className='LoginForm-cancelBtn' type='button' onClick={resetForm} data-testid={'on-close'}>Отмена</button>
          <button className='LoginForm-saveBtn' type='submit' data-testid={'on-login'}>Войти</button>
        </div>
      </form>
  );
}

export default React.memo(LoginForm);
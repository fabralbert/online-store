import React from 'react';
import './style.css';

interface LoginBtnProps {
  user: string;
  onUnlogin: () => void;
  onOpen: () => void;
}

function LoginBtn(props: LoginBtnProps) {

  return (
    props.user ? <button className='LoginBtn' onClick={props.onUnlogin}>Выйти</button> : 
    <button className='LoginBtn' onClick={props.onOpen}>Войти</button>
  )
}

export default React.memo(LoginBtn);

import React from 'react';
import {Link} from "react-router-dom";
import './style.css';

function LoginBtn(props) {

  return (
    <button className='LoginBtn' onClick={props.onOpen}>Войти</button>
  )
}

export default React.memo(LoginBtn);

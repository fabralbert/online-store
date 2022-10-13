import React from 'react';
import {Link} from "react-router-dom";
import './style.css';

function Menu(props) {

  return (
    <ul className='Menu'>
      {props.items.map(item => (
        <li key={item.key} className='Menu-item'>
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default React.memo(Menu);
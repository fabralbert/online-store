import React from 'react';
import {Link} from "react-router-dom";
import './style.css';

interface Item {
  link: string;
  title: string;
  key: string | number;
}

interface MenuProps {
  items: Item[];
}

function Menu(props: MenuProps) {

  return (
    <ul className='Menu' data-testid={'menu'}>
      {props.items.map(item => (
        <li key={item.key} className='Menu-item'>
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default React.memo(Menu);

import React from 'react';
import './style.css';

function Layout({children, head}){

  return (
    <div className='Layout'>
      <div className='Layout-head'>
        {head || 'Интернет-магазин'}
      </div>
      <div className='Layout-content'>
        {children}
      </div>
    </div>
  )
}

export default React.memo(Layout);

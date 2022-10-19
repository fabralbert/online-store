import React from 'react';
import './style.css';

interface LayoutProps {
  children: React.ReactNode;
  head: React.ReactNode;
}

function Layout({children, head}: LayoutProps){

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

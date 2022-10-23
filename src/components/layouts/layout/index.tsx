import React from 'react';
import './style.css';

interface LayoutProps {
  children: React.ReactNode;
  head: React.ReactNode;
}

function Layout({children, head}: LayoutProps){

  return (
    <div className='Layout' data-testid={'layout'}>
      <div className='Layout-head' data-testid={'layout-head'}>
        {head || 'Интернет-магазин'}
      </div>
      <div className='Layout-content'>
        {children}
      </div>
    </div>
  )
}

export default React.memo(Layout);

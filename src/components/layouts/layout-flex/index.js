import React from 'react';
import './style.css';

function LayoutFlex({children, flex}){

  return (
    <div className={`LayoutFlex ${flex}`}>
      {children}
    </div>
  )
}

export default React.memo(LayoutFlex);

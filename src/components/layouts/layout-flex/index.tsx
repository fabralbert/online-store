import React from 'react';
import './style.css';

interface LayoutFlexProps {
  children: React.ReactNode;
  flex: string;
}

function LayoutFlex({children, flex}: LayoutFlexProps){

  return (
    <div className={`LayoutFlex ${flex}`} data-testid={'layout-flex'}>
      {children}
    </div>
  )
}

export default React.memo(LayoutFlex);

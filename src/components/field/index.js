import React from 'react';
import './style.css';

function Field({label, error, children, width}){

  return (
    <div className='Field'>
      <label className='Field-label'>{label}</label>
      <div className='Field-input'>
        {children}
      </div>
      <div className='Field-error' style={{width: `${width}px`}}>
        {error}
      </div>
    </div>
  )
}

export default React.memo(Field);

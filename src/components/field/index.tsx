import React from 'react';
import './style.css';


interface FieldProps {
  width: number;
  children: React.ReactNode;
  error: string;
  label: string
}

function Field({label, error, children, width}: FieldProps){

  return (
    <div className='Field' data-testid={'field'}>
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

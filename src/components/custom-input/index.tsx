import React from 'react';
import './style.css';

interface CustomInputProps {
  type: string;
  name: string;
  value: string | number;
  placeholder?: string;
  width: number;
  totalCount?: number | string;
  countLimit?: number | string;
  error?: string;
  isCount?: boolean;
  onCancel?: () => void;
  onChange: (value: string, name: string) => void;
}

function CustomInput(props: CustomInputProps){

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.onChange(e.target.value, props.name);
  };

  return (
    <>
      <input className='CustomInput' type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} onChange={onChangeValue} style={{width: `${props.width}px`}} data-testid={'custom-input'}/>
      {!props.error && props.isCount && props.totalCount !== undefined && props.countLimit &&
      <div className='CustomInput-counter' data-testid={'custom-input-counter'}>
          <span className='CustomInput-total' style={{color: `${props.totalCount > props.countLimit ? 'red' : 'black'}`}}>{props.totalCount}</span>
          <span style={{color: `${props.totalCount > props.countLimit ? 'red' : 'black'}`}}>/{props.countLimit}</span>
      </div>
      }
    </>
  );
}

export default React.memo(CustomInput)
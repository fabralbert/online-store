import React from 'react'
import './style.css';

interface CustomTextAreaProps {
  name: string;
  value: string;
  placeholder?: string;
  width: number;
  totalCount: number;
  countLimit: number;
  error?: string;
  rows: number;
  onCancel?: () => void;
  onChange: (value: string, name: string) => void;
}

function CustomTextArea(props: CustomTextAreaProps) {
  
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(e.target.value, props.name)
  }

  return (
    <>
      <textarea className='CustomTextArea' rows={props.rows} name={props.name} value={props.value} placeholder={props.placeholder} onChange={onChangeValue} style={{width: `${props.width}px`}} data-testid={'custom-textarea'}/>
      {!props.error &&
      <div className='CustomTextArea-counter' data-testid={'custom-textarea-counter'}>
          <span className='CustomTextArea-total' style={{color: `${props.totalCount > props.countLimit ? 'red' : 'black'}`}}>{props.totalCount}</span>
          <span style={{color: `${props.totalCount > props.countLimit ? 'red' : 'black'}`}}>/{props.countLimit}</span>
      </div>}
    </>
  );
}

export default React.memo(CustomTextArea);
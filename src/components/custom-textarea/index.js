import React from 'react'
import './style.css';

function CustomTextArea(props) {
  
  const onChangeValue = (e) => {
    props.onChange(e.target.value, props.name)
  }

  return (
    <div className='check'>
      <textarea className='CustomTextArea' rows={props.rows} type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} onChange={onChangeValue} style={{width: `${props.width}px`}}/>
      {!props.error &&
      <div className='CustomTextArea-counter'>
          <span className='CustomTextArea-total' style={{color: `${props.totalCount > props.countLimit ? 'red' : 'black'}`}}>{props.totalCount}</span>
          <span style={{color: `${props.totalCount > props.countLimit ? 'red' : 'black'}`}}>/{props.countLimit}</span>
      </div>}
    </div>
  );
}

export default React.memo(CustomTextArea);
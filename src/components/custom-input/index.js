import React from 'react';
import './style.css';

function CustomInput(props){

  const onChangeValue = (e) => {
    e.preventDefault();
    props.onChange(e.target.value, props.name);
  };

  return (
    <>
      <input className='CustomInput' type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} onChange={onChangeValue} style={{width: `${props.width}px`}}/>
      {!props.error && props.isCount &&
      <div className='CustomInput-counter'>
          <span className='CustomInput-total' style={{color: `${props.totalCount > props.countLimit ? 'red' : 'black'}`}}>{props.totalCount}</span>
          <span style={{color: `${props.totalCount > props.countLimit ? 'red' : 'black'}`}}>/{props.countLimit}</span>
      </div>
      }
    </>
  );
}

export default React.memo(CustomInput)
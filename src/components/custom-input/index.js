import React from 'react';
import './style.css';

function CustomInput(props){

  const onChangeValue = (e) => {
    e.preventDefault();
    props.onChange(e.target.value, props.name);
  };

  return (
    <div>
      <input className='CustomInput' type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} onChange={onChangeValue} style={{width: `${props.width}px`}}/>
    </div>
  );
}

export default React.memo(CustomInput)
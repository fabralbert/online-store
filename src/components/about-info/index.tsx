import React from 'react';
import './style.css';

function AboutInfo() {

  return (
    <div className='AboutInfo'>
      <h2 className='AboutInfo-title'>О нашем магизне</h2>
      <div className='AboutInfo-text'>В данном магазине вы можете приобрести различные книги.</div>
    </div>
  )
}

export default React.memo(AboutInfo);

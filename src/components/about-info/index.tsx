import React from 'react';
import './style.css';

function AboutInfo() {

  return (
    <div className='AboutInfo' data-testid="about-info">
      <h2 className='AboutInfo-title'>О нашем магизине</h2>
      <div className='AboutInfo-text'>В данном магазине вы можете приобрести различные книги.</div>
    </div>
  )
}

export default React.memo(AboutInfo);

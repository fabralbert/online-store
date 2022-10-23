import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './style.css';

interface LayoutModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

function LayoutModal(props: LayoutModalProps) {

  const frame = useRef<any>();

  useEffect(() => {
    let top = 10;
    
    if (window.innerWidth > frame.current.clientHeight) {
      top = Math.max(top, (window.innerHeight - frame.current.clientHeight) / 2 - top);
    }
    frame.current.style.marginTop = `${top}px`;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  });

  return (
    <div className='LayoutModal' data-testid={'layout-modal'}>
      <div className='LayoutModal-frame' ref={frame}>
        <div className='LayoutModal-head'>
          <h1 className='LayoutModal-title' data-testid={'layout-title'}>
            {props.title || 'Модальное окно'}
          </h1>
          <button className='LayoutModal-close' onClick={props.onClose} data-testid={'close-btn'}>Закрыть</button>
        </div>
        <div className='LayoutModal-content'>
          {props.children}
        </div>
      </div>
    </div>
  );
}

LayoutModal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
  labelClose: PropTypes.string
};

LayoutModal.defaultProps = {
  title: 'Модалка',
  labelClose: 'Закрыть',
  onClose: () => {}
};

export default React.memo(LayoutModal);

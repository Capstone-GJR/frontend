import React from 'react';
import btn from './buttonStyles.module.css';

function Button(props) {

  return (
    <div className={btn.container}>
      <button className={btn.button}>
        <p className={btn.title}>
          <span className={btn.barlowFont}>{props.title}</span>
        </p>
      </button>
    </div>     
  )
}

export default Button;

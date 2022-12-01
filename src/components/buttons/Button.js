import React from 'react';
import btn from './button.module.css';

function Button(props) {

  return (
    <button className={btn.button}>
      <p className={btn.title}>
        <span className={btn.barlowFont}>{props.title}</span>
      </p>
    </button>
  )
}

export default Button;

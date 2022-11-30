import React from 'react';
import buttonStyles from './buttonStyles.module.css';

function Button(props) {

  return (
    <div className={buttonStyles.container}>
      <button className={buttonStyles.btn}>
          <p className={buttonStyles.title}>{props.title}</p>
        </button>
    </div>     
  )
}

export default Button;

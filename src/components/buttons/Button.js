import React from 'react'

function Button(props) {

  const btnStyle = {
    
  }

  return (
    <div>
      <button style={btnStyle}>
        {props.title}
      </button>
    </div>    
  )
}

export default Button;

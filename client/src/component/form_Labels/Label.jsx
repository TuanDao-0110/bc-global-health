import React from 'react'

function Label(props) {
  return (
    <div className='formLabels'>
    <label htmlFor={props.name}>{props.children}
    </label>

    </div>
  )
}

export default Label
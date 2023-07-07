import React from 'react'
import './button.css'

const Button = ({className,handleClick,label, value}) => {
  return (
    <div>
        <button type="submit" className={className} value={value} onClick={handleClick}>{label}%</button>
    </div>
  )
}

export default Button
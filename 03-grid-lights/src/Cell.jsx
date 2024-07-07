import React from 'react'

const Cell = ({filled, onClick, isDisabled, label}) => {
  return (
    <button 
        aria-label={label}
        onClick={onClick}
        className={filled ? "cell cell-activated" : "cell"}
        disabled={isDisabled}
    />
  )
}

export default Cell
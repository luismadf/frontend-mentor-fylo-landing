import React from 'react'
import './Button.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick = () => {} }) => {
  const handleOnClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick()
  }

  return (
    <button className="button" onClick={handleOnClick}>
      {children}
    </button>
  )
}

export default Button

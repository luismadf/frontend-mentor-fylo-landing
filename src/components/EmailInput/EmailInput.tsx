import React from 'react'
import './EmailInput.css'

interface EmailInputProps {
  fullWidth?: boolean
}

const EmailInput: React.FC<EmailInputProps> = ({ fullWidth }) => {
  return (
    <fieldset className={`email-input ${fullWidth ? 'full-width' : undefined}`}>
      <input type="email" placeholder="Enter your email..." />
      <span className="email-input__error-message">
        Please check your email
      </span>
    </fieldset>
  )
}

export default EmailInput

import React from 'react';
import './Button.css';
const Button = ({ text,onNext }) => {
    return (
      <button onClick={onNext} className="button">
          <span>{text}</span>
          <img className="image" src="/images/arrow-forward.png" alt="arrow" />
      </button>
    )
}

export default Button

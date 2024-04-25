import React from 'react';
import './button.css';
const Button = ({ content }) => {
  return (
    <button className="button">
      <div className="button-content">
        <p>{content}</p>
      </div>
    </button>
  );
};

export default Button;

import React from 'react';

const Button = () => {
  return (
    <style>
      {`
        .common-button-style {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem; 
            padding-left: 1rem;
            padding-right: 1rem; 
            margin-left: 0.5rem; 
            border-radius: 0.375rem; 
            color: #ffffff; 
            background-color: #2563EB; 
            box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06); 
        }

        .common-button-style:hover {
            border-width: 2px; 
            border-color: #2563EB; 
            color: #4F46E5; 
            background-color: whitesmoke;
        }
      `}
    </style>
  );
};

export default Button;

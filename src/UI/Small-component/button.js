import React from 'react';

const Button = ({ type = '', text, onclick, extraStyle, disable = false }) => {
  return (
    <button
      disabled={disable}
      className={`mx-auto  ${extraStyle}`}
      onClick={onclick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;

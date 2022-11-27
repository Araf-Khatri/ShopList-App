import React, { useRef } from 'react';

const AddInput = ({
  id,
  type,
  labelText,
  placeHolder,
  alphaOnly = () => {},
}) => {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        placeholder={placeHolder}
        type={type}
        pattern="[A-Za-z]*"
        // onKeyDown={(e) => /^[a-z]$/.test(e.key)}
        onKeyDown={alphaOnly}
        className="outline-0 rounded-sm ml-4 px-2 box-border"
        title="it should only contain Alphabets"
        required
      />
    </div>
  );
};

export default AddInput;

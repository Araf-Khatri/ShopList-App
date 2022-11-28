import React from 'react';

const SelectOption = ({
  For = '',
  placeholder = '',
  arrayOfOption,
  extraClass,
  onchange,
}) => {
  return (
    <div>
      {For && placeholder && <label htmlFor={For}>{placeholder}</label>}
      <select
        id={For}
        className={` outline-0 rounded-sm p-1 bg-white ${extraClass}`}
        onChange={onchange}
      >
        {arrayOfOption.map((op, i) => (
          <option key={i} value={op === 'All' ? '' : op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;

import { useEffect, useRef, useState } from 'react';

const DateOption = ({ ForO, ForT, placeholder, openingDate, closingDate }) => {
  const [mini, setMini] = useState('');
  const d = new Date();
  const currentDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

  return (
    <div className="flex gap-y-5 flex-wrap">
      <div>
        <label htmlFor={ForO}>Opening: </label>
        <input
          className={'mx-1'}
          id={ForO}
          type="date"
          ref={openingDate}
          onChange={() => {
            setMini(openingDate.current.value)
          }}
          min={currentDate}
          defaultValue={currentDate}
        />
      </div>
      <div>
        <label className={'ml-3'} htmlFor={ForT}>
          Closing:{' '}
        </label>
        <input
          className={' ml-1'}
          id={ForT}
          type="date"
          min={mini || currentDate}
          ref={closingDate}
          required
        />
      </div>
    </div>
  );
};

export default DateOption;

import { useEffect, useRef, useState } from 'react';

const DateOption = ({ ForO, ForT, placeholder, openingDate, closingDate }) => {
  const [mini, setMini] = useState('');
  const d = new Date();
  const currentDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  const [isEntering, setIsEntering] = useState(false);
  useEffect(() => {
    if (!isEntering) {
      setMini(openingDate.current.value);
    }
  }, [isEntering, openingDate, mini]);

  return (
    <div className="flex">
      <div>
        <label htmlFor={ForO}>Opening: </label>
        <input
          className={'mx-1'}
          id={ForO}
          type="date"
          ref={openingDate}
          onFocus={() => setIsEntering(true)}
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
          onFocus={() => setIsEntering(false)}
          required
        />
      </div>
    </div>
  );
};

export default DateOption;

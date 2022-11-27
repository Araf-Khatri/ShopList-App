import { memo } from 'react';
import { MdDelete } from 'react-icons/md';

const ShopCard = ({
  name,
  category,
  location,
  opening,
  closing,
  deleteShopHandler,
}) => {
  const dateOpening = new Date(opening.split('-').join(' '));
  const dateClosing = new Date(closing.split('-').join(' '));
  return (
    <div className="card mb-1 px-10 text-white h-20 w-full bg-slate-800 flex items-center justify-between gap-x-3 gap-y-1 flex-wrap">
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{category}</p>
      </div>
      <div>
        <p>{location}</p>
      </div>
      <div className="flex gap-3 items-center">
        {/* <p>Open till: </p> */}
        <div className="flex items-center gap-2">
          <div
            className={`h-2 w-2 ${
              dateOpening.getTime() < new Date().getTime() &&
              dateClosing.getTime() > new Date().getTime() - 86400000
                ? 'bg-green-500'
                : 'bg-red-500'
            }`}
          ></div>
          <p>
            {` Status:  
              ${
                dateOpening.getTime() < new Date().getTime() &&
                dateClosing.getTime() > new Date().getTime() - 86400000
                  ? 'Open'
                  : 'Closed'
              } `}
          </p>
        </div>
      </div>
      <div
        onClick={deleteShopHandler}
        className="w-10 h-10 grid place-content-center"
      >
        <MdDelete />
      </div>
    </div>
  );
};
export default ShopCard;

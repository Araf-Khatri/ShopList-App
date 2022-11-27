// import { useEffect, useState } from 'react';
import ShopCard from './component/shopcard';
import Filter from './component/_filter';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../store/filter-slice';
import { shopActions } from '../../store/shoplist-slice';
import { FIREBASE_URL } from '../../env';

const MainLayout = (props) => {
  const filtered = useSelector((state) => state.filterLists);

  const data2 = useSelector((state) => state.shopLists.array);

  const dispatch = useDispatch();

  const deleteShopHandler = async (id) => {
    const res = await fetch(
      `${FIREBASE_URL}/${id}.json`,
      {
        method: 'DELETE',
      }
    );
    dispatch(shopActions.addToState(id));
    dispatch(filterActions.deleteData({ id, bool: !filtered.bool }));
  };

  let mainData = data2.map((obj) => obj.name);
  mainData = mainData.filter((data, index) => mainData.indexOf(data) === index);
  return (
    <div className=" w-full">
      <Filter name={mainData} />
      {filtered.array.map(
        ({ id, name, category, location, openingDate, closingDate }, idx) => {
          return (
            <ShopCard
              key={idx}
              name={name}
              category={category}
              location={location}
              opening={openingDate}
              closing={closingDate}
              deleteShopHandler={async () => await deleteShopHandler(id)}
            />
          );
        }
      )}
    </div>
  );
};
export default MainLayout;

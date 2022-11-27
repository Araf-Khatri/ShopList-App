import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from './store/filter-slice';
import { shopActions } from './store/shoplist-slice';
import CreateShop from './UI/Main-component/create-shop';
import MainLayout from './UI/Main-component/mainLayout';
import { FIREBASE_URL } from './env';

const App = () => {
  // const state = useSelector(state => state.filterLists.bool);
  console.log(window.innerHeight);
  const shop = useSelector((state) => state.shopLists.bool);
  const dispatch = useDispatch();
  useEffect(() => {
    const arr = [];
    fetch(
      `${FIREBASE_URL}.json`
    )
      .then((data) => data.json())
      .then((data) => {
        for (const key in data) {
          arr.push({ id: key, ...data[key] });
        }
        dispatch(shopActions.addToState({ array: arr, bool: !shop }));
        dispatch(filterActions.addState({ array: arr, bool: !shop }));
      });
  }, [dispatch, shop]);

  return (
    <div className="flex flex-col gap-4 max-w-m-w-custom min-w-fit mx-auto">
      <CreateShop />
      <MainLayout />
    </div>
  );
};

export default App;

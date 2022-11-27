import React, { useRef, useState } from 'react';
import Button from '../Small-component/button';
import AddInput from '../Small-component/addinput';
import SelectOption from '../Small-component/select-option';
import DateOption from '../Small-component/dateoption';
import { useDispatch, useSelector } from 'react-redux';
import { shopActions } from '../../store/shoplist-slice';
import { filterActions } from '../../store/filter-slice';
import { FIREBASE_URL } from '../../env';

const CreateShop = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const openingDate = useRef();
  const closingDate = useRef();
  const SBool = useSelector((state) => state.shopLists.bool);

  const submitHandler = (e) => {
    e.preventDefault();

    const arr = Array(...e.target).map((ele) => ele.value);

    const [shopName, location, category, opening, closing] = arr;
    if (!shopName || !location || !category || !opening || !closing) return;

    const shopData = {
      name: shopName,
      location: location,
      category,
      openingDate: opening,
      closingDate: closing,
    };

    fetch(
      `${FIREBASE_URL}.json`,
      {
        method: 'POST',
        body: JSON.stringify(shopData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          shopActions.addShop({
            data: { id: data.name, ...shopData },
            bool: !SBool,
          })
        );
        dispatch(
          filterActions.addState({
            data: { id: data.name, ...shopData },
            bool: !SBool,
          })
        );
      });

    setTimeout(() => {
      setClicked(!clicked);
    }, 500);
    // dispatch(shopActions.refreshState());
  };

  return (
    <div className="flex flex-col h-full gap-1 mt-5">
      {!clicked ? (
        <Button
          text={'Add Shop'}
          extraStyle="bg-gray-800 p-2  text-gray-50  w-64"
          onclick={() => setClicked((prevState) => !prevState)}
        />
      ) : (
        <div className=" bg-slate-300 p-1">
          <form
            className="mx-10 my-10 mb-20  flex gap-24  flex-wrap"
            onSubmit={submitHandler}
          >
            <AddInput
              type="text"
              id="shopname"
              labelText="Shop Name:"
              placeHolder="Add shop Name"
            />

            <SelectOption
              arrayOfOption={[
                'Thane',
                'Pune',
                'Mumbai Suburban',
                'Nashik',
                'Nagpur',
                'Ahmednagar',
                'Solapur',
              ]}
              extraClass="w-40  ml-4"
              For={'location'}
              placeholder={'Choose Shop Location:'}
            />

            <SelectOption
              arrayOfOption={[
                'Grocery',
                'Butcher',
                'Baker',
                'Chemist',
                'Stationery shop',
              ]}
              For={'Category'}
              placeholder={'Choose Shop Category:'}
              extraClass={'w-44  ml-4'}
            />

            {/* <div>
              <label htmlFor={'open'}>Opening date</label>
              <input id={'open'} type={"date"} min={''} />
            </div> */}
            <DateOption
              ForO="Open"
              ForT="Closing"
              openingDate={openingDate}
              closingDate={closingDate}
            />

            <Button
              type={'submit'}
              text={'Add Shop'}
              extraStyle={'bg-gray-800 p-2  text-gray-50 mb-6  w-64'}
            />
          </form>
          <Button
            text={'Cancel'}
            extraStyle={'w-full bg-gray-500 p-2  text-gray-50 w-70'}
            onclick={() => {
              setClicked((prevState) => !prevState);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CreateShop;

import { IoIosFunnel } from "react-icons/io";
import filterSlice, { filterActions } from "../../../store/filter-slice";
import SelectOption from "../../Small-component/select-option";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Filter = ({ name }) => {
  const mainState = useSelector((state) => state.shopLists.array);
  const mainFilter = useSelector((state) => state.filterLists);
  const dispatch = useDispatch();
  // const filter = [].fill('', 0, 3);
  const filter = useSelector((state) => state.filterLists.filter);
  const filterHandler = (e) => {
    if (e.target.id === "name") {
      dispatch(filterActions.filtering({ idx: 0, toAdd: e.target.value }));
    }
    if (e.target.id === "category") {
      dispatch(filterActions.filtering({ idx: 1, toAdd: e.target.value }));

    }
    if (e.target.id === "location") {
      dispatch(filterActions.filtering({ idx: 2, toAdd: e.target.value }));

    }

  };

  useEffect(() => {
    dispatch(
      filterActions.addFilter({
        stateToCopy: [...mainState],
        toUpdate: filter,
        bool: !mainFilter.bool,
      })
    );
  }, [filter])

  return (
    <div className={"flex flex-col"}>
      <div className=" h-10 m-2 bg-slate-200 flex items-center">
        <div className="w-11/12 text-gray-500 flex place-content-around ">
          <div>
            <p>Shop name</p>
          </div>
          <div>
            <p>Category</p>
          </div>
          <div>
            <p>Location</p>
          </div>
        </div>
        <div className="h-8 w-8 flex items-center justify-center bg-slate-400 rounded-full">
          {<IoIosFunnel />}
        </div>
      </div>
      <div className=" mt-1 mb-5 mx-3 ">
        <div className="flex  justify-around border">
          <SelectOption
            For="name"
            extraClass="ml-5 appearance border-r-o"
            arrayOfOption={["", ...name]}
            onchange={filterHandler}
          />
          <SelectOption
            For="category"
            extraClass=" appearance border-r-o"
            arrayOfOption={[
              "",
              "Grocery",
              "Butcher",
              "Baker",
              "Chemist",
              "Stationery shop",
            ]}
            onchange={filterHandler}
          />
          <SelectOption
            For="location"
            extraClass=" appearance"
            arrayOfOption={[
              "",
              "Thane",
              "Pune",
              "Mumbai Suburban",
              "Nashik",
              "Nagpur",
              "Ahmednagar",
              "Solapur",
            ]}
            onchange={filterHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default Filter;

import { getDeliveryStatus } from "../api/Api";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { addNewTtn, removeTtn } from "../features/counter/counterSlice";

const Home = () => {
  const listTtn = useSelector((state: RootState) => state.ttn.value);
  const dispatch = useDispatch();

  const result: any = getDeliveryStatus("59500000458220");
  // const result: any = getWarehousesInCity("Київ");

  console.log(result);

  return (
    <div>
      <div>
        <input />
        <button
          aria-label="Increment value"
          onClick={() => dispatch(addNewTtn({ id: 1, ttn: 32324242422422 }))}
        >
          Increment
        </button>
        {listTtn
          ? listTtn.map((oneTtn) => {
              return <p>{oneTtn.ttn}</p>;
            })
          : null}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(removeTtn(1))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;

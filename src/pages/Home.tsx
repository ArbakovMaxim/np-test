import { getDeliveryStatus } from "../api/Api";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { addNewTtn, removeTtn } from "../features/ttn/ttnSlice";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState(Number);
  const listTtn = useSelector((state: RootState) => state.ttn.value);
  const dispatch = useDispatch();

  const result: any = getDeliveryStatus(59500000458220);
  console.log(result);

  const handleButtonClick = () => {
    alert(inputValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };

  const handleInputKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleButtonClick(); // Викликаємо дію, яка пов'язана з кнопкою
    }
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
          <button onClick={handleButtonClick}>Отримати значення</button>
        </div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(addNewTtn({ id: 1, ttn: 32324242422422 }))}
        >
          Increment
        </button>
        <ul>
          {listTtn
            ? listTtn.map((oneTtn) => {
                return (
                  <li key={oneTtn.id}>
                    <p>{oneTtn.ttn}</p>
                  </li>
                );
              })
            : null}
        </ul>
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

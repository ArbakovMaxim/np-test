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
          <button
            onClick={() => {
              handleButtonClick();
              dispatch(addNewTtn({ id: 1, ttn: 32324242422422 }));
            }}
          >
            Отримати значення
          </button>
        </div>
        <ul>
          {listTtn
            ? listTtn.map((oneTtn) => {
                return (
                  <li key={oneTtn.id}>
                    <div>
                      <p>{oneTtn.ttn}</p>
                      <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(removeTtn(1))}
                      >
                        delete
                      </button>
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Home;

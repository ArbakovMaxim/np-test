import { getInfo } from "../api/Api";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { addNewTtn, removeTtn } from "../features/ttn/ttnSlice";
import { useState } from "react";
import { nanoid } from "nanoid";

const Home = () => {
  const [inputValue, setInputValue] = useState(Number);
  const [resultInfo, setResulInfo] = useState([]);
  const listTtn = useSelector((state: RootState) => state.ttn.value);
  const dispatch = useDispatch();

  const handleButtonClick = async () => {
    const resultSender = await getInfo(inputValue);
    setResulInfo(resultSender.data);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };

  const handleInputKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  console.log(resultInfo);

  return (
    <div>
      <div>
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
          <button
            onClick={() => {
              handleButtonClick();
              dispatch(addNewTtn({ id: nanoid(), ttn: inputValue }));
            }}
          >
            Отримати значення
          </button>
        </div>
        <div>
          {resultInfo.length !== 0 ? <div></div> : <div></div>}

          <ul>
            {listTtn
              ? listTtn.map((oneTtn) => {
                  return (
                    <li key={oneTtn.id}>
                      <div>
                        <p>{oneTtn.ttn}</p>
                        <button
                          aria-label="Decrement value"
                          onClick={() => dispatch(removeTtn(oneTtn.id))}
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
    </div>
  );
};

export default Home;

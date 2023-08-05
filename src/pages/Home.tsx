import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../api/Api";
import { addNewTtn, removeTtn } from "../features/ttn/ttnSlice";
import type { RootState } from "../store/store";
import { StatusInfo } from "../components/statusInfo/StatusInfo";

interface DeliveryInfo {
  RecipientDateTime: string;
  ActualDeliveryDate: string;
  Status: string;
  WarehouseSender: string;
  CitySender: string;
  CityRecipient: string;
  WarehouseRecipient: string;
}

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultInfo, setResulInfo] = useState<DeliveryInfo[]>([]);
  const listTtn = useSelector((state: RootState) => state.ttn.value);
  const dispatch = useDispatch();

  //59500000458220
  //59000999927493
  //20450747562015
  //20450749076473

  //на почте
  //20450751556289

  //идет
  //20450751777995

  // проверка input
  const isValidInput = (inputValue: string): boolean => {
    const onlyNumbersRegex = /^[0-9]+$/;
    return (
      onlyNumbersRegex.test(inputValue) &&
      (inputValue.length === 11 || inputValue.length === 14)
    );
  };

  ///Обработка клика по списку ТТН
  const handleItemClick = (ttn: string) => {
    setInputValue(ttn);
    handleButtonClick();
  };

  //запрос по ТТН или Накладной
  const handleButtonClick = async () => {
    if (isValidInput(inputValue.toString())) {
      const resultSender = await getInfo(inputValue);
      setResulInfo(resultSender.data);
    } else {
      console.log("Ошибочка однако");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
            type="Number"
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
          {resultInfo.length !== 0 ? (
            <StatusInfo resultInfo={resultInfo} />
          ) : (
            <div></div>
          )}

          <ul>
            {listTtn
              ? listTtn.map((oneTtn) => {
                  return (
                    <li key={oneTtn.id}>
                      <div>
                        <p onClick={() => handleItemClick(oneTtn.ttn)}>
                          {oneTtn.ttn}
                        </p>
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

import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getInfo } from "../api/Api";
import { addNewTtn } from "../features/ttn/ttnSlice";
import { StatusInfo } from "../components/statusInfo/StatusInfo";
import { Search } from "@mui/icons-material";
import "./Home.css";
import ListIcon from "@mui/icons-material/List";

import {
  useMediaQuery,
  IconButton,
  Box,
  Container,
  TextField,
  Button,
  Menu,
} from "@mui/material";

import { ListTtn } from "../components/listTTN/ListTtn";
import { RootState } from "../store/store";

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
  const [menuTtn, setMenuTtn] = React.useState<null | HTMLElement>(null);
  const [error, setError] = useState(false);
  const [resultInfo, setResulInfo] = useState<DeliveryInfo[]>([]);
  const listTtn = useSelector((state: RootState) => state.ttn.value);
  const dispatch = useDispatch();

  const isMob = useMediaQuery("(max-width: 524px)");
  const isTableMax = useMediaQuery("(max-width: 899px)");

  //59500000458220
  //59000999927493
  //20450747562015
  //20450749076473
  //59000918754147
  //20450657036270
  //20450663947978
  //20450668981671
  //20450698211297
  //59000960855820
  //20450718201035

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
      dispatch(addNewTtn({ id: nanoid(), ttn: inputValue }));
    } else {
      toast.error("Невірно введений номер");
    }
  };

  //инпут + валидация
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (!/^\d*$/.test(newValue)) {
      setError(true);
    } else {
      setError(false);
      setInputValue(newValue);
    }
  };

  //функций меню с ттн
  const open = Boolean(menuTtn);
  const handleInMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuTtn(event.currentTarget);
  };
  const handleClose = () => {
    setMenuTtn(null);
  };

  return (
    <Box component="section" sx={{ pt: "24px", pb: "24px" }}>
      <Container fixed>
        <Box component="div" sx={{ display: "flex", position: "relative" }}>
          <Box component="div" className={isMob ? "homePage__wrapper" : ""}>
            <Box
              component="div"
              className="homePage__input--img"
              sx={
                isMob
                  ? {
                      width: "288px",
                      height: "200px",
                    }
                  : {
                      width: "500px",
                      height: "300px",
                    }
              }
            >
              <TextField
                id="standard-basic"
                label="Введіть номер"
                variant="standard"
                value={inputValue}
                onChange={handleInputChange}
                error={error}
                helperText={error ? "Введите только цифры" : ""}
                className="homePage__input"
                sx={
                  isMob
                    ? {
                        left: "40%",
                        width: "150px",
                      }
                    : {
                        left: "30%",
                      }
                }
                inputProps={{
                  pattern: "[0-9]*",
                }}
              />
              <IconButton
                sx={
                  isMob
                    ? {
                        position: "absolute",
                        top: "54%",
                        left: "63%",
                        transform: "translate(-50%, -50%)",
                      }
                    : {
                        position: "absolute",
                        top: "53%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }
                }
                onClick={() => {
                  handleButtonClick();
                }}
              >
                <Search />
              </IconButton>
            </Box>
            <div>
              {resultInfo.length !== 0 ? (
                <StatusInfo resultInfo={resultInfo} />
              ) : (
                <Box component="div" sx={{ minHeight: "360px" }} />
              )}
            </div>
          </Box>
          {isTableMax ? (
            <Box component="div" className="homePage__wrapper__listTtn">
              <Button
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                onClick={handleInMenuClick}
                variant="contained"
                startIcon={<ListIcon />}
                className="homePage__button--listTtn"
              ></Button>
              <Menu
                id="menu"
                anchorEl={menuTtn}
                open={Boolean(menuTtn)}
                onClose={handleClose}
              >
                {listTtn.length !== 0 ? (
                  <ListTtn
                    handleItemClick={handleItemClick}
                    handleClose={handleClose}
                  />
                ) : (
                  <Box component="div" className="homePage__mobList">
                    Ще не має посилок
                  </Box>
                )}
              </Menu>
            </Box>
          ) : (
            <ListTtn
              handleItemClick={handleItemClick}
              handleClose={handleClose}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

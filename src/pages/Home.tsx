import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getInfo } from "../api/Api";
import { addNewTtn, removeTtn } from "../features/ttn/ttnSlice";
import type { RootState } from "../store/store";
import { StatusInfo } from "../components/statusInfo/StatusInfo";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BoxImg from "../image/BoxImg.jpg";
import { Search } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import ListItemText from "@mui/material/ListItemText";
import { Grid } from "@mui/material";

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
  const [error, setError] = useState(false);
  const [resultInfo, setResulInfo] = useState<DeliveryInfo[]>([]);
  const listTtn = useSelector((state: RootState) => state.ttn.value);
  const dispatch = useDispatch();

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (!/^\d*$/.test(newValue)) {
      setError(true);
    } else {
      setError(false);
      setInputValue(newValue);
    }
  };

  return (
    <Box component="section" sx={{ pt: "24px", pb: "24px" }}>
      <Container fixed>
        <Box component="div" sx={{ display: "flex" }}>
          <div>
            <Box
              component="div"
              sx={{
                backgroundImage: `url(${BoxImg})`,
                width: "500px",
                height: "300px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            >
              <TextField
                id="standard-basic"
                label="Введіть номер"
                variant="standard"
                value={inputValue}
                onChange={handleInputChange}
                error={error}
                helperText={error ? "Введите только цифры" : ""}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "30%",
                  transform: "translate(-50%, -50%)",
                }}
                inputProps={{
                  pattern: "[0-9]*",
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: "53%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
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
              ) : null}
            </div>
          </div>
          <Box
            component="div"
            sx={{
              pl: "25px",
              pr: "25px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <List sx={{ margin: "-20px" }}>
              <Grid container spacing={2}>
                {listTtn
                  ? listTtn.map((oneTtn) => {
                      return (
                        <Grid item xs={6} key={oneTtn.id}>
                          <ListItem
                            sx={{
                              margin: "15px",
                              padding: "20px",
                              backgroundColor: "red",
                              width: "280px",
                            }}
                            key={oneTtn.id}
                          >
                            <ListItemAvatar>
                              <Avatar sx={{ mr: "25px" }}>
                                <FolderIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={oneTtn.ttn}
                              onClick={() => handleItemClick(oneTtn.ttn)}
                              sx={{ cursor: "pointer" }}
                            />
                            <IconButton
                              aria-label="delete"
                              onClick={() => dispatch(removeTtn(oneTtn.id))}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </ListItem>
                        </Grid>
                      );
                    })
                  : null}
              </Grid>
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

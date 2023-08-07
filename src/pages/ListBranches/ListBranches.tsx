import {
  Card,
  CardContent,
  IconButton,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./ListBranches.css";
import { getWarehousesInCity, getWarehousesInCityPage } from "../../api/Api";
import { Search } from "@mui/icons-material";
import { SetStateAction, useEffect, useState } from "react";
import { Container } from "@mui/system";
import { toast } from "react-toastify";

interface WorkingHours {
  [day: string]: string;
}
interface ResultCard {
  Description: string;
  SiteKey: string;
  Schedule: WorkingHours;
  Phone: string;
  PlaceMaxWeightAllowed: string;
}

const ListBranches = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageTotalItems, setPageTotalItems] = useState(200);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<ResultCard[]>([]);
  const [error, setError] = useState(false);

  const itemsPerPage = 20;

  const handlePaginationChange = async (
    event: any,
    page: SetStateAction<number>
  ) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (currentPage !== 0) {
      const fetchData = async () => {
        try {
          const resultSender = await getWarehousesInCityPage(
            inputValue,
            currentPage,
            itemsPerPage
          );
          setResult(resultSender.data);
        } catch (error) {
          toast.error("Помилка запиту");
        }
      };

      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  //запрос по ТТН или Накладной
  const handleButtonClick = async () => {
    const resultSender = await getWarehousesInCity(inputValue);
    setResult(resultSender.data.slice(0, 20));
    setPageTotalItems(resultSender.data.length);
  };

  //инпут + валидация
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setError(false);
    setInputValue(newValue);
  };

  console.log(result);

  return (
    <div>
      <Container fixed>
        <TextField
          id="standard-basic"
          label="Введіть номер"
          variant="standard"
          value={inputValue}
          onChange={handleInputChange}
          error={error}
          helperText={error ? "Введите только цифры" : ""}
        />
        <IconButton
          onClick={() => {
            handleButtonClick();
          }}
        >
          <Search />
        </IconButton>
        <div>
          <ul className="listInfoCity">
            {result.length !== 0
              ? result.map((resultCard) => {
                  return (
                    <li className="itemInfoCity" key={resultCard.SiteKey}>
                      <Card sx={{ minWidth: 275, minHeight: "320px" }}>
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            {resultCard.Description}
                          </Typography>
                          <Typography variant="h5" component="div">
                            Час роботи :<br />
                            <span className="span__Time--Work">
                              Пн: {resultCard.Schedule.Monday}
                            </span>{" "}
                            <span className="span__Time--Work">
                              Вт: {resultCard.Schedule.Thursday}
                            </span>
                            <br />
                            <span className="span__Time--Work">
                              Ср: {resultCard.Schedule.Wednesday}
                            </span>{" "}
                            <span className="span__Time--Work">
                              Чт: {resultCard.Schedule.Thursday}
                            </span>
                            <br />
                            <span className="span__Time--Work">
                              Пт: {resultCard.Schedule.Friday}
                            </span>
                            <br />
                            <span className="span__Time--Work">
                              Сб: {resultCard.Schedule.Sunday}
                            </span>{" "}
                            <span className="span__Time--Work">
                              Нд: {resultCard.Schedule.Saturday}
                            </span>
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Телефон : {resultCard.Phone}
                          </Typography>
                          <Typography variant="body2">
                            Вага: {resultCard.PlaceMaxWeightAllowed} кг.
                          </Typography>
                        </CardContent>
                      </Card>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(pageTotalItems / itemsPerPage)}
            onChange={handlePaginationChange}
            page={currentPage}
          />
        </Stack>
      </Container>
    </div>
  );
};

export default ListBranches;

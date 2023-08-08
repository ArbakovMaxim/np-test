import {
  Box,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Pagination,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
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
  CityDescription: string;
  Description: string;
  SiteKey: string;
  Schedule: WorkingHours;
  Phone: string;
  PlaceMaxWeightAllowed: string;
}

const ListBranches = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTotalItems, setPageTotalItems] = useState(200);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<ResultCard[]>([]);
  const [error, setError] = useState(false);

  const isMob = useMediaQuery("(max-width: 524px)");

  const itemsPerPage = isMob ? 9 : 21;

  const handlePaginationChange = (event: any, page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  //запрос по городу и по страничный
  useEffect(() => {
    if (inputValue !== "") {
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

  //запрос по городу
  const handleButtonClick = async () => {
    const resultSender = await getWarehousesInCity(inputValue);
    if (resultSender.data.length > 0) {
      setResult(resultSender.data.slice(0, isMob ? 9 : 21));
      setPageTotalItems(resultSender.data.length);
      toast.success(`Знайденно ${resultSender.data.length} відділень`);
    } else {
      toast.error("Немає такого міста");
    }
  };

  //инпут + валидация
  const validInput = /^[а-яА-ЯІіЇїЄєҐґ]+$/;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.trim();
    if (!validInput.test(newValue)) {
      setError(true);
    } else {
      setError(false);
      setInputValue(newValue);
    }
    setInputValue(newValue);
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "red",
        height: "100%",
      }}
    >
      <Container
        fixed
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box component="div" sx={{ minHeight: "105px" }}>
          <TextField
            id="standard-basic"
            label="Введіть місто"
            variant="standard"
            value={inputValue}
            onChange={handleInputChange}
            error={error}
            helperText={error ? "Тільки літери" : ""}
            sx={{ width: "280px", margin: "15px 0" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      handleButtonClick();
                    }}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <div>
          <ul className="listInfoCity">
            {result.length !== 0 ? (
              result.map((resultCard) => {
                return (
                  <li className="itemInfoCity" key={resultCard.SiteKey}>
                    <Card
                      sx={{
                        minWidth: 275,
                        minHeight: "360px",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {resultCard.CityDescription}
                        </Typography>
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
            ) : (
              <>
                {Array.from({ length: 9 }).map((_, index) => (
                  <li className="itemInfoCity" key={`empty-${index}`}>
                    <Card
                      sx={{
                        minWidth: 275,
                        minHeight: "320px",
                      }}
                    >
                      <CardContent></CardContent>
                    </Card>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        <Stack spacing={2} sx={{ padding: "25px 0" }}>
          <Pagination
            count={Math.ceil(pageTotalItems / itemsPerPage)}
            onChange={handlePaginationChange}
            page={currentPage}
            size={isMob ? "small" : "medium"}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default ListBranches;

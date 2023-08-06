import { CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface Props {
  resultInfo: {
    Status: string;
    CitySender: string;
    WarehouseSender: string;
    ActualDeliveryDate: string;
    CityRecipient: string;
    WarehouseRecipient: string;
    RecipientDateTime: string;
  }[];
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const StatusInfo = ({ resultInfo }: Props) => {
  return (
    <Box component="div" sx={{ maxWidth: "500px", mt: "25px" }}>
      <Typography sx={{ fontSize: 18 }} variant="subtitle1">
        Статус: <span style={{ color: "green" }}>{resultInfo[0].Status}</span>
      </Typography>
      <CardContent sx={{ backgroundColor: "red", mt: "25px" }}>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Місто відправник:
          {bull}
          {resultInfo[0].CitySender}
          {bull}
        </Typography>
        <Typography variant="body2">
          Адреса відділення: {resultInfo[0].WarehouseSender}
        </Typography>
        {resultInfo[0].RecipientDateTime !== "" ? (
          <Typography variant="body2">
            Час відправлення: {resultInfo[0].ActualDeliveryDate}
          </Typography>
        ) : null}
      </CardContent>

      <CardContent sx={{ backgroundColor: "red", mt: "25px" }}>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Місто отримання: {bull}
          {resultInfo[0].CityRecipient}
          {bull}
        </Typography>
        <Typography variant="body2">
          Адреса відділення: {resultInfo[0].WarehouseRecipient}
        </Typography>
        {resultInfo[0].RecipientDateTime !== "" ? (
          <Typography variant="body2">
            <p>Час отримання: {resultInfo[0].RecipientDateTime}</p>
          </Typography>
        ) : null}
      </CardContent>
      {/* <Box component="div" sx={{ mt: "25px" }}>
        <Typography variant="h5">
          Статус: <span>{resultInfo[0].Status}</span>
        </Typography>
      </Box>
      <Box component="div" sx={{ padding: "20px", backgroundColor: "" }}>
        <div>
          <Typography variant="body1" color="primary">
            Місто відправник: <span>{resultInfo[0].CitySender}</span>
          </Typography>
          <Typography variant="body1" color="primary">
            Адреса відділення: <span>{resultInfo[0].WarehouseSender}</span>
          </Typography>
        </div>
        {resultInfo[0].ActualDeliveryDate !== "" ? (
          <div>
            <p>Час відправлення: {resultInfo[0].ActualDeliveryDate} </p>
          </div>
        ) : null}
      </Box>
      <Box component="div" sx={{ padding: "20px" }}>
        <div>
          <Typography variant="body1" color="primary">
            Місто отримання: <span>{resultInfo[0].CityRecipient}</span>
          </Typography>
          <Typography variant="body1" color="primary">
            Адреса відділення: <span>{resultInfo[0].WarehouseRecipient}</span>
          </Typography>
        </div>
        {resultInfo[0].RecipientDateTime !== "" ? (
          <div>
            <p>Час отримання: {resultInfo[0].RecipientDateTime}</p>
          </div>
        ) : null}
      </Box> */}
    </Box>
  );
};

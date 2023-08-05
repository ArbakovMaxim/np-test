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

export const StatusInfo = ({ resultInfo }: Props) => {
  return (
    <div>
      <div>
        <p>Статус</p>
        <div>{resultInfo[0].Status}</div>
      </div>
      <div>
        <div>
          <p>Место отправки</p>
          <p>{resultInfo[0].CitySender}</p>
          <p>{resultInfo[0].WarehouseSender}</p>
        </div>
        {resultInfo[0].ActualDeliveryDate !== "" ? (
          <div>
            <p>Время отправления</p>
            <p>{resultInfo[0].ActualDeliveryDate}</p>
          </div>
        ) : null}
      </div>
      <div>
        <div>
          <p>Место получения</p>
          <p>{resultInfo[0].CityRecipient}</p>
          <p>{resultInfo[0].WarehouseRecipient}</p>
        </div>
        {resultInfo[0].RecipientDateTime !== "" ? (
          <div>
            <p>Время получения</p>
            <div>{resultInfo[0].RecipientDateTime}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

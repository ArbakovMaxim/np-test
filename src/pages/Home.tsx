import { getSenderInfo, getRecipientInfo } from "../api/Api";

const Home = () => {
  const result: any = getDeliveryStatus("59500000458220");
  // const result: any = getWarehousesInCity("Київ");

  console.log(result);

  return <div></div>;
};

export default Home;

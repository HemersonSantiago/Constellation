import { useQuery } from "@tanstack/react-query";
import { useService } from "../services/useService";
import { ICar } from "../interfaces/ICar";
import { getRandomImage } from "../utils/randomImages";

const useGetList = () => {
  const { getList } = useService();

  const data = useQuery<ICar[]>({
    queryKey: ["/List"],
    queryFn: () => getList(),
    refetchOnWindowFocus: false,
  });

  const newData = data?.data?.map((item) => ({
    ...item,
    imageCar: getRandomImage(),
    formatted: {
      startingBid: Intl.NumberFormat("en-DE", {
        style: "currency",
        currency: "EUR",
      }).format(item.startingBid),
      auctionDateTime: new Date(item.auctionDateTime).toLocaleString(),
    },
  }));

  return {
    ...data,
    data: newData,
  };
};

export default useGetList;

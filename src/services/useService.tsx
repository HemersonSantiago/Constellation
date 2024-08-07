import { useCallback } from "react";
import axios from "axios";

export const useService = () => {
  const getList = useCallback(async () => {
    const url = `http://localhost:3000/list`;

    const response = await axios.get(url);

    return response.data;
  }, []);

  return {
    getList,
  };
};

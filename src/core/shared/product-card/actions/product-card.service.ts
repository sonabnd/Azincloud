import axiosInstance from "../../../configs/axios.config";
import { API } from "../../../configs/api.config";

export const getProductsByType = (type) => {
  const endpoint = type === "upcoming" ? API.upcomingPr : API.availablePr;
  return axiosInstance.get(endpoint).then(res => {
    return res.data; 
  });
};







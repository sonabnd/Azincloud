import { useQuery } from "react-query";
import { getProductsByType } from "./product-card.service"; 

export const useProductsByType = (type) => {
  return useQuery([type], () => getProductsByType(type), {
  });
};













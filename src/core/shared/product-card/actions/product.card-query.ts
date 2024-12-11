import { useQuery } from "react-query"
import { getAvailablePrServices } from "./product-card.service";

export const useAvailablePr = ()=>{
    return useQuery<[], Error>('availablePr', getAvailablePrServices)};
import { API } from "../../../../../core/configs/api.config";
import axiosInstance from "../../../../../core/configs/axios.config";
import TableModel from "../models/table.model";

export const getNumberService = () => {
    
    return axiosInstance.get(API.numbers).then(res => {
        return res.data.map((item: any) => new TableModel(item));
    });
};
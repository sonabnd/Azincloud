import { API } from "../../../configs/api.config"
import axiosInstance from "../../../configs/axios.config"
import TableModel from "../models/table-model"

export const getAvailablePrServices = () => {
    return axiosInstance.get(API.availablePr).then(res => {
        return res.data.map((item: any) => new TableModel(item));
    });
};
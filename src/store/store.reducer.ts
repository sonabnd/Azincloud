import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./store";
import { en } from "../assets/lang/en";

const initialState: IState = {
    loader: false,
    languages: [
        {
            id: 1,
            key: 'az',
            value: 'AZ'
        }, {
            id: 2,
            key: 'en',
            value: 'EN'
        },
        {
            id: 3,
            key: 'ru',
            value: 'RU'
        }
    ],
    locale: en,
};


export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setLoader: (state: IState, action: PayloadAction<boolean>) => {
            state.loader = action.payload;
        },
        // setLocale: (state: IState, action: PayloadAction<ILang>) => {
        //     const lang = {
        //         az,
        //         en,
        //         ru
        //     };
        //     state.locale = lang[action.payload];
        //     localStorage.setItem(`${environment.applicationName}-locale`, action.payload);
        // },
    },
})

export const {setLoader,} = rootSlice.actions;

export default rootSlice.reducer;
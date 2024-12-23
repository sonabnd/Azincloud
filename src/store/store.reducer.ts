import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IState} from './store';
import {az} from '../assets/lang/az';
import {en} from '../assets/lang/en';
import {ru} from '../assets/lang/ru';
import {ILang} from '../assets/lang/lang';
import { enviroment } from '../core/configs/app.config';

const initialState: IState = {
    loader: false,
    languages: [
        {
            id: 1,
            key: 'az',
            value: 'Az'
        }, {
            id: 2,
            key: 'en',
            value: 'En'
        },
        {
            id: 3,
            key: 'ru',
            value: 'Ru'
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
        setLocale: (state: IState, action: PayloadAction<ILang>) => {
            const lang = {
                az,
                en,
                ru
            };
            state.locale = lang[action.payload];
            localStorage.setItem(`${enviroment.applicationName}-locale`, action.payload);
        },
    },
});

export const {setLoader, setLocale} = rootSlice.actions;

export default rootSlice.reducer;
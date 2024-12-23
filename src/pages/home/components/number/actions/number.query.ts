import {useQuery} from 'react-query';
import { getNumberService } from './number.service';


export const useNumber = ()=>{
    return useQuery<any[], Error>('numbers', () => {
        return getNumberService();
    });
};
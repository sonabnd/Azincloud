import {useQuery} from 'react-query';
import { getNewsService } from './news-card.service';

export const useNews = ()=>{
    return useQuery<any[], Error>('news', () => {
        return getNewsService();
    });
};

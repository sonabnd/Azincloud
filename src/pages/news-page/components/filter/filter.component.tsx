import css from './filter.module.scss'
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { en } from '../../../../assets/lang/en';
import { useNews } from '../../../../core/shared/news-card/actions/news-card.query';
import { useCallback, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

const FilterComponent = () => {
    const {data} = useNews();

    const [start,setStart] = useState<Dayjs | null>(null);
    const [end,setEnd] = useState<Dayjs | null>(null);
    
    const handleSearch = useCallback(() => {
        if (start && end) { 
            const filteredData = data?.filter((item) => {
               return new Date(item.date); 
            });
            
            console.log('Start:', start, 'End:', end);
            console.log(filteredData);
        } else {
            console.log("Please select a valid date range");
        }
    }, [data, start, end]);


    return (
        <div className={css.filterContainer}>
            <div className={css.dateContainer}>
                <Space direction="vertical">
                    <DatePicker
                        placeholder={en.from_date_text}
                        format={{
                            format: 'DD-MM-YYYY',
                            type: 'mask',
                        }}
                        onChange={(date) => setStart(date)}
                        className={css.fromToDate}
                    />
                </Space>
                <Space direction="vertical">
                    <DatePicker
                        placeholder={en.to_date_text}
                        format={{
                            format: 'DD-MM-YYYY',
                            type: 'mask',
                        }}
                        onChange={(date) => setEnd(date)}
                        className={css.fromToDate}
                    />
                </Space>
            </div>
            <div className={css.btn}>
                <button className={css.reset}>{en.filter_reset_text}</button>
                <button className={css.search} onClick={handleSearch}>{en.filter_search_text}</button>
            </div>
        </div>
    )
}

export default FilterComponent
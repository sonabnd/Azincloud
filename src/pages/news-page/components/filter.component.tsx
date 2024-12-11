import css from './filter.module.scss'
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { en } from '../../../assets/lang/en';

const onChange: DatePickerProps['onChange'] = (fromDate, toDate) => {
    console.log(fromDate, toDate);
};

const FilterComponent = () => {
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
                        onChange={onChange}
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
                        onChange={onChange}
                        className={css.fromToDate}
                    />
                </Space>
            </div>
            <div className={css.btn}>
                <button className={css.reset}>{en.filter_reset_text}</button>
                <button className={css.search}>{en.filter_search_text}</button>
            </div>
        </div>
    )
}

export default FilterComponent
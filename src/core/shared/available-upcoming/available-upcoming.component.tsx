import css from './available-upcoming.module.scss';
import ProductsIcon from '/src/assets/images/statics/products-icon.png';
import UpcomingIcon from '/src/assets/images/statics/upcoming-icon.png';
import { en } from '../../../assets/lang/en';
import { generateGuid } from '../../helpers/generate-guid';

const AvailableUpcoming = () => {
    const productTitle = [
        {
            title: en.products_title,
            img: ProductsIcon,
        },
        {
            title: en.upcoming_title,
            img: UpcomingIcon,
        }
    ];

    return (
        <div className={css.availableUpcoming}>
            {productTitle.map((item, index) => (
                <div
                    className={index === 1 ? css.upcoming : css.available}
                    key={generateGuid()}
                >
                    <img src={item.img} alt="" />
                    {item.title}
                </div>
            ))}
        </div>
    );
};

export default AvailableUpcoming;

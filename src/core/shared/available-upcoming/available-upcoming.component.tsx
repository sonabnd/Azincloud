import { generateGuid } from '../../helpers/generate-guid';
import useLocalization from '../../../assets/lang';
import css from './available-upcoming.module.scss';
import ProductsIcon from '/src/assets/images/statics/products-icon.png';
import UpcomingIcon from '/src/assets/images/statics/upcoming-icon.png';
import { useState } from 'react';

const AvailableUpcoming = ({ onTypeChange }) => {
  const translate = useLocalization();
  const [selected, setSelected] = useState('available');

  const productTitle = [
    {
      title: translate('products_title'),
      img: ProductsIcon,
      type: 'available',
    },
    {
      title: translate('upcoming_title'),
      img: UpcomingIcon,
      type: 'upcoming',
    },
  ];

  const handleClick = (type) => {
    setSelected(type); 
    onTypeChange(type); 
  };

  return (
    <div className={css.availableUpcoming}>
      {productTitle.map((item, index) => (
        <div
          key={generateGuid()}
          className={`${index === 1 ? css.upcoming : css.available} ${selected === item.type ? css.selected : ''}`}
          onClick={() => handleClick(item.type)}
        >
          <img src={item.img} alt="" />
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default AvailableUpcoming;













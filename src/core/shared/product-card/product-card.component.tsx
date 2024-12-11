
import { en } from '../../../assets/lang/en';
import css from './product-card.module.scss';

const ProductCardComponent = ({ card }: any) => {
  return (
    <div className={css.box}>
      <div className={css.circle}>
        <img src={card.img} alt={en.img_alt} />
      </div>
      <p>{card.heading}</p>
      <span>{card.text}</span>
      <div className={css.price}>{card.price}</div>
    </div>
  );
}

export default ProductCardComponent;


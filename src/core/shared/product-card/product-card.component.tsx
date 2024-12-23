import css from './product-card.module.scss';

const ProductCardComponent = ({ card }: any) => {
  return (
    <div className={css.box}>
      <img src={card.img} alt={card.heading} />
      <p>{card.heading}</p>
      <span>{card.text}</span>
      <div className={css.price}>{card.price}</div>
    </div>
  );
};

export default ProductCardComponent;

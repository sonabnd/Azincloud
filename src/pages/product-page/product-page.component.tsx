import { en } from '../../assets/lang/en'
import AvailableUpcoming from '../../core/shared/available-upcoming/available-upcoming.component'
import { useAvailablePr } from '../../core/shared/product-card/actions/product.card-query'
import ProductCardComponent from '../../core/shared/product-card/product-card.component'
import css from './product-page.module.scss'

const ProductPageComponent = () => {
  const {data} = useAvailablePr();
  return (
    <div className={`${css.products} container`}>
        <div className={css.header}>
            <h2 className={css.heading}>{en.products_services_title}</h2>
            <AvailableUpcoming/>
        </div>
        <div className={css.productContainer}>
          {
            data?.map(card => (
              <div className={css.card}>
                <ProductCardComponent card={card} key={card.id}/>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default ProductPageComponent
import { useState, useCallback } from "react";
import { useProductsByType } from "../../core/shared/product-card/actions/product.card-query";
import ProductCardComponent from "../../core/shared/product-card/product-card.component";
import AvailableUpcoming from "../../core/shared/available-upcoming/available-upcoming.component";
import css from "./product-page.module.scss";
import useLocalization from "../../assets/lang";

const ProductPageComponent = () => {
  const [type, setType] = useState("available"); 
  const { data } = useProductsByType(type); 
  const translate = useLocalization();
  
  const handleTypeChange = useCallback((newType:any)=> {
    setType(newType);
  },[type])

  return (
    <div className='container'>
      <div className={css.products}>
        <div className={css.header}>
          <div className='row'>
            <div className='col-md-6'>
                <h2 className={css.heading}>{translate('products_services_title')}</h2>
            </div>
            <div className='col-md-6'>
              <AvailableUpcoming onTypeChange={handleTypeChange} />
            </div>
          </div>
        </div>
        <div className={css.productContainer}>
          <div className='row'>
            {data?.map((card:any) => (
              <div className='col-md-4'>
                <div className={css.card} key={card.id}>
                  <ProductCardComponent card={card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageComponent;







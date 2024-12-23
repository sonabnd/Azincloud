import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useProductsByType } from "../../../../core/shared/product-card/actions/product.card-query";
import ProductCardComponent from "../../../../core/shared/product-card/product-card.component";
import AvailableUpcoming from "../../../../core/shared/available-upcoming/available-upcoming.component";
import css from "./products.module.scss";
import { FaArrowRight } from 'react-icons/fa';
import { Routes } from "../../../../router/routes";
import { useNavigate } from "react-router-dom";
import useLocalization from "../../../../assets/lang";

function ProductsComponent() {
  const [type, setType] = useState("available");
  const { data } = useProductsByType(type);
  const navigate = useNavigate();
  const translate = useLocalization();

  const moreFunc = useCallback(() => {
    navigate(Routes.products);
  }, [navigate]);

  const handleTypeChange = useCallback((newType:any) => {
    setType(newType);
  }, []);

  return (
    <div className={css.productsUpcoming}>
      <AvailableUpcoming onTypeChange={handleTypeChange} />
      <div className="container">
        <div className={css.products}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              1024: { slidesPerView: 3, spaceBetween: 25 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              576: { slidesPerView: 1.3, spaceBetween: 20 },
              0: { slidesPerView: 1, spaceBetween: 14},
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className={css.mySwiper}
          >
            {data?.map((card:any) => (
              <SwiperSlide key={card.id} className={css.slider}>
                <div className={css.slideCard}>
                  <ProductCardComponent card={card} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={css.more} onClick={moreFunc}>
          <p>{translate('more_text')}</p>
          <i>
            <FaArrowRight />
          </i>
        </div>
    </div>
  );
}

export default ProductsComponent;











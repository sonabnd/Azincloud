import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useAvailablePr } from "../../../../core/shared/product-card/actions/product.card-query";
import ProductCardComponent from "../../../../core/shared/product-card/product-card.component";
import AvailableUpcoming from "../../../../core/shared/available-upcoming/available-upcoming.component";
import css from "./products.module.scss";
import { en } from "../../../../assets/lang/en";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Routes } from "../../../../router/routes";

function ProductComponent() {
  const { data } = useAvailablePr();
  const navigate = useNavigate();
  const moreFunc = useCallback(()=> {
    navigate(Routes.products)
  }, [])
  return (
    <div className="container">
      <div className={css.productsUpcoming}>
        <AvailableUpcoming />
        <div className={css.products}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {data?.map((card) => (
              <SwiperSlide key={card.id} className={css.slider}>
                <ProductCardComponent card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={css.more} onClick={moreFunc}>
          <p>{en.more_text}</p>
          <i>
            <FaArrowRight />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;

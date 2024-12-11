import ArrowRight from '../../../../assets/images/statics/partners-right.png';
import ArrowLeft from '../../../../assets/images/statics/partners-left.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { en } from "../../../../assets/lang/en";
import { Routes } from "../../../../router/routes";
import css from "./news.module.scss";
import { Link } from "react-router-dom";
import NewsCardComponent from "../../../../core/shared/news-card/news-card.component";
import { useNews } from "../../../../core/shared/news-card/actions/news-card.query";
import { Navigation } from "swiper/modules";
import { useCallback, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

function NewsComponent() {
  const { data } = useNews();
  const swiperRef = useRef(null);

  const handleNextClick = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }, [])

  const handlePrevClick = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    };
  }, [])

  return (
    <div className={css.news}>
      <div className="container">
        <div className={css.headerContainer}>
          <h2 className={css.heading}>{en.news_blog_title}</h2>
          <div className={css.headerRight}>
            <img
              src={ArrowLeft}
              alt={en.img_alt}
              onClick={handlePrevClick}
              className={css.customArrow}
            />
            <img
              className={`${css.rightArrow} ${css.customArrow}`}
              src={ArrowRight}
              alt={en.img_alt}
              onClick={handleNextClick}
            />
            <Link className={css.webMore} to={Routes.news}>
              {en.more_text}
            </Link>
          </div>
        </div>
        <div className={css.sliderContainer}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper"
            ref={swiperRef}
          >
            {data?.map((news) => (
              <SwiperSlide key={news.id} className={css.slider}>
                <NewsCardComponent news={news} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;

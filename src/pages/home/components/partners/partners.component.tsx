import { en } from '../../../../assets/lang/en'
import css from './partners.module.scss'
import ArrowRight from '../../../../assets/images/statics/partners-right.png';
import ArrowLeft from '../../../../assets/images/statics/partners-left.png';
import PartnersImg from '../../../../assets/images/statics/partner-right-img.png';
import { usePartners } from './actions/partners.query';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../../../core/helpers/get-token';
import useLocalization from '../../../../assets/lang';

const PartnersComponent = () => {
  const { data } = usePartners();
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const translate = useLocalization();

  const [groupedPartners, setGroupedPartners] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const groupPartners = useCallback(() => {
    const grouped = [];
    if (data) {
      for (let i = 0; i < data.length; i += 2) {
        grouped.push({
          images: [
            data[i]?.img,
            data[i + 1]?.img,
          ],
          partners: [data[i], data[i + 1]].filter(Boolean),
        });
      }
    }
    setGroupedPartners(grouped);
  }, [data]);

  useEffect(() => {
    groupPartners();
  }, [data, groupPartners]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (swiperRef.current) {
        swiperRef.current.swiper.update(); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const partnerFunc = useCallback((partner: any) => {
    setToken(partner);
    navigate(`/partners/${partner.id}`);
  }, [navigate]);

  const handleNextClick = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }, []);

  const handlePrevClick = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }, []);

  return (
    <div className='container'>
      <div className={css.partners}>
        <div className={css.partnersLeft}>
          <h2 className={css.title}>{translate('our_tech_partners_title')}</h2>
          <div className={css.mobileImg}>
            <img src={PartnersImg} alt={en.img_alt} />
          </div>
          <div className={css.cardContainer}>
            <Swiper
              direction={windowWidth <= 768 ? 'horizontal' : 'vertical'}
              slidesPerView={2}
              spaceBetween={30}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                575: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 5,
                },
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Navigation]}
              className={css.mySwiper}
              ref={swiperRef}
            >
              {groupedPartners.map((group, index) => (
                <SwiperSlide key={index} className={css.slider}>
                  <div className={css.cardBox}>
                    {group.images.map(
                      (img, index) =>
                        img && (
                          <div
                            className={css.card}
                            key={index}
                            onClick={() =>
                              group.partners[index] && partnerFunc(group.partners[index])
                            }
                          >
                            <img src={img} alt={`Partner ${index}-${index}`} />
                          </div>
                        )
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={css.details}>
            <img src={ArrowLeft} alt="" onClick={handlePrevClick} />
            <img className={css.right} src={ArrowRight} alt="" onClick={handleNextClick} />
            <span>{translate('details_text')}</span>
          </div>
        </div>
        <div className={css.partnersRight}>
          <img src={PartnersImg} alt={en.img_alt} />
        </div>
      </div>
    </div>
  );
};

export default PartnersComponent;

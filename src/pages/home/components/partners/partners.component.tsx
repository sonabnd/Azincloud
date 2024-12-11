import { en } from '../../../../assets/lang/en'
import css from './partners.module.scss'
import ArrowRight from '../../../../assets/images/statics/partners-right.png';
import ArrowLeft from '../../../../assets/images/statics/partners-left.png';
import PartnersImg from '../../../../assets/images/statics/partner-right-img.png';
import logo from '/src/assets/images/statics/partner-img.png'
import { usePartners } from './actions/partners.query';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../../../core/helpers/get-token';

const PartnersComponent = () => {
  const { data } = usePartners();
  const navigate = useNavigate();

  const partnerFunc = useCallback((partner: any) => {
    setToken(partner)
    navigate(`/partners/${partner.id}`); 
  }, [navigate]);

  return (
    <div className={css.partners}>
      <div className={css.partnersLeft}>
        <h2 className={css.title}>{en.our_tech_partners_title}</h2>
        <div className={css.cardContainer}>
              <Swiper
              direction={'vertical'}
                slidesPerView={1}
                spaceBetween={10}
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
                {data?.map((partner) => (
                  <SwiperSlide key={partner.id} className={css.slider} onClick={()=>partnerFunc(partner)}>
                    <div className={css.card} key={partner.id}>
                      <img src={logo} alt={en.img_alt} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
        </div>
        <div className={css.details}>
          <img src={ArrowLeft} alt="" />
          <img className={css.right} src={ArrowRight} alt="" />
          <span>{en.details_text}</span>
        </div>
      </div>
      <div className={css.partnersRight}>
        <img src={PartnersImg} alt={en.img_alt} />
      </div>
    </div>
  )
}

export default PartnersComponent;
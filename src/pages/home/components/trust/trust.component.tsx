import css from './trust.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import TrustFirst from '/src/assets/images/icons/trust-first.png';
import TrustSecond from '/src/assets/images/icons/trust-second.png';
import TrustThird from '/src/assets/images/icons/trust-third.png';
import TrustFourth from '/src/assets/images/icons/trust-fourth.png';
import { generateGuid } from '../../../../core/helpers/generate-guid';
import useLocalization from '../../../../assets/lang';

const TrustComponent = () => {
  const translate = useLocalization();

  const trustData = [
    {
      icon: TrustFirst,
      title: translate('trust_title_1'),
      text: translate('trust_text_1'),
    },
    {
      icon: TrustSecond,
      title: translate('trust_title_2'),
      text: translate('trust_text_2'),
    },
    {
      icon: TrustThird,
      title: translate('trust_title_3'),
      text: translate('trust_text_1'),
    },
    {
      icon: TrustFourth,
      title: translate('trust_title_4'),
      text: translate('trust_text_2'),
    },
  ]
  return (
    <div className={css.trust}>
      <div className={`${css.trustContainer} container`}>
        <h2 className={css.title}>{translate('trust_us_title')}</h2>
        <p className={css.text}>{translate('trust_us_text')}</p>
        <div className={css.cardContainer}>
          <Swiper
          style={{padding:'0 0 15px 0'}}
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            breakpoints={{
              992: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3.3,
              },
              575: {
                slidesPerView: 2.3,
              },
              0: {
                slidesPerView: 1.3,
              },
            }}
          >
            {
              trustData.map((card, index) => (
                <SwiperSlide className={`${css.card} ${css[`card-${index + 1}`]}`} key={generateGuid()}>
                  <div>
                    <div className={css.title}>
                      <img src={card.icon} alt={translate('img_alt')} />
                      <h3>{card.title}</h3>
                    </div>
                    <p className={css.paragraph}>{card.text}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TrustComponent
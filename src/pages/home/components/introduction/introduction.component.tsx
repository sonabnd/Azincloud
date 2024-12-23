import css from './introduction.module.scss';
import cloud from '../../../../assets/images/statics/intro-right.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef, useState, useEffect } from 'react';
import useLocalization from '../../../../assets/lang';
import ProductComponent from '../products/products.component';
import backgroundImg from '/src/assets/images/statics/intro-background.png';

const IntroductionComponent = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); 
  const translate = useLocalization();

  const pagination = {
    el: '.sliderContainer',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const introData = [
    {
      id: 847,
      text: translate('intro_text1'),
    },
    {
      id: 83747,
      text: translate('intro_text2'),
    },
    {
      id: 8122147,
      text: translate('intro_text3'),
    },
  ];

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <div className={css.introduction}>
      <div className={css.backgroundImg}>
        <img src={backgroundImg} alt="" />
      </div>
      <div className="container">
        <div className={css.introMain}>
          <div className="row">
            <div className="col-md-6">
              <div className={css.introContent}>
                <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  className="mySwiper"
                  style={{ width: '100%' }}
                >
                  {introData.map((content, index) => (
                    <SwiperSlide key={content.id} className={css.textSlider}>
                      <h2 className={css.heading}>{content.text}</h2>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className={css.imgMobile}>
                  <img src={cloud} alt="" />
                </div>
                <div className={css.sliderContainer}>
                  {introData.map((item, index) => (
                    <div
                      key={index}
                      className={`${css.slider} ${activeIndex === index ? css.activeSlider : ''}`}
                      onClick={() => handlePaginationClick(index)}
                    >
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={css.introImg}>
                <img src={cloud} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={css.introProduct}>
          <ProductComponent />
        </div>
      </div>
    </div>
  );
};

export default IntroductionComponent;



import css from './introduction.module.scss';
import introTop from '../../../../assets/images/statics/intro-bg.png';
import introBottom from '../../../../assets/images/statics/intro-bg-bottom.png';
import introRight from '../../../../assets/images/statics/intro-right.png'
import { en } from '../../../../assets/lang/en';
const IntroductionComponent = () => {
  return (
    <div className={css.introduction}>
    <div className={css.intro}>
      <div className={css.introTop}>
        <img src={introTop} alt={en.img_alt} />
      </div>
      <div className={css.introBottom}>
        <img src={introBottom} alt={en.img_alt}/>
      </div>
    </div>
    <div className='container'>
      <div className={ `${css.introMain} container`}>
        <div className={css.introLeft}>
          <h2>{en.intro_text}</h2>
          <div className={css.imgMobile }>
            <img src={introRight} alt="" />
          </div>
          <div className={css.sliderContainer}>
            <div className={css.slider}></div>
            <div className={css.slider}></div>
            <div className={css.slider}></div>
          </div>
        </div>
        <div className={css.introRight}>
          <img src={introRight} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default IntroductionComponent;


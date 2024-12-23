import css from './about-page.module.scss';
import AboutImg from '../../assets/images/statics/about-img.png';
import AboutBgFigure from '../../assets/images/statics/about-background-figure.png';
import { en } from '../../assets/lang/en';
import { generateGuid } from '../../core/helpers/generate-guid';
import topImg from '/src/assets/images/statics/about-person.jpeg';
import bottomImg from '/src/assets/images/statics/about-second.jpeg';
import useLocalization from '../../assets/lang';


const AboutPageComponent = () => {
  const translate = useLocalization();

  const aboutData = {
    purposeTarget: [
      {
        icon: '/src/assets/images/icons/purpose-icon.png',
        title: translate('purpose'),
        text: translate('about_text_1'),
      },
      {
        icon: '/src/assets/images/icons/target-icon.png',
        title: translate('target'),
        text: translate('about_text_2'),
      },
      {
        topImg: '/src/assets/images/statics/about-person.jpeg',
      },
    ],
    reviewValues: [
      {
        icon: '/src/assets/images/icons/review-icon.png',
        title: translate('review'),
        text: translate('about_text_3'),
      },
      {
        icon: '/src/assets/images/icons/values-icon.png',
        title: translate('values'),
        text: translate('about_text_4'),
      },
    ],
  };

  return (
    <div className={css.about}>
      <div className={css.aboutTop}>
        <div className={css.left}>
          <img
            className={css.bottomImg}
            src={AboutBgFigure}
            alt={en.about_img_alt}
          />
          <img className={css.topImg} src={AboutImg} alt={en.about_img_alt} />
        </div>
        <div className={css.right}>
          <h2>{translate('about_title')}</h2>
          <p>{translate('about_text')}</p>
        </div>
      </div>
      <div className={`${css.aboutBottom} container`}>
        <div className={css.bottomHeader}>
          <h2>{translate('trust_us_title')}</h2>
          <p>{translate('trust_us_text')}</p>
        </div>
        <div className={css.bottomMain}>
          <div className={css.textImgTop}>
            <div className='row'>
              <div className='col-md-6'>
                {aboutData.purposeTarget.map((item) => (
                  <div className={css.textImg}>
                    <div className={css.purposeTarget} key={generateGuid()}>
                      <div className={css.purposeTargetHeader}>
                        <img src={item.icon} alt='' />
                        <h4>{item.title}</h4>
                      </div>
                      <p className={css.text}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='col-md-6'>
                <div className={css.purposeTargetImg}>
                  <img src={topImg} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className={css.textImgTop}>
            <div className='row'>
              <div className={css.rowRewerse}>
                <div className='col-md-6'>
                  <div className={css.purposeTargetImg}>
                    <img src={bottomImg} alt='' />
                  </div>
                </div>
                <div className='col-md-6'>
                  {aboutData.reviewValues.map((item) => (
                    <div className={css.textImg}>
                      <div className={css.purposeTarget} key={generateGuid()}>
                        <div className={css.purposeTargetHeader}>
                          <img src={item.icon} alt='' />
                          <h4>{item.title}</h4>
                        </div>
                        <p className={css.text}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageComponent;

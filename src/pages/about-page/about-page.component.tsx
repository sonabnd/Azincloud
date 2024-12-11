import css from './about-page.module.scss';
import AboutImg from '../../assets/images/statics/about-img.png';
import AboutBgFigure from '../../assets/images/statics/about-background-figure.png';
import { en } from '../../assets/lang/en';
import { generateGuid } from '../../core/helpers/generate-guid';
import img from '/src/assets/images/statics/about-person.jpeg'
const AboutPageComponent = () => {

  const aboutData = {

    purposeTarget: [
      {
        icon: '/src/assets/images/icons/purpose-icon.png',
        title: en.purpose,
        text: 'Cloud-un missiyası ən müasir bulud xidmətləri təklif etməklə rəqəmsal   infrastrukturu inkişaf etdirməkdir.'
      },
      {
        icon: '/src/assets/images/icons/target-icon.png',
        title: en.target,
        text: 'Bulud xidmətlərinin əldə edilməsi prosesini sadələşdirmək və   istifadəçiyönümlü  xidmət təmin etməkdir.'
      },
    ],
    topImg:{
      img: '/src/assets/images/statics/about-person.jpeg',
    },
    bottomImg:{
      img: '/src/assets/images/statics/about-second.jpeg',
    },
    reviewValues: [
      {
        icon: '/src/assets/images/icons/review-icon.png',
        title: en.review,
        text: 'ACənubi Qafqaz regionunda bulud əsaslı xidmətlərdə yeni standartlar müəyyən   edən, rəqəmsal transformasiyaya təkan verən aparıcı bulud xidməti provayderi   kimi daim ön sırada olmaqdır.'
      },
      {
        icon: '/src/assets/images/icons/values-icon.png',
        title: en.values,
        text: 'Kiçik və orta sahibkarlar üçün yüksək keyfiyyətli ictimai bulud xidmətləri təqdim etmək.'
      },
      {
        img: '/src/assets/images/statics/about-second.jpeg',
      }
    ]
  }
  console.log(aboutData.purposeTarget);


  return (
    <div className={css.about}>
      <div className={css.aboutTop}>
        <div className={css.left}>
          <img className={css.bottomImg} src={AboutBgFigure} alt={en.about_img_alt} />
          <img className={css.topImg} src={AboutImg} alt={en.about_img_alt} />
        </div>
        <div className={css.right}>
          <h2>{en.about_title}</h2>
          <p>{en.about_text}</p>
        </div>
      </div>
      <div className={`${css.aboutBottom} container`}>
        <div className={css.bottomHeader}>
          <h2>{en.trust_us_title}</h2>
          <p>{en.trust_us_text}</p>
        </div>
        <div className={css.bottomMain}>
          <div className={css.textImgTop}>
            <div className={css.textImg} >
            {
              aboutData.purposeTarget.map((item) => (
                
                  <div className={css.purposeTarget} key={generateGuid()}>
                    <div className={css.purposeTargetHeader}>
                      <img src={item.icon} alt="" />
                      <h4>{item.title}</h4>
                    </div>
                    <p className={css.text}>{item.text}</p>
                  </div>
              ))
            }
            </div>
            <div className={css.purposeTargetImg}>
              <img src={aboutData.topImg.img} alt="" />
            </div>
          </div>
          <div className={css.textImgTop}>
              <div className={css.purposeTargetImg}>
                <img src={aboutData.bottomImg.img} alt="" />
              </div>
              <div className={css.textImg} >
              {
                aboutData.reviewValues.map((item) => (
                  
                    <div className={css.purposeTarget} key={generateGuid()}>
                      <div className={css.purposeTargetHeader}>
                        <img src={item.icon} alt="" />
                        <h4>{item.title}</h4>
                      </div>
                      <p className={css.text}>{item.text}</p>
                    </div>
                ))
              }
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPageComponent;






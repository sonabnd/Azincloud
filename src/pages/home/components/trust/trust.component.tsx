import css from './trust.module.scss';
import { en } from '../../../../assets/lang/en';
import Shadow from '../../../../assets/images/statics/trust-card-shadow.png';
import TrustFirst from '/src/assets/images/icons/trust-first.png';
import TrustSecond from '/src/assets/images/icons/trust-second.png';
import TrustThird from '/src/assets/images/icons/trust-third.png';
import TrustFourth from '/src/assets/images/icons/trust-fourth.png';
import { generateGuid } from '../../../../core/helpers/generate-guid';

const TrustComponent = () => {
  const data = [
    {
      icon: TrustFirst,
      title: en.trust_title_1,
      text: en.trust_text_1,
    },
    {
      icon: TrustSecond,
      title: en.trust_title_2,
      text: en.trust_text_1,
    },
    {
      icon: TrustThird,
      title: en.trust_title_3,
      text: en.trust_text_1,
    },
    {
      icon: TrustFourth,
      title: en.trust_title_4,
      text: en.trust_text_1,
    },
  ]
  return (
    <div className={css.trust}>
        <div className={`${css.trustContainer} container`}>
            <h2 className={css.title}>{en.trust_us_title}</h2>
            <p className={css.text}>{en.trust_us_text}</p>
            <div className={css.cardContainer}>
              {
                data.map(card=> (
                  <div className={css.card} key={generateGuid()}>
                      <div className={css.title}>
                        <img src={card.icon} alt={en.img_alt} />
                        <h3>{card.title}</h3>
                      </div>
                    <p className={css.paragraph}>{card.text}</p>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default TrustComponent
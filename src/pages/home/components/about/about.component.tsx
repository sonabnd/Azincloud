import css from './about.module.scss'
import AboutImg from '../../../../assets/images/statics/about-img.png';
import AboutBgFigure from '../../../../assets/images/statics/about-bg-figure.png';
import { en } from '../../../../assets/lang/en';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../../router/routes';
import { useCallback } from 'react';
import useLocalization from '../../../../assets/lang';

const AboutComponent = () => {
  const navigate = useNavigate();
  const translate = useLocalization();
  
  const aboutFunc = useCallback(() => {
    navigate(Routes.about)
  }, [navigate])

  return (
    <div className={css.about}>
        <div className={css.left}>
            <img className={css.bottomImg} src={AboutBgFigure} alt={en.about_img_alt} />
            <img className={css.topImg} src={AboutImg} alt={en.about_img_alt} />
        </div>
        <div className={css.right}>
            <h2>{translate('about_title')}</h2>
            <p>{translate('about_text')}</p>
            <button onClick={aboutFunc}>{translate('more_text')}</button>
        </div>
    </div>
  )
}

export default AboutComponent
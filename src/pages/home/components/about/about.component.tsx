import css from './about.module.scss'
import AboutImg from '../../../../assets/images/statics/about-img.png';
import AboutBgFigure from '../../../../assets/images/statics/about-bg-figure.png';
import { en } from '../../../../assets/lang/en';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../../router/routes';
import { useCallback } from 'react';

const AboutComponent = () => {
  const navigate = useNavigate();

  const aboutFunc = useCallback(() => {
    navigate(Routes.about)
  }, [])
  return (
    <div className={css.about}>
        <div className={css.left}>
            <img className={css.bottomImg} src={AboutBgFigure} alt={en.about_img_alt} />
            <img className={css.topImg} src={AboutImg} alt={en.about_img_alt} />
        </div>
        <div className={css.right}>
            <h2>{en.about_title}</h2>
            <p>{en.about_text}</p>
            <button onClick={aboutFunc}>{en.more_text}</button>
        </div>
    </div>
  )
}

export default AboutComponent
import {useNavigate } from 'react-router-dom';
import { en } from '../../../assets/lang/en';
import css from './news-card.module.scss';
import { useCallback } from 'react';
import { setToken } from '../../helpers/get-token';

const NewsCardComponent = ({ news}: any) => {
  const navigate = useNavigate()
    
    const detailsFunc = useCallback(() => {
      setToken(news);
      navigate(`/details/${news.id}`)
  }, [])

  return (
      <div className={css.card} onClick={()=> detailsFunc(news)}>
        <div className={css.cardIntro}>
          <div className={css.img}>
            <img src={news.img1} alt={en.img_alt} />
          </div>
          <div className={css.textContainer}>
            <h4 className={css.heading}>{news.heading}</h4>
            <p className={css.text}>{news.title1}</p>
            <span className={css.date}>{news.date}</span>
          </div>
        </div>
      </div>
  );
};

export default NewsCardComponent;

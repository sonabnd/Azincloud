import { useNavigate, useParams } from 'react-router-dom';
import { en } from '../../assets/lang/en';
import css from './news.details.module.scss';
import BackIcon from '/src/assets/images/icons/news-intro-back.png';
import { useNews } from '../../core/shared/news-card/actions/news-card.query';
import { useCallback, useEffect, useState } from 'react';
import { Routes } from '../../router/routes';
import { getToken } from '../../core/helpers/get-token';
import LoaderComponent from '../../core/shared/loader/loader.component';

const NewsDetailsComponent = () => {
  const {id} = useParams();
  const {data} = useNews();
  const [detailCard, setDetailCard] = useState<any | null>(null);

  useEffect(() => {

      let news = data?.find((item) => item.id == id);

      if (!news) {
          news = getToken();
      }


      setDetailCard(news);
  }, [id, data]);

  const navigate = useNavigate()

  const backFunc = useCallback(() => {
    navigate(Routes.home)
  }, [])
  return (
    <div className={`${css.newsDetails} container`}>
        {!detailCard ? (
        <div><LoaderComponent/></div> 
      ) : (
        <>
          <div className={css.back} onClick={backFunc}>
            <img src={BackIcon} alt={en.img_alt} />
            <span>{en.back_icon_text}</span>
          </div>
          <div className={css.main}>
            <h2>{detailCard.heading}</h2>
            <p className={css.date}>{detailCard.date}</p>
            <div className={css.img}>
              <img src={detailCard.img1} alt={en.img_alt} />
            </div>
            <h3>{detailCard.title1}</h3>
            <p className={css.text1}>{detailCard.text1}</p>
            <div className={css.img}>
              <img src={detailCard.img1} alt={en.img_alt} />
            </div>
            <h3>{detailCard.title2}</h3>
            <p>{detailCard.text2}</p>
            <h3>{detailCard.title3}</h3>
            <p>{detailCard.text3}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default NewsDetailsComponent
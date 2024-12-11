import css from './not-found.module.scss'
import NotFoundImg from '../../assets/images/statics/not-found-img.png';
import { en } from '../../assets/lang/en';

const NotFoundComponent = () => {
  return (
    <div className={`${css.notFound} container`}>
        <div className={css.box}>
            <img src={NotFoundImg} alt={en.img_alt} />
            <p className={css.text}>{en.not_found}</p>
            <button className={css.btn}>{en.home}</button>
        </div>
    </div>
  )
}

export default NotFoundComponent
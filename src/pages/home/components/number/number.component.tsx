import css from './number.module.scss'

const NumberComponent = () => {
  return (
    <div className={css.number}>
        <div className={`${css.numberContainer} container`}>
            <div className={css.card}>
                <img src="" alt="" />
                <p className={css.text}></p>
                <span></span>
            </div>
            <div className={css.card}>
                <img src="" alt="" />
                <p className={css.text}></p>
                <span></span>
            </div>
            <div className={css.card}>
                <img src="" alt="" />
                <p className={css.text}></p>
                <span></span>
            </div>
            <div className={css.card}>
                <img src="" alt="" />
                <p className={css.text}></p>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default NumberComponent
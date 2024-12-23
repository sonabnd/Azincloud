import useLocalization from '../../../../assets/lang';
import { useNumber } from './actions/number.query'
import css from './number.module.scss'

const NumberComponent = () => {

    const { data } = useNumber();
    const translate = useLocalization();

    return (
        <div className={css.number}>
            <div className={`${css.numberContainer} container`}>
                {
                    data?.map((card) => (
                        <>
                            <div className={css.card}>
                                <img src={card.img} alt={translate('img_alt')} />
                                <p className={css.text}>{card.title}</p>
                                <span>{card.number}</span>
                            </div>
                            <div className={css.line}></div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default NumberComponent
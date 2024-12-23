import css from './partner-page.module.scss';
import partnerImg from '../../assets/images/statics/partner-img.png';
import { useParams } from 'react-router-dom';
import { usePartners } from '../home/components/partners/actions/partners.query';
import { useEffect, useState } from 'react';
import { getToken } from '../../core/helpers/get-token';
import LoaderComponent from '../../core/shared/loader/loader.component';
import useLocalization from '../../assets/lang';

const PartnerPageComponent = () => {
    const { id } = useParams();
    const { data } = usePartners();
    const [card, setCard] = useState<any | null>(null);
    const translate = useLocalization();

    useEffect(() => {

        let partner = data?.find((item) => item.id == id);

        if (!partner) {
            partner = getToken();
        }

        setCard(partner);
    }, [id, data]);


    return (
        <div className='container'>
            <div className={css.partner}>
                <div className={css.partnerTop}>
                    {card ? (
                        <>
                            <div className={css.left} key={card.id}>
                                <h2>{card.title}</h2>
                                <p>{card.text}</p>
                            </div>
                            <div className={css.right}>
                                <img src={partnerImg} alt="" />
                            </div>
                        </>
                    ) : (
                        <div>
                            <LoaderComponent />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PartnerPageComponent;


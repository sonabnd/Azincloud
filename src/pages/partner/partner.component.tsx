import css from './partner.module.scss';
import partnerImg from '../../assets/images/statics/partner-img.png';
import { useParams } from 'react-router-dom';
import { usePartners } from '../home/components/partners/actions/partners.query';
import { useEffect, useState } from 'react';
import { getToken } from '../../core/helpers/get-token';
import LoaderComponent from '../../core/shared/loader/loader.component';

const PartnerComponent = () => {
    const { id } = useParams();
    const { data } = usePartners();
    const [card, setCard] = useState<any | null>(null);

    useEffect(() => {

        let partner = data?.find((item) => item.id == id);

        if (!partner) {
            partner = getToken();
        }


        setCard(partner);
    }, [id, data]);

    return (
        <div className={css.partner}>
            <div className={`${css.partnerTop} container`}>
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
    );
};

export default PartnerComponent;


import css from './clients.module.scss';
import { en } from '../../../../assets/lang/en';

const ClientsComponent = () => {
    const clientData = [
        {
            id: 1,
            img: '/src/assets/images/statics/azercell.png'
        },
        {
            id: 1,
            img: '/src/assets/images/statics/azTv.png'
        },
        {
            id: 1,
            img: '/src/assets/images/statics/client3.png'
        },
        {
            id: 1,
            img: '/src/assets/images/statics/client-4.png'
        },
        {
            id: 1,
            img: '/src/assets/images/statics/client-5.png'
        },
        {
            id: 1,
            img: '/src/assets/images/statics/client-6.png'
        },
    ]
    return (
        <div className={css.client}>
            <h2>{en.clients_title}</h2>
            <div className={`container ${css.clientContainer}`}>
                {
                    clientData?.map(logo => (
                        <div className={css.box} key={logo.id}>
                            <img src={logo.img} alt={en.client_img_alt} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ClientsComponent
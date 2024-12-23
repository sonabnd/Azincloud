import css from './clients.module.scss';
import { en } from '../../../../assets/lang/en';
import useLocalization from '../../../../assets/lang';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const ClientsComponent = () => {
    const translate = useLocalization();
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
            <div className='container'>
                <h2>{translate('clients_title')}</h2>
                <div className={css.clientContainer}>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper"
                        breakpoints={{
                            768: {
                                slidesPerView: 6, 
                                spaceBetween: 30,

                            },
                            0: {
                                slidesPerView: 3.5, 
                                spaceBetween: 0,
                            },
                        }}
                    >
                        {
                            clientData?.map(logo => (
                                <SwiperSlide key={logo.id} className={css.box}>
            
                                        <img src={logo.img} alt={en.client_img_alt} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default ClientsComponent
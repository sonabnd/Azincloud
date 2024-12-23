import css from "./certificates.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import useLocalization from "../../../../assets/lang";
import logoIso from "/src/assets/images/statics/certificate-1.png";
import logoTier from "/src/assets/images/statics/certificate-2.png";
import logoTier2 from "/src/assets/images/statics/certificate-3.png";

const CertificatesComponent = () => {
    const certificateData = [
        {
            id: 1,
            img: logoIso,
        },
        {
            id: 2,
            img: logoTier,
        },
        {
            id: 3,
            img: logoTier2,
        },
        {
            id: 4,
            img: logoIso,
        },
        {
            id: 5,
            img: logoTier,
        },
        {
            id: 6,
            img: logoIso,
        },
    ];

    const translate = useLocalization();

    return (
        <div className={css.certificates}>
            <div className='container'>
                <h2 className={css.title}>{translate("certificates_title")}</h2>
                <div className={css.certificatesContainer}>
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
                                spaceBetween: 35,
                            },
                        }}
                    >
                        {certificateData?.map((logo) => (
                            <SwiperSlide key={logo.id} className={css.card}>
                                <img src={logo.img} alt={translate("client_img_alt")} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default CertificatesComponent;

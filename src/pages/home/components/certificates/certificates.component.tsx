import css from './certificates.module.scss';
import { en } from '../../../../assets/lang/en';

const CertificatesComponent = () => {
    const certificateData = [
        {
            id: 1,
            img: '/src/assets/images/statics/certificate-1.png'
        },
        {
            id: 2,
            img: '/src/assets/images/statics/certificate-2.png'
        },
        {
            id: 3,
            img: '/src/assets/images/statics/certificate-3.png'
        },
        {
            id: 4,
            img: '/src/assets/images/statics/certificate-1.png'
        },
        {
            id: 5,
            img: '/src/assets/images/statics/certificate-2.png'
        },
        {
            id: 6,
            img: '/src/assets/images/statics/certificate-4.png'
        },
    ]
  return (
    <div className={css.certificates}>
        <h2 className={css.title}>{en.certificates_title}</h2>
        <div className={css.certificatesContainer}>
            {
                certificateData?.map((logo)=> (
                    <div className={css.card}>
                        <img src={logo.img} alt={en.client_img_alt} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CertificatesComponent
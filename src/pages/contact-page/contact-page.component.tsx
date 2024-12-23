import css from './contact-page.module.scss';
import { en } from '../../assets/lang/en';
import ContactInfoComponent from '../../core/shared/contact-info/contact-info.component';
import SocialInfoComponent from '../../core/shared/social-info/social-info.component';
import WriteUsComponent from './components/write-us/write-us.component';
import useLocalization from '../../assets/lang';

const ContactComponent = () => {
  const translate = useLocalization();
  return (
    <div className='container'>
      <div className={css.contact}>
        <div className={css.contactTop}>
          <div className={css.contactLeft}>
            <h2 className={css.heading}>{translate('our_contacts_title')}</h2>
            <ContactInfoComponent />
            <div className={css.line}></div>
            <SocialInfoComponent />
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.277335715424!2d49.83070797625536!3d40.38054557144545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da26259811b%3A0xd8e93c5caf8d91ba!2sAzInTelecom!5e0!3m2!1sen!2saz!4v1734554885797!5m2!1sen!2saz'
            width='500px'
            height='350'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
        <div className={css.contactBottom}>
          <WriteUsComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;

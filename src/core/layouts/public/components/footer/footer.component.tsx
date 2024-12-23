import css from './footer.module.scss';
import { Link } from 'react-router-dom';
import ContactInfoComponent from '../../../../shared/contact-info/contact-info.component';
import SocialInfoComponent from '../../../../shared/social-info/social-info.component';
import HelpPagesComponent from '../../../../shared/help-pages/help-pages.component';
import useLocalization from '../../../../../assets/lang';
import { enviroment } from '../../../../configs/app.config';

const FooterComponent = () => {
  const translate = useLocalization();

  const projectName = enviroment.applicationName;
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className='container'>
        <div className={css.footerTop}>
          <div className={css.left}>
            <p className={css.subscribeText}>{translate('subscribe_title')}</p>
            <div className={css.subscribe}>
              <input type="text" placeholder={translate('email_text')} />
              <button>{translate('subscribe_text')}</button>
            </div>
          </div>
            <div className={css.mobileHelp}>
              <HelpPagesComponent />
            </div>
          <div className={css.rightSide}>

            <div className={css.middle}>
              <ContactInfoComponent />
            </div>
            <div className={css.right}>
              <div className={css.webHelp}>
                <HelpPagesComponent />
              </div>
              <div className={css.socialList}>
                <SocialInfoComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className={css.footerBottom}>
          <span>{translate('author_text')} {date} {projectName}</span>
          <Link>{translate('author_link')}</Link>
        </div>
    </footer>
  )
}

export default FooterComponent
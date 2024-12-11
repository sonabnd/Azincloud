import css from './footer.module.scss';
import { Link } from 'react-router-dom';
import ContactInfoComponent from '../../../../shared/contact-info/contact-info.component';
import SocialInfoComponent from '../../../../shared/social-info/social-info.component';
import { en } from '../../../../../assets/lang/en';
import HelpPagesComponent from '../../../../shared/help-pages/help-pages.component';

const FooterComponent = () => {
  return (
    <footer>
      <div className={`${css.footerTop} container`}>
        <div className={css.left}>
          <p className={css.subscribeText}>{en.subscribe_title}</p>
          <div className={css.subscribe}>
            <input type="text" placeholder={en.email_text} />
            <button>{en.subscribe_text}</button>
          </div>
        </div>
        <div className={css.mobileHelp}>
          <HelpPagesComponent/>
        </div>
        <div className={css.middle}>
          <ContactInfoComponent/>
        </div>
        <div className={css.right}>
          <div className={css.webHelp}>
            <HelpPagesComponent/>
          </div>
          <div className={css.socialList}>
              <SocialInfoComponent/>
          </div>
        </div>
      </div>
      <div className={css.footerBottom}>
          <span>{en.author_text}</span>
          <Link>{en.author_link}</Link>
      </div>
    </footer>
  )
}

export default FooterComponent
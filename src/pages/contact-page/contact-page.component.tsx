import css from "./contact-page.module.scss";
import { en } from "../../assets/lang/en";
import WriteUsComponent from "./components/write-us.component";
import ContactInfoComponent from "../../core/shared/contact-info/contact-info.component";
import SocialInfoComponent from "../../core/shared/social-info/social-info.component";

const ContactComponent = () => {
  return (
    <>
        <div className={`${css.contact} container`}>
          <div className={css.contactTop}>
            <div className={css.contactLeft}>
              <h2 className={css.heading}>{en.our_contacts_title}</h2>
              <ContactInfoComponent/>
              <div className={css.line}></div>
              <SocialInfoComponent/>
            </div>
          </div>
          <div className={css.contactBottom}>
            <WriteUsComponent />
          </div>
        </div>

    </>
  );
};

export default ContactComponent;

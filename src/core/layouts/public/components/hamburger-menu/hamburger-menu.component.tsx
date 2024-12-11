import { en } from "../../../../../assets/lang/en";
import ContactInfoComponent from "../../../../shared/contact-info/contact-info.component";
import SocialInfoComponent from "../../../../shared/social-info/social-info.component";
import css from "./hamburger-menu.module.scss";
import close from "/src/assets/images/statics/close-circle.png";

const HamburgerMenu = () => {
  const menuData = [
    {
      id: 1,
      link: en.products_services_title,
    },
    {
      id: 2,
      link: en.news_blog_title,
    },
    {
      id: 3,
      link: en.about_title,
    },
    {
      id: 4,
      link: en.contact_title,
    },
    {
      id: 5,
      link: en.technical_assistance_text,
    },
    {
      id: 6,
      link: en.faq_text,
    },
    {
      id: 7,
      link: en.law_text,
    },
  ];
  return (
    <div className={css.menu}>
      <div className={css.img}>
        <img src={close} alt="" />
      </div>
      <div>
        {menuData.map((item) => (
          <ul>
            <li>{item.link}</li>
          </ul>
        ))}
      </div>
      <ContactInfoComponent />
      <SocialInfoComponent />
    </div>
  );
};

export default HamburgerMenu;

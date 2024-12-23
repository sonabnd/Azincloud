import { Link } from "react-router-dom";
import useLocalization from "../../../../../assets/lang";
import ContactInfoComponent from "../../../../shared/contact-info/contact-info.component";
import SocialInfoComponent from "../../../../shared/social-info/social-info.component";
import css from "./hamburger-menu.module.scss";
import close from "/src/assets/images/statics/close-circle.png";
import { useDispatch } from "react-redux";
import { useStore } from "../../../../../store/store.config";
import { enviroment } from "../../../../configs/app.config";
import { ILang } from "../../../../../assets/lang/lang";
import { setLocale } from "../../../../../store/store.reducer";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ILanguages } from "../../../../../store/store";
import { Routes } from "../../../../../router/routes";

const HamburgerMenu = ({ closeMenu }: any) => {
  const translate = useLocalization();
  const dispatch = useDispatch();
  const languages = useStore('languages');
  const locale = useStore('locale');
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); 
  
  const currentLang = useMemo(() => {
      return localStorage.getItem(`${enviroment.applicationName}-locale`) as ILang || 'en';
  }, [locale]);

  useEffect(() => {
      dispatch(setLocale(currentLang));
  }, [currentLang, dispatch]);

  const changeLanguage = useCallback((key: any) => {
      setSelectedLanguage(key);
      dispatch(setLocale(key));
  }, [dispatch]);

  const menuData = [
    { id: 1, link: translate("products_services_title"), path: Routes.products },
    { id: 2, link: translate("news_blog_title"), path: Routes.news },
    { id: 3, link: translate("about_title"), path: Routes.about },
    { id: 4, link: translate("contact_title"), path: Routes.contact },
    { id: 5, link: translate("technical_assistance_text") },
    { id: 6, link: translate("faq_text") },
    { id: 7, link: translate("law_text") },
  ];

  

  return (
    <div className={css.hamburgerMenu}>
      <div className="container-fluid">
        <div className={css.img} onClick={closeMenu}>
          <img src={close} alt="" />
        </div>
        <div className={css.navbarList}>
          {menuData.map((item) => (
            <ul key={item.id}>
              <Link to={item.path} className={css.link} onClick={closeMenu}>{item.link}</Link>
            </ul>
          ))}
        </div>
        <div className={css.btn}>
          <button>{translate('sign_in_text')}</button>
        </div>
        <div className={css.languageContainer}>
          <ul className={css.languageList}>
            {languages.map((item: ILanguages) => (
              <li
                key={item.key}
                className={selectedLanguage === item.key ? css.selected : ''}
                onClick={() => changeLanguage(item.key)}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
        <div className={css.contactComponent}>
          <ContactInfoComponent />
        </div>
        <div className={css.socialComponent}>
          <SocialInfoComponent />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;








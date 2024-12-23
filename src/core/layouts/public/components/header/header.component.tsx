import { useState } from "react";
import HeaderLogoComponent from "../header-logo/header-logo.component";
import HeaderNavbarComponent from "../header-navbar/header-navbar.component";
import HeaderRightComponent from "../header-right/header-right.component";
import HeaderMenuComponent from "../header-menu/header-menu.component";
import HamburgerMenu from "../hamburger-menu/hamburger-menu.component";
import css from "./header.module.scss";

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {isMenuOpen && (
        <div className={css.hamburgerMenuWrapper}>
          <HamburgerMenu closeMenu={() => setIsMenuOpen(false)} />
        </div>
      )}
      {!isMenuOpen && (
        <header className={css.header}>
          <div className="container">
            <div className={css.headerContainer}>
              <HeaderLogoComponent />
              <div className={css.right}>
                <HeaderNavbarComponent />
                <HeaderRightComponent />
              </div>
              <div className={css.mobile} onClick={toggleMenu}>
                <HeaderMenuComponent />
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default HeaderComponent;




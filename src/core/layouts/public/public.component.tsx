import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import FooterComponent from "./components/footer/footer.component";
import css from "./public.module.scss";
import HamburgerMenu from "./components/hamburger-menu/hamburger-menu.component";

const PublicComponent = () => {
  return (
    <>
      <div className={css.web}>
        <HeaderComponent />
        <div className={css.outlet}>
          <Outlet />
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

export default PublicComponent;

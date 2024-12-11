import HeaderLogoComponent from '../header-logo/header-logo.component';
import HeaderNavbarComponent from '../header-navbar/header-navbar.component';
import HeaderRightComponent from '../header-right/header-right.component';
import css from './header.module.scss';

const HeaderComponent = () => {
  return (
    <header className={css.header}>
      <div className={ `container ${css.headerContainer}`}>
        <HeaderLogoComponent/>
        <div className={css.right}>
          <HeaderNavbarComponent/>
          <HeaderRightComponent/>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
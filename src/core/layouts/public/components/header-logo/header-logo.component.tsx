import { Routes } from '../../../../../router/routes'
import css from './header-logo.module.scss'
import Logo from '../../../../../assets/images/statics/azincloud-logo.png';
import { en } from '../../../../../assets/lang/en';
import { Link } from 'react-router-dom';

const HeaderLogoComponent = () => {
  return (
    <div className={css.logo}>
        <Link to={Routes.home}>
        <img src={Logo} alt={en.img_alt_logo} />
        </Link>
    </div>
  )
}

export default HeaderLogoComponent
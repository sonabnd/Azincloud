import { Link } from 'react-router-dom'
import { en } from '../../../../../assets/lang/en'
import { Routes } from '../../../../../router/routes'
import css from './header-navbar.module.scss'

const HeaderNavbarComponent = () => {
  return (
    <div className={css.navbar}>
        <ul>
          <li>
            <Link to={Routes.about}>{en.about_title}</Link>
          </li>
          <li>
            <Link to={Routes.products}>{en.products_services_title}</Link>
          </li>
          <li>
            <Link to={Routes.news}>{en.news_blog_title}</Link>
          </li>
          <li>
            <Link to={Routes.contact}>{en.contact_title}</Link>
          </li>
        </ul>
    </div>
  )
}

export default HeaderNavbarComponent
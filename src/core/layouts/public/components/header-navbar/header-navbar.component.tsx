import { Link } from 'react-router-dom'
import { en } from '../../../../../assets/lang/en'
import { Routes } from '../../../../../router/routes'
import css from './header-navbar.module.scss'
import useLocalization from '../../../../../assets/lang'
import { generateGuid } from '../../../../helpers/generate-guid'

const HeaderNavbarComponent = () => {
  const translate = useLocalization();

  const navData = [
    {
      link: translate('about_title'),
      path: Routes.about,
    },
    {
      link: translate('products_services_title'),
      path: Routes.products,
    },
    {
      link: translate('news_blog_title'),
      path: Routes.news,
    },
    {
      link: translate('contact_title'),
      path: Routes.contact,
    },
  ]
  return (
    <div className={css.navbar}>
      <ul>
        {
          navData.map(item => (
            <li key={generateGuid()}>
              <Link to={item.path}>{item.link}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default HeaderNavbarComponent
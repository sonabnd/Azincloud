import css from './header-menu.module.scss'
import { en } from '../../../../../assets/lang/en'
import Menu from '/src/assets/images/icons/menu.png'

const HeaderMenuComponent = () => {
  return (
    <>
    <div>
        <img src={Menu} alt={en.img_alt} />
    </div>
    </>
  )
}

export default HeaderMenuComponent
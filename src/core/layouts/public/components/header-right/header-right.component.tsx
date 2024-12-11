import { LuSearch } from "react-icons/lu";
import './header-right.module.scss'
import { useStore } from "../../../../../store/store.config";
import { ILanguages } from "../../../../../store/store";
import { generateGuid } from "../../../../helpers/generate-guid";
import css from './header-right.module.scss'
import { en } from "../../../../../assets/lang/en";
import HeaderMenuComponent from "../header-menu/header-menu.component";

const HeaderRightComponent = () => {
    const languages = useStore('languages')
  return (
    <div className={css.right}>
        <i><LuSearch /></i>
        <div className={css.selectBtn}> 
            <div>
                <select name='select' id='select'>
                    {
                        languages.map((item: ILanguages) => (
                            <option value={item.key} key={generateGuid()}>{item.value}</option>
                        ))
                    }
                </select>
            </div>
            <button className={css.btn}>{en.sign_in_text}</button>
        </div>
        <div className={css.menu}>
            <HeaderMenuComponent/>
        </div>
    </div>
  )
}

export default HeaderRightComponent
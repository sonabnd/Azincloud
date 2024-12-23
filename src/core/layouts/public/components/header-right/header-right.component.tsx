import { LuSearch } from "react-icons/lu";
import './header-right.module.scss'
import { useStore } from "../../../../../store/store.config";
import { ILanguages } from "../../../../../store/store";
import { generateGuid } from "../../../../helpers/generate-guid";
import css from './header-right.module.scss'
import { en } from "../../../../../assets/lang/en";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useMemo } from "react";
import { enviroment } from "../../../../configs/app.config";
import { ILang } from "../../../../../assets/lang/lang";
import { setLocale } from "../../../../../store/store.reducer";
import useLocalization from "../../../../../assets/lang";

const HeaderRightComponent = () => {
    const dispatch = useDispatch();
    const languages = useStore('languages');
    const locale = useStore('locale')
    const translate = useLocalization();
    
    const currentLang = useMemo(() => {
        return localStorage.getItem(`${enviroment.applicationName}-locale`) as ILang || 'en';
    }, [locale]);

    useEffect(() => {
        dispatch(setLocale(currentLang));
    }, [currentLang, dispatch]);

    const changeLanguage = useCallback((e: any) => {
        dispatch(setLocale(e.target.value));
    }, [dispatch]);

  return (
    <div className={css.right}>
        <i><LuSearch /></i>
        <div className={css.selectBtn}> 
            <div>
                <select name='select' id='select' onChange={changeLanguage} value={currentLang}>
                    {
                        languages.map((item: ILanguages) => (
                            <option value={item.key} key={item.key}>{item.value}</option>
                        ))
                    }
                </select>
            </div>
            <button className={css.btn}>{translate('sign_in_text')}</button>
        </div>
    </div>
  )
}

export default HeaderRightComponent


import { Link } from "react-router-dom";
import css from "./help-pages.module.scss";
import { en } from "../../../assets/lang/en";
import useLocalization from "../../../assets/lang";

const HelpPagesComponent = () => {
    const translate = useLocalization();

    const linkData = [
        {
            link: translate('technical_assistance_text'),
        },
        {
            link: translate('faq_text'),
        },
        {
            link: translate('law_text'),
        },
    ];
    return (
        <>
            {linkData.map((item) => (
                <ul className={css.rightList}>
                    <li>
                        <Link>{item.link}</Link>
                    </li>
                </ul>
            ))}
        </>
    );
};

export default HelpPagesComponent;

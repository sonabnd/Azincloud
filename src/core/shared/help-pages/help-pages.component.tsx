import { Link } from "react-router-dom";
import css from "./help-pages.module.scss";
import { en } from "../../../assets/lang/en";

const linkData = [
    {
        link: en.technical_assistance_text,
    },
    {
        link: en.faq_text,
    },
    {
        link: en.law_text,
    },
];
const HelpPagesComponent = () => {
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

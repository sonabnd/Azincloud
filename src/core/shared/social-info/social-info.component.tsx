import css from './social-info.module.scss';
import { Link } from "react-router-dom";

const SocialInfoComponent = () => {
    const contactData =
    {
        social: [
            {
                logo: "src/assets/images/statics/facebook-img.png",
            },
            {
                logo: "src/assets/images/statics/instagram-img.png",
            },
            {
                logo: "src/assets/images/statics/telegram-img.png",
            },
            {
                logo: "src/assets/images/statics/linkedin-img.png",
            },
            {
                logo: "src/assets/images/statics/youtube-img.png",
            },
        ]
    };
    return (
        <div>
            <ul className={css.socialList}>
                {
                    contactData.social.map((social) => (
                        <li>
                            <Link >
                                <img src={social.logo} alt="" />
                            </Link>
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}

export default SocialInfoComponent
import useLocalization from '../../../assets/lang';
import css from './contact-info.module.scss'
import shortNumber from '/src/assets/images/icons/user-tag.png'
import number from '/src/assets/images/icons/call.png';
import email from '/src/assets/images/icons/message-text.png';
import location from '/src/assets/images/icons/location.png';

const ContactInfoComponent = () => {
    const translate = useLocalization();

    const contactData =
    {
        contact: [
            {
                id: 1,
                img: shortNumber,
                text: "157",
            },
            {
                id: 2,
                img: number,
                text: "+994 12 200 00 20",
            },
            {
                id: 3,
                img: email,
                text: "info@cloud.az",
            },
            {
                id: 4,
                img: location,
                text: translate('location'),
            },
        ],

    };
    return (
        <div>
            <ul className={css.contactList}>
                {contactData.contact.map((contact) => (
                    <li key={contact.id}>
                        <img src={contact.img} alt={translate('img_alt')} />
                        <span>{contact.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactInfoComponent
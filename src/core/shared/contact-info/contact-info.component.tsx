import css from './contact-info.module.scss'

const ContactInfoComponent = () => {
    const contactData =
    {
        contact: [
            {
                id: 1,
                img: "src/assets/images/icons/user-tag.png",
                text: "157",
            },
            {
                id: 2,
                img: "src/assets/images/icons/call.png",
                text: "+994 12 200 00 20",
            },
            {
                id: 3,
                img: "src/assets/images/icons/message-text.png",
                text: "info@cloud.az",
            },
            {
                id: 4,
                img: "src/assets/images/icons/location.png",
                text: "74, Alibey Huseynzade, AZ1009, Baku,Azerbaijan",
            },
        ],

    };
    return (
        <div>
            <ul className={css.contactList}>
                {contactData.contact.map((contact) => (
                    <li key={contact.id}>
                        <img src={contact.img} alt="bnm" />
                        <span>{contact.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactInfoComponent
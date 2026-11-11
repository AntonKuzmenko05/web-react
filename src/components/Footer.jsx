const STUDENT_GROUP = '6-1214-пі-2'
const STUDENT_EMAIL = 'tohaabob@gmail.com'

export default function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer__inner">
                <p className="footer__text">
                    © {currentYear} Група <span className="footer__group-name">{STUDENT_GROUP}</span>
                </p>

                <address className="footer__contacts" aria-label="Наші контакти">
                    <h3 className="footer__contacts-title">Наші контакти</h3>
                    <ul className="footer__contacts-list">
                        <li className="footer__contacts-item">
                            <span className="footer__label">Email:</span>
                            <a className="footer__link" href={`mailto:${STUDENT_EMAIL}`}>{STUDENT_EMAIL}</a>
                        </li>
                        <li className="footer__contacts-item">
                            <span className="footer__label">Телефон:</span>
                            <a className="footer__link" href="tel:+380501112233">+38 (050) 111-22-33</a>
                        </li>
                        <li className="footer__contacts-item">
                            <span className="footer__label">Адреса:</span>
                            <span>Запоріжжя, вул. Університетська, 66Б</span>
                        </li>
                    </ul>
                </address>
            </div>
        </footer>
    )
}
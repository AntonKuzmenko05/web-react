export default function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Лабораторна робота № 9</h1>
            <nav className="nav" aria-label="Головна навігація">
                <a className="nav__link" href="#">Головна</a>
                <a className="nav__link" href="#">Про нас</a>
                <a className="nav__link nav__link--cta" href="#">Контакти</a>
            </nav>
        </header>
    )
}
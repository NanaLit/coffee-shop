import './header.scss';
import logo from './logo.png';

function Header () {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
            <ul className="header__list">
                <li className="header__item">
                    Coffee house
                </li>
                <li className="header__item">
                    Our coffee
                </li>
                <li className="header__item">
                    For your pleasure
                </li>
            </ul>
        </header>
    );
}

export default Header;
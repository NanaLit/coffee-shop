import './header.scss';
import logo from './logo.png';

function Header () {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
            <ul className="header__list">
                <li className="header__item">
                    <a href="#">Coffee house</a>
                </li>
                <li className="header__item">
                    <a href="#">Our coffee</a>
                </li>
                <li className="header__item">
                    <a href="#">For your pleasure</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
import './header.scss';
import logo from './logo.png';

function Header () {
    return (
        <header>
            <img src={logo} alt="logo" />
            <ul>
                <li>
                    Coffee house
                </li>
                <li>
                    Our coffee
                </li>
                <li>
                    For your pleasure
                </li>
            </ul>
        </header>
    );
}

export default Header;
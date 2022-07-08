import './hat.scss';
import logo from './logo.png';
import logoBlack from './logo-black.png';

function Hat({footer}) {

    let img = logo;
    let clazz = "hat__item";
    let header = "header_none";
    let hamburger = "hamburger hamburger_none";
    let hatBlock = "hat__block hat__block_none"

    footer ? ((img = logoBlack) && (clazz = "hat__item hat__item_black") && (header = "") && (hamburger = "hamburger hamburger_none") && (hatBlock = "hat__block hat__block_none")) : ((img = logo) && (clazz = "hat__item") && (header = "header_none") && (hamburger = "hamburger") && (hatBlock = "hat__block"));

    return (
        <div className="hat">
            <div className={hatBlock}>
                <nav>
                    <a href="#"><img className="logo" src={img} alt="logo" /></a>
                    <ul className="hat__list">
                        <li className={clazz}>
                            <a href="#">Coffee house</a>
                        </li>
                        <li className={clazz}>
                            <a href="#">Our coffee</a>
                        </li>
                        <li className={clazz}>
                            <a href="#">For your pleasure</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={hamburger}>
                <a href="#"><img className="hamburger__logo" src={img} alt="logo" /></a>
            </div>
            <nav className={header}>
                <a href="#"><img className="logo" src={img} alt="logo" /></a>
                <ul className="hat__list">
                    <li className={clazz}>
                        <a href="#">Coffee house</a>
                    </li>
                    <li className={clazz}>
                        <a href="#">Our coffee</a>
                    </li>
                    <li className={clazz}>
                        <a href="#">For your pleasure</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Hat;
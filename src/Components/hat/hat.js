import './hat.scss';
import logo from './logo.png';
import logoBlack from './logo-black.png';

function Hat({footer}) {

    let img = logo;
    let clazz = "hat__item";
    let header = "header_none";
    let hatList = "hat__list";

    footer ? ((img = logoBlack) && (clazz = "hat__item hat__item_black") && (header = "") && (hatList = "hat__list")) : ((img = logo) && (clazz = "hat__item") && (header = "header_none") && ((hatList = "hat__list hat__list_none")));

    return (
        <div className="hat">
            <nav className={header}>
                <a href="#" onClick={this.openMenu}><img className="logo" src={img} alt="logo" /></a>
                <ul className={hatList}>
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
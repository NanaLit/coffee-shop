import './hat.scss';
import logo from './logo.png';
import logoBlack from './logo-black.png';

function Hat({footer}) {

    let img = logo;
    let clazz = "hat__item";

    footer ? ((img = logoBlack) && (clazz = "hat__item hat__item_black")) : ((img = logo) && (clazz = "hat__item"));

    return (
        <div className="hat">
            <img className="logo" src={img} alt="logo" />
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
        </div>
    )
}

export default Hat;
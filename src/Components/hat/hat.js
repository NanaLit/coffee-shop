import './hat.scss';
import logo from './logo.png';
import logoBlack from './logo-black.png';

function Hat({footer}) {

    let img = logo;

    footer ? (img = logoBlack) : (img = logo);

    return (
        <div className="hat">
            <img className="logo" src={img} alt="logo" />
            <ul className="hat__list">
                <li className="hat__item">
                    <a href="#">Coffee house</a>
                </li>
                <li className="hat__item">
                    <a href="#">Our coffee</a>
                </li>
                <li className="hat__item">
                    <a href="#">For your pleasure</a>
                </li>
            </ul>
        </div>
    )
}

export default Hat;
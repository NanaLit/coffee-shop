import './card.scss';
import Description from '../description/descr';
import coffee from'./coffee.jpg';

function Card () {
    return (
        <div className="card">
            <img src={coffee} alt="coffee" className="card__img" />
            <Description text={"Solimo Coffee Beans 2 kg"} middle={true}/>
            <p className="price">10.73$</p>
        </div>
    )
}

export default Card;
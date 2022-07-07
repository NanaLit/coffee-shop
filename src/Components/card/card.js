import './card.scss';
import Description from '../description/descr';

const Card = ({text, middle, img, price}) => {
    
    return (
        <div className="card">
            <img src={require (`../App/${img}`)} alt="coffee" className="card__img" />
            <Description text={text} middle={middle}/>
            <p className="price">{price}$</p>
        </div>
    )
}

export default Card;
import './card.scss';
import Description from '../description/descr';

const  Card = ({text, middle, img, price, country, filters}) => {
   let classes ="country";
   let size = "card";
    
    if(filters) {
        classes += " country_veu"
        size += " card_big"
    }
    
    return (
        <div className={size}>
            <img src={require (`../App/${img}`)} alt="coffee" className="card__img" />
            <Description text={text} middle={middle}/>
            <p className={classes}>{country}</p>
            <p className="price">{price}$</p>
        </div>
    )
}

export default Card;
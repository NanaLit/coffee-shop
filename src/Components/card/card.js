import './card.scss';
import Description from '../description/descr';

const  Card = ({text, middle, img, price, country, filters, id, getId}) => {
   let classes ="country";
   let size = "card";
    const onItemSelect = () => {
        return id;
    }
    if(filters) {
        classes += " country_veu"
        size += " card_big"
    }

    return (
        <div onClick={onItemSelect && getId} className={size} >
            <img src={require (`../App/${img}`)} alt="coffee" className="card__img" />
            <Description text={text} middle={middle}/>
            <p className={classes}>{country}</p>
            <p className="price">{price}$</p>
        </div>
    )
}

export default Card;
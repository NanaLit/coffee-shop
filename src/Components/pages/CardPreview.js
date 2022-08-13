import './about-card.scss';

import HeaderH2 from '../h2/h2';
import Divider from '../divider/divider';
import Description from '../description/descr';
import PromoCoffee from '../promo-coffee/promo-coffee';

function CardPreview (props) {
    const {data, id} = props;
    return(
        <>
            <PromoCoffee/>
            <section className="coffeecard">
                <div className="container">
                    <div className="coffeecard__wrapper">
                        <img src={require (`../App/${data[id-1].preview}`)} alt="cup-of-coffee" className="coffeecard__img" />
                        <div className="coffeecard__descr">
                            <HeaderH2 text={"About it"} weight={true}/>
                            <Divider color={true}/>
                            <img src={require (`../App/${data[id-1].preview}`)} alt="cup-of-coffee" className="coffeecard__unvisible"/>
                            <Description bold="Country: " text={data[id-1].country}/>
                            <Description 
                                text={data[id-1].description}/>
                            <Description 
                                bold="Price: " bigBold={`${data[id-1].price}$`}/>
                        </div>               
                    </div>
                </div>
            </section>
        </>
    )
    
}

export default CardPreview;
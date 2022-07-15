

import './about-card.scss';

import HeaderH2 from '../h2/h2';
import Divider from '../divider/divider';
import Description from '../description/descr';

function CardPreview ({data}) {
    
    return(
        <section className="coffeecard">
            <div className="container">
                <div className="coffeecard__wrapper">
                    <img src={require (`../App/${data[0].preview}`)} alt="cup-of-coffee" className="coffeecard__img" />
                    <div className="coffeecard__descr">
                        <HeaderH2 text={"About it"} weight={true}/>
                        <Divider color={true}/>
                        <img src={require (`../App/${data[0].preview}`)} alt="cup-of-coffee" className="coffeecard__unvisible"/>
                        <Description bold="Country: " text={data[0].country}/>
                        <Description 
                            text={data[0].description}/>
                        <Description 
                            bold="Price: " bigBold={`${data[0].price}$`}/>
                    </div>               
                </div>
            </div>
        </section>
    )
    
}

export default CardPreview;
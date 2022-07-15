import './our-coffee-card.scss';

import PromoCoffee from '../promo-coffee/promo-coffee';
import CardPreview from '../about-card/about-card';
import Footer from '../footer/footer';

function OurCoffeCard ({data}) {
    return (
        <div className="coffeecard">
            <PromoCoffee/>
            <CardPreview data={data}/>
            <Footer/>
        </div>
    )
}

export default OurCoffeCard;
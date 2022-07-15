import './our-coffee-card.scss';

import PromoCoffee from '../promo-coffee/promo-coffee';
import CardPreview from '../about-card/about-card';

function OurCoffeCard () {
    return (
        <div className="coffeecard">
            <PromoCoffee/>
            <CardPreview/>
        </div>
    )
}

export default OurCoffeCard;
import './promo-pleasure.scss';

import Header from '../header/header';
import HeaderH1 from '../h1/h1';

function PromoPleasure () {
    return (
        <section className="promo-pleasure" id="promo-pleasure">
            <Header/>
            <div className="container">
                <HeaderH1 text="For your pleasure"/>
            </div>
        </section>
    )
}

export default PromoPleasure;
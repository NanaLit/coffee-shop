import './promo-home.scss';
import Header from '../header/header';
import HeaderH1 from '../h1/h1';
import Divider from '../divider/divider';
import HeaderH2 from '../h2/h2';

import {Link} from 'react-router-dom'

function PromoHome () {
    return (
        <section className="promo" id="promo-home">
            <Header/>
            <div className="container">
                <HeaderH1 text="Everything You Love About Coffee"/>
                <Divider/>
                <HeaderH2 text= "We makes every day full of energy and taste Want to try our beans?"/>
                <button><Link to="/ourcoffee">More</Link></button>
            </div>
        </section>
    )
}

export default PromoHome;
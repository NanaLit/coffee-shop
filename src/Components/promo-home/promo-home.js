import './promo-home.scss';
import Header from '../header/header';
import HeaderH1 from '../h1/h1';
import Divider from '../divider/divider';

function PromoHome () {
    return (
        <section className="promo">
            <Header/>
            <div className="container">
                <HeaderH1 text="Everything You Love About Coffee"/>
                <Divider/>
                <h2 className="promo__subheader">
                    We makes every day full of energy and taste    
                </h2>
                <button className="btn">
                    +++
                </button>
            </div>
        </section>
    )
}

export default PromoHome;
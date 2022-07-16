import './promo-coffee.scss'
import Header from '../header/header';
import HeaderH1 from '../h1/h1';

function PromoCoffee () {
    return (
        <section className="promo_coffee" id="promo-coffee">
            <Header/>
            <HeaderH1 text={"Our Coffee"}/>
        </section>
    )
}

export default PromoCoffee;
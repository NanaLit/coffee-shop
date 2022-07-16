import './pleasure.scss'

import PromoPleasure from '../promo-pleasure/promo-pleasure';
import AboutPic from '../about-pic/about-pic';
import GoodsList from '../goods-list/goods-list';
import Footer from '../footer/footer';

function Pleasure ({data}) {
    return (
        <div className="pleasure">
            <PromoPleasure/>
            <AboutPic text="About our goods" 
            descr1="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
            descr2="Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face." />
            <GoodsList data={data}/>
            <Footer/>
        </div>
    )
}

export default Pleasure;
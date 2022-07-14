import './home-page.scss';

import PromoHome from '../promo-home/promo-home';
import AboutUs from '../about/about';
import OurBest from '../best/best';
import Footer from '../footer/footer';

function HomePage ({data}) {
    return (
        <div className="app">
            <PromoHome/>
            <AboutUs/>
            <OurBest data={data}/>
            <Footer/>
        </div>
    )
}

export default HomePage;
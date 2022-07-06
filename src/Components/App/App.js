import './App.scss'
import PromoHome from '../promo-home/promo-home';
import AboutUs from '../about/about';
import OurBest from '../best/best';

function App () {
    return (
        <div className="app">
            <PromoHome/>
            <AboutUs/>
            <OurBest/>
        </div>
    );
}

export default App;
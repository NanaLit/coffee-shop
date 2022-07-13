import './App.scss'
import PromoHome from '../promo-home/promo-home';
import AboutUs from '../about/about';
import OurBest from '../best/best';
import Footer from '../footer/footer';

function App ({data}) {

    return (
        <div className="app">
            <PromoHome/>
            <AboutUs/>
            <OurBest data={data}/>
            <Footer/>
        </div>
    )
    
}

export default App;
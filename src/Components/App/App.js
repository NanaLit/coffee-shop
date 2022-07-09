import './App.scss'
import PromoHome from '../promo-home/promo-home';
import AboutUs from '../about/about';
import OurBest from '../best/best';
import Footer from '../footer/footer';

function App () {
    
    const data = [
        {text: "Solimo Coffee Beans 2 kg", img: 'photo1.png', price: 10.73, id: 1},
        {text: "Presto Coffee Beans 1 kg", img: 'photo2.png', price: 15.99, id: 2},
        {text: "AROMISTICO Coffee 1 kg", img: 'photo3.jpg', price: 6.99, id: 3},
        {text: "Solimo Coffee Beans 2 kg", img: 'photo1.png', price: 10.73, id: 4},
        {text: "Presto Coffee Beans 1 kg", img: 'photo2.png', price: 15.99, id: 5},
        {text: "AROMISTICO Coffee 1 kg", img: 'photo3.jpg', price: 6.99, id: 6},
    ]

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
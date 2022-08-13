import PromoHome from '../promo-home/promo-home';
import AboutUs from '../about/about';
import OurBest from '../best/best';

function HomePage ({data, getId}) {
    return (
        <div className="homepage">
            <PromoHome/>
            <AboutUs/>
            <OurBest data={data}
                getId={getId}/>
        </div>
    )
}

export default HomePage;
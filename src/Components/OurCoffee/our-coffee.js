import './oue-coffee.scss';
import PromoCoffee from '../promo-coffee/promo-coffee';
import AboutPic from '../about-pic/about-pic';
import FilterGoods from '../filter-goods/filter-goods';
import Footer from '../footer/footer';

function OurCoffe ({data, filter}) {
    return (
        <div className="our">
            <PromoCoffee/>
            <AboutPic beans={true}/>
            <FilterGoods data={data} filter={filter}/>
            <Footer/>
        </div>
    )
}

export default OurCoffe;
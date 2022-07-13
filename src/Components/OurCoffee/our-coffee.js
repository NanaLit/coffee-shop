import './oue-coffee.scss';
import PromoCoffee from '../promo-coffee/promo-coffee';
import AboutPic from '../about-pic/about-pic';
import FilterGoods from '../filter-goods/filter-goods';

function OurCoffe ({data}) {
    return (
        <div className="our">
            <PromoCoffee/>
            <AboutPic beans={true}/>
            <FilterGoods data={data}/>
        </div>
    )
}

export default OurCoffe;
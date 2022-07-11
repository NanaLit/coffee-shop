import './oue-coffee.scss';
import PromoCoffee from '../promo-coffee/promo-coffee';
import AboutPic from '../about-pic/about-pic';

function OurCoffe () {
    return (
        <div className="our">
            <PromoCoffee/>
            <AboutPic beans={true}/>
        </div>
    )
}

export default OurCoffe;
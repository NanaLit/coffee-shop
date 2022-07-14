import { Component } from 'react';

import './oue-coffee.scss';
import PromoCoffee from '../promo-coffee/promo-coffee';
import AboutPic from '../about-pic/about-pic';
import FilterGoods from '../filter-goods/filter-goods';
import Footer from '../footer/footer';

class OurCoffe extends Component {

    render() {
        const{data, onUpdateSearch, filter, onFilterSelect} = this.props;
        return (
            <div className="our">
                <PromoCoffee/>
                <AboutPic beans={true}/>
                <FilterGoods 
                    data={data}
                    onUpdateSearch={onUpdateSearch}
                    filter={filter}
                    onFilterSelect={onFilterSelect}/>
                <Footer/>
            </div>
        )
    }
    
}

export default OurCoffe;
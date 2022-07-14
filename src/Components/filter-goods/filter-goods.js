import { Component } from 'react';

import './filter-goods.scss';

import SeachPanel from '../search-panel/search-panel';
import GoodsList from '../goods-list/goods-list';

class FilterGoods extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="filter">
                <div className="container">
                    <SeachPanel
                        onUpdateSearch={this.props.onUpdateSearch}/>
                    <GoodsList data={data}/>
                </div>
            </div>
        )
    }
    
}

export default FilterGoods;
import './filter-goods.scss';

import SeachPanel from '../search-panel/search-panel';
import GoodsList from '../goods-list/goods-list';

function FilterGoods ({data}) {
    return (
        <div className="filter">
            <div className="container">
                <SeachPanel/>
                <GoodsList data={data}/>
            </div>
        </div>
    )
}

export default FilterGoods;
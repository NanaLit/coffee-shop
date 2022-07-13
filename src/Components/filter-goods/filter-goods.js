import './filter-goods.scss';

import SeachPanel from '../search-panel/search-panel';
import GoodsList from '../goods-list/goods-list';

function FilterGoods ({data, filter}) {
    return (
        <div className="filter">
            <div className="container">
                <SeachPanel/>
                <GoodsList data={data} filter={filter}/>
            </div>
        </div>
    )
}

export default FilterGoods;
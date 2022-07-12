import './filter-goods.scss';

import SeachPanel from '../search-panel/search-panel';

function FilterGoods () {
    return (
        <div className="filter">
            <div className="container">
                <SeachPanel/>
            </div>
        </div>
    )
}

export default FilterGoods;
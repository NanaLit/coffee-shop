
import './filter-goods.scss';

import SeachPanel from '../search-panel/search-panel';
import GoodsList from '../goods-list/goods-list';

const FilterGoods = (props) =>{
    
    const {data, onUpdateSearch, filter,onFilterSelect} = props;
    return (
        <div className="filter">
            <div className="container">
                <SeachPanel
                    onUpdateSearch={onUpdateSearch}
                    filter={filter}
                    onFilterSelect={onFilterSelect}/>
                <GoodsList data={data}/>
            </div>
        </div>
    )
}

export default FilterGoods;
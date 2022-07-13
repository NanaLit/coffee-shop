import './goods-list.scss';

import Card from '../card/card';

function GoodsList ({data}) {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Card middle={true} key={id} {...itemProps}/>
        )
    });

    return (
        <div className="goods">
            {elements}
        </div>
    )
}

export default GoodsList;
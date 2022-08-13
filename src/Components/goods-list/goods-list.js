import './goods-list.scss';
import { Link } from 'react-router-dom';
import Card from '../card/card';

function GoodsList ({data, getId}) {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        let linkPath = `/ourcoffee/${id}`
        return (
            <Link to={linkPath} key={id}><Card middle={true} filters={true} getId={() => getId(id)} id={id} {...itemProps}/></Link>  
        )
    });

    return (
        <div className="goods">
            {elements}
        </div>
    )
}

export default GoodsList;
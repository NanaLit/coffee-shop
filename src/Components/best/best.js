
import './best.scss';
import {Link} from 'react-router-dom';
import HeaderH2 from '../h2/h2';
import Card from '../card/card';

const OurBest = ({data, getId}) => {

    const dataBest = data.filter(item => item.best);
    const elements = dataBest.map(item => {
        const {id, ...itemProps} = item;
        const onItemSelect = () => {
            return id;
        }
        let linkPath=`/ourcoffee/${id}`
        return (
            <Link 
                to={linkPath} 
                key={id} >
                <Card onClick={onItemSelect} 
                getId={() => getId(id)}
                middle={true}
                {...itemProps}/>
            </Link>
        )
    });
    
    
    return (
        <section className="best">
            <div className="container">
                <HeaderH2 text={"Our best"} weight={true}/>
                <ul className="best__list" >
                    {elements}
                </ul>
            </div>
            
        </section> 
    )
    
}

export default OurBest;
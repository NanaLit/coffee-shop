import './best.scss';
import HeaderH2 from '../h2/h2';
import Card from '../card/card';

const OurBest = ({data}) => {

    const dataBest = data.filter(item => item.best);

    const elements = dataBest.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Card middle={true} key={id} {...itemProps}/>
        )
    });
    
    
    return (
        <section className="best">
            <div className="container">
                <HeaderH2 text={"Our best"} weight={true}/>
                <ul className="best__list">
                    {elements}
                </ul>
            </div>
            
        </section> 
    )
    
}

export default OurBest;
import './best.scss';
import HeaderH2 from '../h2/h2';
import Card from '../card/card';

function OurBest () {
    return (
        <section className="best">
            <div className="container">
                <HeaderH2 text={"Our best"} weight={true}/>
                <Card/>
            </div>
        </section>
    )
}

export default OurBest;
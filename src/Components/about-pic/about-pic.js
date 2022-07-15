import './about-pic.scss';
import HeaderH2 from '../h2/h2';
import Description from '../description/descr';
import Divider from '../divider/divider';
import SmallDivider from '../small_div/small-div';
import goods from './goods.jpg';
import bea from './beans.jpg';

function AboutPic ({beans}) {
    let img = bea;

    beans ? (img = bea) : (img = goods);
    
    return (
        <section className="picture">
            <div className="container">
                <div className="picture__wrapper">
                    <img src={img} alt="cup-of-coffee" className="picture__img" />
                    <div className="pucture__descr">
                        <HeaderH2 text={"About our beans"} weight={true}/>
                        <Divider color={true}/>
                        <Description 
                            text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
                            middle={true}/>
                        <Description 
                            text="Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. 
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face."
                            middle={true}/>
                    </div>               
                </div>
                <SmallDivider/>
            </div>
        </section>
    )
}

export default AboutPic;
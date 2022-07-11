import './about.scss';
import HeaderH2 from '../h2/h2';
import Divider from '../divider/divider';
import Description from '../description/descr';

function AboutUs () {
    return (
        <section className="about">
            <div className="container">
                <HeaderH2 
                    text={"About Us"} 
                    weight={400}/>
                <Divider 
                    color={true}/>
                <div className="text">
                <article>
                    <Description 
                        text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face." 
                        middle = {true}/>
                    <Description 
                        text="Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now."
                        middle = {true}/>
                    </div>
                </article>
                
            </div>
        </section>
    )
}

export default AboutUs;
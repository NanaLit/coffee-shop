import './about-pic.scss';
import HeaderH2 from '../h2/h2';
import Description from '../description/descr';
import Divider from '../divider/divider';
import SmallDivider from '../small_div/small-div';
import goods from './goods.jpg';
import bea from './beans.jpg';

function AboutPic ({beans, text, descr1, descr2}) {
    let img = bea;

    beans ? (img = bea) : (img = goods);
    
    return (
        <section className="picture">
            <div className="container">
                <div className="picture__wrapper">
                    <img src={img} alt="cup-of-coffee" className="picture__img" />
                    <div className="picture__descr">
                        <HeaderH2 text={text} weight={true}/>
                        <Divider color={true}/>
                        <img src={img} alt="cup-of-coffee" className="picture__unvisible" />
                        <Description 
                            text={descr1}
                            middle={true}/>
                        <Description 
                            text={descr2}
                            middle={true}/>
                    </div>               
                </div>
                <SmallDivider/>
            </div>
        </section>
    )
}

export default AboutPic;
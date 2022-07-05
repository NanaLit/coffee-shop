import './divider.scss';
import coffee_w from './coffee_w.svg';
import coffee_b from './coffee_b.svg';

function Divider ({color}) {

    let img = coffee_w;
    let clazz = 'divider__band';
    color ? ((img = coffee_b)&& (clazz = "divider__band divider__band_black")) : (img = coffee_w);
    
    return (
        <div className="divider">
            <div className={clazz}></div>
            <img src={img} alt="logo_coffee" className="divider__logo"/>
            <div className={clazz}></div>
        </div>
    )
}

export default Divider;
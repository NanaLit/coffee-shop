import PromoCoffee from '../promo-coffee/promo-coffee';
import AboutPic from '../about-pic/about-pic';
import FilterGoods from '../filter-goods/filter-goods';

const OurCoffe = (props) => {

    const{data, onUpdateSearch, filter, onFilterSelect, onSelectItem, getId} = props;
    return (
        <div className="our">
            <PromoCoffee/>
            <AboutPic beans={true} text="About our beans" descr1="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible." 
            descr2="Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face."/>
            <FilterGoods 
                onSelectItem={onSelectItem}
                data={data}
                onUpdateSearch={onUpdateSearch}
                filter={filter}
                onFilterSelect={onFilterSelect}
                getId={getId}/>
        </div>
    )
}

export default OurCoffe;
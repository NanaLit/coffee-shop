import './search-panel.scss';
import Button from '../button/button';

function SeachPanel () {
    return (
        <div className="searchpanel">
            <div className="searchpanel__wrapper">
                <div className="searchpanel__text">
                    Lookiing for
                </div>
                <input type="text" className="searchpanel__input" placeholder="start typing here..."/>
            </div>
            <div className="searchpanel__wrapper">
                <div className="searchpanel__text">
                    Or filter
                </div>
                <div className="searchpanel__group">
                    <Button text="Brazil" color={true} left={true}/>
                    <Button text="Kenya" color={true}/>
                    <Button text="Columbia" color={true} right={true}/>
                </div>
            </div>
        </div>
    )
}

export default SeachPanel;
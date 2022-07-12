import './search-panel.scss';
import Button from '../button/button';

function SeachPanel () {

    const buttonsData = [
        {text: "Brasil", color: true, left: true, right: false},
        {text: "Kenya", color: true, left: false, right: false},
        {text: "Columbia", color: true, left: false, right: true},
    ];

    const buttons = buttonsData.map(item => {
        return (
            <Button {...item}/>
        )
    });

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
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default SeachPanel;
import { Component } from 'react';

import './search-panel.scss';
import Button from '../button/button';

class SeachPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdate =(e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render () {
        const {filter, onFilterSelect} = this.props;

        const buttonsData = [
            {text: "Brasil", color: true, left: true, right: false, id: 1},
            {text: "Keniya", color: true, left: false, right: false, id: 2},
            {text: "Columbia", color: true, left: false, right: true, id: 3},
        ];
    
        const buttons = buttonsData.map((item, i) => {
            return (
                <div key={i}>
                    <Button filter={filter} {...item} onFilterSelect={onFilterSelect}/>
                </div>
            )
        });
        return (
            <div className="searchpanel">
                <div className="searchpanel__wrapper">
                    <div className="searchpanel__text">
                        Lookiing for
                    </div>
                    <input 
                        type="text" 
                        className="searchpanel__input" placeholder="start typing here..."
                        value={this.setState.term}
                        onChange={this.onUpdate}/>
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

}

export default SeachPanel;
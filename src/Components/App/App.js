import { Component } from 'react';

import './App.scss'

import HomePage from '../Homepage/home-page';
import OurCoffe from '../OurCoffee/our-coffee';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {text: "Solimo Coffee Beans 2 kg", img: 'photo1.png', price: 10.73, id: 1, best: false, country: "Brasil"},
                {text: "Presto Coffee Beans 1 kg", img: 'photo2.png', price: 15.99, id: 2, best: true, country: "Keniya"},
                {text: "AROMISTICO Coffee 1 kg", img: 'photo3.jpg', price: 6.99, id: 3, best: true, country: "Columbia"},
                {text: "Solimo Coffee Beans 2 kg", img: 'photo1.png', price: 10.73, id: 4, best: false, country: "Brasil"},
                {text: "Presto Coffee Beans 1 kg", img: 'photo2.png', price: 15.99, id: 5, best: true, country: "Keniya"},
                {text: "AROMISTICO Coffee 1 kg", img: 'photo3.jpg', price: 6.99, id: 6, best: false, country: "Columbia"},
            ],
            term: '',
            filter: 'all'
        }
    }

    searchGoods = (items, term) => {
        if (term.lenght === 0) {
            return items
        }

        return items.filter(item => {
            return item.text.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render () {
        const {data, term} = this.state
        const visibleData = this.searchGoods(data, term)
        return (
            <div className="app">
                <HomePage data={data}/>
                <OurCoffe 
                    data={visibleData}
                    onUpdateSearch={this.onUpdateSearch}/>
            </div>
        )
    }
    
}

export default App;
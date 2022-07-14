import { Component } from 'react';

import './App.scss'

import HomePage from '../Homepage/home-page';
import OurCoffe from '../OurCoffee/our-coffee';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {text: "Colimo Coffee Beans 2 kg", img: 'photo1.png', price: 10.73, id: 1, best: false, country: "Brasil"},
                {text: "Presto Coffee Beans 1 kg", img: 'photo2.png', price: 15.99, id: 2, best: true, country: "Keniya"},
                {text: "AROMISTICO Coffee 1 kg", img: 'photo3.jpg', price: 6.99, id: 3, best: true, country: "Columbia"},
                {text: "Solimo Coffee Beans 2 kg", img: 'photo1.png', price: 10.73, id: 4, best: false, country: "Brasil"},
                {text: "Presto Coffee Beans 1 kg", img: 'photo2.png', price: 15.99, id: 5, best: true, country: "Keniya"},
                {text: "AROMISTICO Coffee 1 kg", img: 'photo3.jpg', price: 6.99, id: 6, best: false, country: "Columbia"},
            ],
            term: '',
            filter: ''
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

    filterGoods = (items, filter) => {
        switch (filter) {
            case 'Brasil':
                return items.filter(item => item.country === "Brasil");
            case 'Keniya':
                return items.filter(item => item.country === "Keniya");
            case 'Columbia':
                return items.filter(item => item.country === "Columbia")
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render () {
        const {data, term, filter} = this.state
        const visibleData = this.filterGoods(this.searchGoods(data, term), filter)
        return (
            <div className="app">
                <HomePage data={data}/>
                <OurCoffe 
                    data={visibleData}
                    onUpdateSearch={this.onUpdateSearch}
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
            </div>
        )
    }
    
}

export default App;
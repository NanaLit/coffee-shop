import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Page404, HomePage, OurCoffe, Pleasure, CardPreview} from '../pages';
import Footer from '../footer/footer';


function App () {

    const data = [
        {text: "Colimo Coffee Beans 2 kg", img: 'photo1.png', price: 10.73, id: 1, best: false, country: "Brasil", preview: 'preview.jpg', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {text: "Presto Coffee Beans 1 kg", img: 'photo2.png', price: 15.99, id: 2, best: true, country: "Keniya", preview: 'preview.jpg', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {text: "AROMISTICO Coffee 1 kg", img: 'photo3.jpg', price: 6.99, id: 3, best: true, country: "Columbia", preview: 'preview.jpg', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {text: "Solimo Coffee Beans 2 kg", img: 'photo1.png', price: 10.73, id: 4, best: false, country: "Brasil", preview: 'preview.jpg', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {text: "Presto Coffee Beans 1 kg", img: 'photo2.png', price: 15.99, id: 5, best: true, country: "Keniya", preview: 'preview.jpg', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {text: "AROMISTICO Coffee 1 kg", img: 'photo3.jpg', price: 6.99, id: 6, best: false, country: "Columbia", preview: 'preview.jpg', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    ];

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('');

    const searchGoods = (items, term) => {
        if (term.lenght === 0) {
            return items
        }

        return items.filter(item => {
            return item.text.indexOf(term) > -1
        })
    }

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const filterGoods = (items, filter) => {
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

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    const visibleData = filterGoods(searchGoods(data, term), filter)
    const [coffeeId, setCoffeeId] = useState(null)
    const getId = (id) => {
        setCoffeeId(id)
    }

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage data={data} getId={getId}/>}/>
                    <Route 
                        path="/ourcoffee" 
                        element={<OurCoffe 
                                    data={visibleData}
                                    onUpdateSearch={onUpdateSearch}
                                    filter={filter}
                                    onFilterSelect={onFilterSelect}
                                    getId={getId}
                                    />}/>
                    <Route path="/pleasure" element={<Pleasure data={data}/>}/>
                    <Route path="/ourcoffee/:coffeeId" element={<CardPreview data={data} id={coffeeId}/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
    
    
}

export default App;
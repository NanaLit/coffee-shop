import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'normalize.css';
import App from './Components/App/App';
import OurCoffee from './Components/OurCoffee/our-coffee';

const root = ReactDOM.createRoot(document.getElementById('root'));

const data = [
    {text: "Solimo Coffee Beans 2 kg", img: 'photo1.png', price: 10.73, id: 1, best: false},
    {text: "Presto Coffee Beans 1 kg", img: 'photo2.png', price: 15.99, id: 2, best: true},
    {text: "AROMISTICO Coffee 1 kg", img: 'photo3.jpg', price: 6.99, id: 3, best: true},
    {text: "Solimo Coffee Beans 2 kg", img: 'photo1.png', price: 10.73, id: 4, best: false},
    {text: "Presto Coffee Beans 1 kg", img: 'photo2.png', price: 15.99, id: 5, best: true},
    {text: "AROMISTICO Coffee 1 kg", img: 'photo3.jpg', price: 6.99, id: 6, best: false},
];
root.render(
    <React.StrictMode>
        <App data={data}/>
        <OurCoffee data={data}/>
    </React.StrictMode>
);
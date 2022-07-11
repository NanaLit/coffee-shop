import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'normalize.css';
import App from './Components/App/App';
import OurCoffee from './Components/OurCoffee/our-coffee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <OurCoffee/>
    </React.StrictMode>
);
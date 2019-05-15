import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        title   :'Home',
    },
    {
        title   :'Service',
    },
    {
        title   :'Feature',
    },
    {
        title   :'Price',
    },
    {
        title   :'Team',
    },
    {
        title   : 'FAQ'
    },
    {
        title   : "Blog"
    },
    {
        title   : "Contact"
    }
];

ReactDOM.render(<App items={items} />, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

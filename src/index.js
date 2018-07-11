import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './Store/ConfigureStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = ConfigureStore(); // You can also pass in an initialState here

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './Store/ConfigureStore';
import App from './Containers/App.container';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = ConfigureStore(); // You can also pass in an initialState here

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

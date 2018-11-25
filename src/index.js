import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './redux/store/store';
import './index.css';


ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}> 
    <App/>
    </ConnectedRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

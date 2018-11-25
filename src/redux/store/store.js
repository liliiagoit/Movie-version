import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory()

const store = createStore(
    connectRouter(history)(rootReducer), 
    composeEnhancers(applyMiddleware(thunk)));


export default store;



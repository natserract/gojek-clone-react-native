
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import RootReducers from '../reducers/Index'

/* Middleware */
const NavMiddleware = createReactNavigationReduxMiddleware(
    state => state.nav,
);

const composeEnhancers = composeWithDevTools({
    realtime: true,
    name: 'Ios App',
    hostname: 'localhost',
    port: 8000,
    suppressConnectErrors: false
})

const store = createStore(
    RootReducers,
    composeWithDevTools(applyMiddleware(NavMiddleware)),
);

export default store;
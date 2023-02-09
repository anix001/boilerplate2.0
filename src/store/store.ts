import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './reducers';

const middlewares = [thunk];

const store = createStore(rootReducers, applyMiddleware(...middlewares));
export type AppDispatch = typeof store.dispatch
export default store;
import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import filterReducer from './reducers/filterReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    user: authReducer,
    filter: filterReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

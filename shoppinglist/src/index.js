import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import articlesReducer from './components/Reducer';


const store = createStore(combineReducers({articles: articlesReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// devtools console
window.store = store;




ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root')
);








/*
const articlesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ARTICLE':
            action.payload.id = Date.now();
            let newState = [...state, action.payload];
            return newState;
        case 'EDIT_ARTICLE':
            console.log('edit');
            //const articleId = action.payload.id;
            return state.map( article => {
                if (article.id !== action.payload.id) {
                    return article;
                } 
                return action.payload;      
            })    
            case 'DELETE_ARTICLE':
            console.log('delete article');
               newState = state.filter( (article) => 
                  article.id !== action.payload.id
              );
                  return newState;

        default:
                return state;
    }
};
*/



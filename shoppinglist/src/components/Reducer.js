import { createStore, combineReducers } from 'redux';
import * as constants from './Constants';


const articlesReducer = (state = [], action) => {
    switch(action.type) {
        case constants.ADD_ARTICLE:
            action.payload.id = Date.now();
            let newState = [...state, action.payload];
            return newState;

        case constants.EDIT_ARTICLE:
            console.log('edit');
            return state.map( article => {
                if (article.id !== action.payload.id) {
                    return article;
                } 
                return action.payload;      
            }) 

            case constants.DELETE_ARTICLE:
            console.log('delete article');
               newState = state.filter( (article) => 
                  article.id !== action.payload.id
              );
                  return newState;

        default:
                return state;
    }
};










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


export default articlesReducer;
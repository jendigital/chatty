import React from 'react';
import Form from './Form';
import ItemList from './ItemList';
import { connect } from 'react-redux';
import * as constants from './Constants';



class App extends React.Component {

state= {
    articles: []
}

    render() {
        return (
            <div>
            <Form formTitle="Ajouter un article" addArticle={this.props.addArticle}/>
            <ItemList articles={this.props.articles} editArticle={this.props.editArticle} deleteArticle={this.props.deleteArticle}/>
            </div>
        );
    }
}

                               ////////////////      ACTION CREATOR                    ////////////// 

const addArticleActionCreator = (article) => {
    return {
        type: constants.ADD_ARTICLE,
        payload: article
    }
}
const editArticleactionCreator = (article) => {
    return {
        type: constants.EDIT_ARTICLE,
        payload: article
    }
}
const deleteArticleCreator = (article) => {
    return {
        type: constants.DELETE_ARTICLE,
        payload: article
    }
}

  ///////           //////////

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
            addArticle: (article) => {
                dispatch(addArticleActionCreator(article));
                //dispatch({ type: 'ADD_ARTICLE', payload: article })
            },
            editArticle: (article) => {
                dispatch(editArticleactionCreator(article));
            },
            deleteArticle: (article) => {
                dispatch(deleteArticleCreator(article));
            }

    }
}

// export default App;

export default connect(mapStateToProps, mapDispatchToProps)(App);
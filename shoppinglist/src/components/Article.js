import React from 'react';
import '../style.css';


class Article extends React.Component {
 
    state = {
        isInEditMode: false
    }

    toggleEditMode = () => {
        this.setState({ isInEditMode: !this.state.isInEditMode});
    }

    handleQuantityEdit = (event, article) => {
            article.quantity = event.target.value;
            this.props.editArticle(article);
    }

    handleNameEdit = (event, article) => {
        article.name = event.target.value;
        this.props.editArticle(article);
    }

    removeArticle = (article) => {
        this.props.deleteArticle(article);
    }


    render() {
        return(
     <div>
     <button className="btn btn-warning btn-xs edit" onClick={ () => {this.toggleEditMode() } }>Modifier</button>
     <button className="btn btn-danger btn-xs suppr" onClick= { () => { this.removeArticle(this.props.data) }}>Supprimer</button>      
             {
                 this.state.isInEditMode === true ? 
                 <span>
                 <input type="number" value={this.props.data.quantity} 
                 onChange={(event) => this.handleQuantityEdit(event, this.props.data) }/>
                 <input type="text" value={this.props.data.name} 
                 onChange={ (event) => this.handleNameEdit(event, this.props.data) }/>
                 </span>
                 :
                 <span> {this.props.data.quantity} {this.props.data.name}</span>
             }
    </div>
        )
    }
}


export default Article;

import React from 'react';
import Article from './Article';


const ItemList = (props) => {

    return (
        <div>
        <h4>Votre liste de courses</h4>
        <div>
        {
            props.articles.map(article => <Article data={article} key={article.id} 
                 editArticle={props.editArticle}  deleteArticle={props.deleteArticle}/>)
        }
        </div>
    </div>
    )
}


export default ItemList;


import React,{Component} from 'react';
import './PostEditor.css';


class PostEditor extends Component {
constructor(props) {
    super(props)

     this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
     this.createPost = this.createPost.bind(this);

this.state = {
    newPostBody: ''
}
}


handlePostEditorInputChange (e) {
     this.setState({
       newPostBody: e.target.value
       
     })
}

createPost() {
this.props.addPost(this.state.newPostBody);
this.setState({newPostBody: ''});

}

    render() {
        return (
            <div className="panel panel-default post-editor">
              <div className="panel-body">
              <textarea className="form-control post-editor-input" onChange={ this.handlePostEditorInputChange }
              value={ this.state.newPostBody } />

              <button className="btn btn-success post-editor-button"
              onClick={ this.createPost } >Post</button>

              </div>
             </div>
        )
    }
}

export default PostEditor;
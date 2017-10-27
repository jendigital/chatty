import React, { Component } from 'react';
import Post from '../../Post/components/Post';
import PostEditor from '../../PostEditor/components/PostEditor';
import './Display.css';

class Display extends Component {

    constructor(props) {
  super(props)
   this.databaseRef = this.props.database.ref().child('post');
  this.addPost = this.addPost.bind(this);
  this.updateLocalstate = this.updateLocalstate.bind(this);
  //this.databaseRef = this.props.database.ref().child('post');

  this.state = {
    posts: []
  }
}

  componentWillMount() {

  const {updateLocalstate} = this;
  this.databaseRef.on('child_added', snapshot => {
    const response = snapshot.val();
    updateLocalstate(response);
      })
    }

    addPost(postBody) {
        /*const newState = Object.assign({}, this.state);
             newState.posts.push(newPostBody);
        this.setState(newState); */

        const postToSave = {postBody};
        this.databaseRef.push().set(postToSave);
        }
    
    updateLocalstate(response) {
      const posts = this.state.posts;
      const brokenDownPost = response.postBody.split(/[\r\n]/g);
      posts.push(brokenDownPost);
      this.setState({posts: posts});
    }    

    render() {


    return (
          <div>
        {
          this.state.posts.map( (postBody, idx ) => {
            return (
              <Post key={idx} postBody={postBody} />
            )
          })
        }
         <PostEditor addPost={ this.addPost }  />
        </div>

    )
}
}


export default Display;



















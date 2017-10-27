import React, { Component } from 'react';
import Display from './Display/components/Display';
import Header from './Header/components/Header';
import firebase from 'firebase/app';
import 'firebase/database';
import config from './firebase';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    // firebase.initializeApp(config)
  this.app = firebase.initializeApp(config);
  this.database = this.app.database();
    }
  


  render() {
    return (
      <div className="">
        <Header />
      
         <Display database={this.database} />
         
      </div>
    );
  }
}




export default App;


/*


    
*/
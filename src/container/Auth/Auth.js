import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

import classes from "./Auth.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Button from '../../components/UI/Button/Button';

firebase.initializeApp({
  apiKey: "AIzaSyA3qQO4pnH-7lP-SuIa1NrLulFdcyKHdN8",
  authDomain: "github-reposearcher.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      localStorage.setItem('userId', user.providerData[0].uid)
      this.props.onUpdateTable();
    })
  }

  render() {
    return (
      <div className={classes.Auth}>
        {this.state.isSignedIn ? (
          <span>
            <div>Welcome {firebase.auth().currentUser.displayName}</div>
            <img
              alt={firebase.auth().currentUser.displayName}
              src={firebase.auth().currentUser.photoURL}
            />
            <Button onClick={() => {
              localStorage.removeItem('userId');
              this.props.onUpdateTable();
              return(
                firebase.auth().signOut()
              );
            }}>Sign out</Button>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
      onUpdateTable : (event)=> dispatch({type: actionTypes.UPDATA_TABLE_COMP, event: event}),
  };
};

export default connect(null, mapDispatchToProps)(App);
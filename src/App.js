import React, { Component } from 'react';

import classes from './App.css';
import Header from './components/Header/Header';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header/>
        <Layout>
          hello
        </Layout>
      </div>
    );
  }
}

export default App;

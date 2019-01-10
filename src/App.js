import React, { Component } from 'react';

import Wrap from './hoc/Wrap/Wrap';
import Header from './components/Header/Header';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Wrap>
        <Header/>
        <Layout>
          hello
        </Layout>
      </Wrap>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Wrap from './hoc/Wrap/Wrap';
import Header from './components/Header/Header';
import Layout from './hoc/Layout/Layout';
import Input from './components/UI/Input/Input';

class App extends Component {
  render() {
    return (
      <Wrap>
        <Header/>
        <Layout>
          <h1>Search GitHub repositories</h1>
          <Input/>
        </Layout>
      </Wrap>
    );
  }
}

export default App;

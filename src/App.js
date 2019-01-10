import React, { Component } from 'react';

import Wrap from './hoc/Wrap/Wrap';
import Loader from './components/UI/Loader/Loader';
import Header from './components/Header/Header';
import Layout from './hoc/Layout/Layout';
import Input from './components/UI/Input/Input';
import Table from './container/Table/Table';

class App extends Component {
  render() {
    return (
      <Wrap>
        <Header/>
        <Layout>
          <Input
            id="c1"
            labelText="Search GitHub repositories"
            type="text"
            value={this.props.value}
            onChange={this.props.onChangeSearchHandler}
            placeholder="Search..."
          />
          <Table/>
          <Loader/>
        </Layout>
      </Wrap>
    );
  }
}

export default App;

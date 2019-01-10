import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions/actionTypes';

import Wrap from './hoc/Wrap/Wrap';
import Header from './components/Header/Header';
import Layout from './hoc/Layout/Layout';
import Input from './components/UI/Input/Input';
import Table from './container/Table/Table';

class App extends Component {
  render() {

    console.log(this.props.value)
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
        </Layout>
      </Wrap>
    );
  }
}

const mapStateToProps = state =>{
  return {
    value: state.tableData.searchedWord
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onChangeSearchHandler:  (event)=> dispatch({type: actions.SET_SEARCHED_WORD, event: event})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

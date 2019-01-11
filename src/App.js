import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './store/actions/actionTypes';
import * as action from './store/actions/index';

import Wrap from './hoc/Wrap/Wrap';
import Header from './components/Header/Header';
import Layout from './hoc/Layout/Layout';
import Input from './components/UI/Input/Input';
import Table from './container/Table/Table';

class App extends Component {

  searchHandler = (event)=>{
    this.props.onInitTableData(this.props.value);
    this.props.onChangeSearchHandler(event)
  }
  
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
            onChange={this.searchHandler}
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
    onChangeSearchHandler:  (event)=> dispatch({type: actionTypes.SET_SEARCHED_WORD, event: event}),
    onInitTableData: (searchedWord)=> dispatch(action.initTableData(searchedWord))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

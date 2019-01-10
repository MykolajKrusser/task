import React, { Component } from 'react';
import classes from './Table.css'

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from 'axios';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Table extends Component {

    componentDidMount(){
        this.props.onInitTableData();
    }

    render() {
        console.log(this.props.tableData)
        return (
            <table className={classes.Table}> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Repo Title</th>
                        <th>Owner</th>
                        <th>Stars</th>
                        <th>Created at</th>
                    </tr>
                </thead>  
                <tbody>
                    <tr>
                    <td>1111</td>
                    <td>$100</td>
                    <td>1111</td>
                    <td>$100</td>
                    <td>$100</td>
                    </tr>
                    <tr>
                        <td>11111</td>
                        <td>$80</td>
                        <td>1111</td>
                        <td>$100</td>
                        <td>$100</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state =>{
    return {
        tableData: state.tableData.tableData,
        loader: state.tableData.loader
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onInitTableData: ()=> dispatch(actions.initTableData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Table, axios));
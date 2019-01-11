import React, { Component } from 'react';
import classes from './Table.css'

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';
import axios from 'axios';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Loader from '../../components/UI/Loader/Loader';

import ReactTable from "react-table";
import "./react-table.css";

class Table extends Component {

    componentDidMount(){
        this.props.onInitTableData();
    }


    render() {
        console.log(this.props.tableData)

        let table;
        if(this.props.loader){
            table = <Loader/>
        }else{
            return <ReactTable
                        data={this.props.tableData}
                        columns={[
                            {
                            Header: "ID",
                            columns: [
                                {
                                accessor: "id"
                                },
                            ]
                            },
                            {
                            Header: "Repo Title",
                            columns: [
                                {
                                accessor: "name"
                                }
                            ]
                            },
                            {
                            Header: 'Owner',
                            columns: [
                                {
                                accessor: "owner.login"
                                }
                            ]
                            },
                            {
                                Header: 'Stars',
                                columns: [
                                    {
                                    accessor: "stargazers_count"
                                    }
                                ]
                            },
                            {
                                Header: 'Created at',
                                columns: [
                                    {
                                    accessor: "created_at"
                                    }
                                ]
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                        />
        }
        
        return (
           <div className={classes.TableWr}>
               {table}
           </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        tableData: state.tableData.tableData,
        loader: state.tableData.loader,
        searchedWord: state.tableData.searchedWord,
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onInitTableData: (searchedWord)=> dispatch(actions.initTableData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Table, axios));
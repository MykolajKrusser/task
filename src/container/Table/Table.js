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
        if(JSON.parse(localStorage.getItem("data"))){
            this.props.onSetLocalTableData(JSON.parse(localStorage.getItem("data")))
        }else{
            this.props.onInitTableData();
        }
    }


    render() {
        console.log(JSON.parse(localStorage.getItem("data")))

        let table;
        if(this.props.loader){
            table = <Loader/>
        }else{
            return <ReactTable
                        data={this.props.tableData}
                        columns={[
                            {
                                columns: [
                                    {
                                        Header: "ID",
                                        accessor: "id"
                                    },
                            ]
                            },
                            {
                                columns: [
                                    {
                                        Header: "Repo Title",
                                        accessor: "name"
                                    }
                            ]
                            },
                            {
                                columns: [
                                    {
                                        Header: 'Owner',
                                        accessor: "owner.login"
                                    }
                            ]
                            },
                            {
                                columns: [
                                    {
                                        Header: 'Stars',
                                        accessor: "stargazers_count"
                                    }
                                ]
                            },
                            {
                                columns: [
                                    {
                                        Header: 'Created at',
                                        accessor: "created_at"
                                    }
                                ]
                            }
                        ]}
                        defaultPageSize={5}
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
        localTableData: state.tableData.localTableData
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onInitTableData: (searchedWord)=> dispatch(actions.initTableData()),
        onSetLocalTableData: (data)=> dispatch({type: actionTypes.SET_LOCAL_TABLEDATA, data: data})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Table, axios));
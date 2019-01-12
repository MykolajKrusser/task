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
    componentWillUpdate(nextProps, nextState){
        return nextProps.updataComp
    }

    componentDidMount(){
        if(JSON.parse(localStorage.getItem("data"))){
            this.props.onSetLocalTableData(JSON.parse(localStorage.getItem("data")))
        }else{
            this.props.onInitTableData();
        }
    }


    render() {
        console.log(this.props.updataComp)

        let table;
        if(this.props.loader){
            table = <Loader/>
        }else{
            return <ReactTable
                        data={this.props.tableData}
                        getTrProps={(state, rowInfo, column) => {
                            
                            const getNestedObject = (nestedObj, pathArr) => {
                            return pathArr.reduce((obj, key) =>
                                (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
                            }
                            const id = Number(getNestedObject(rowInfo, ['original', 'owner', 'id']))

                            console.log(id)
                            return {
                                style: {
                                    background: id === Number(localStorage.getItem('userId')) ? "rgba(95, 213, 245, 0.5)" : null
                                }
                            };
                          }}
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
        localTableData: state.tableData.localTableData,
        updataComp: state.tableData.updataComp
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onInitTableData: (searchedWord)=> dispatch(actions.initTableData()),
        onSetLocalTableData: (data)=> dispatch({type: actionTypes.SET_LOCAL_TABLEDATA, data: data})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Table, axios));
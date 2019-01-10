import React, { Component } from 'react';
import classes from './Table.css'

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from 'axios';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Loader from '../../components/UI/Loader/Loader';

class Table extends Component {

    componentDidMount(){
        this.props.onInitTableData();
    }

    render() {
        console.log(this.props.tableData)
        console.log(this.props.loader)
       
        let table;
        if(this.props.loader){
            table = <Loader/>
        }else{
            table = this.props.tableData.map( item => {
                return <div key={item.id}>{item.id}</div>
            })
        }

        
        
        return (
           <div>
               {table}
           </div>
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
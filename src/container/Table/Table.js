import React, { Component } from 'react';
import classes from './Table.css'

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from 'axios';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Loader from '../../components/UI/Loader/Loader';
import Button from '../../components/UI/Button/Button';

class Table extends Component {

    state={
        showRows: 5
    }

    componentDidMount(){
        this.props.onInitTableData();
    }

    onChangeRows = (event)=>{
        const rowsNumber = Number(event.target.value)
        this.setState({showRows: rowsNumber})
    }

    render() {
        
        console.log(this.props.tableData)
        console.log(this.props.loader)

        let table;
        if(this.props.loader){
            table = <Loader/>
        }else{
            let tr = this.props.tableData.slice(0, this.state.showRows).map( repo => {
                return <tr key={repo.id}>
                            <td>{repo.id}</td>
                            <td>{repo.name}</td>
                            <td>{repo.owner.login}</td>
                            <td>{repo.stargazers_count}</td>
                            <td>{repo.created_at}</td>
                        </tr>})
            table = <table className={classes.Table}> 
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
                            {tr}
                        </tbody>
                    </table>
        }
        
        return (
           <div>
               <div className={classes.TableButtons}>
                    <Button onClick={this.onChangeRows} value="5">5</Button>
                    <Button onClick={this.onChangeRows} value="10">10</Button>
                    <Button onClick={this.onChangeRows} value="15">15</Button>
                    <Button onClick={this.onChangeRows} value="20">20</Button>
                    <Button onClick={this.onChangeRows} value="30">30</Button>
               </div>
               {table}
           </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        tableData: state.tableData.tableData,
        loader: state.tableData.loader,
        searchedWord: state.tableData.searchedWord

    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onInitTableData: (searchedWord)=> dispatch(actions.initTableData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Table, axios));
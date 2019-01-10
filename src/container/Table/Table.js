import React, { Component } from 'react';
import classes from './Table.css'


class Table extends Component {
  render() {
    return (
        <table className={classes.Table}> 
            <tr>
                <th>ID</th>
                <th>Repo Title</th>
                <th>Owner</th>
                <th>Stars</th>
                <th>Created at</th>
            </tr>
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
        </table>
    );
  }
}

export default Table;
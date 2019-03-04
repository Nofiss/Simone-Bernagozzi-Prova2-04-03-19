import React, { Component } from 'react';

const today = new Date()
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
const data = mm + '/' + dd + '/' + yyyy;

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div>Simone</div>
                <div>Prova 1 - landing page - <span>{data}</span></div>
            </div>
        );
    }
} 

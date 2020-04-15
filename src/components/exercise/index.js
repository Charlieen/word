import React, { Component } from 'react'

export default class Exercise1 extends Component {

    constructor(){
        super();
        this.handleClick2 = this.handleClick1.bind(this);
    }
    handleClick1(){
        console.log('button 1 clicked');
    }
    handleClick3= ()=> {
        console.log('button 3 clicked');
    }

    render() {
        console.log('---1---');
        return (
            <div>
                <button onClick={this.handleClick1}>click 1</button>
                <button onClick={this.handleClick1}>click 2</button>
                <button onClick={this.handleClick2}>click 3</button>
                <button onClick={this.handleClick3}>click 4</button>
            </div>
        )
    }
}

import React from 'react';

/*
  Controlled  vs Uncontrolled  by react mechanism {depend on state update dom }
  Flow :
        User types in input
        Callback gets invoked
        We call setState with the new value
        Component rerenders
        Input is told what its value is(coming from state)

*/
/*
    this in class  there are at least tow method to resolve 
    1: use bind(this)
    2: use arrow function 
    (One of the special features of arrow function is that they automaically bind the value of this 
        for all the code inside the function  )
*/
class SearchBar extends React.Component {
    state = {term:'car'};

    // onFormSubmit(event){
    //     event.preventDefault();    
    //     console.log(this.state.term);
    // }
//2  <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">

// 3 <form onSubmit={(evnet)=>this.onFormSubmit(event))} className="ui form">
/* 1 So this arrow function make in the body of the arrow function can get the this ,and this refer the 
    SearchBar instance .
*/
        onSubmit= ()=>{
            
        }


    onFormSubmit= (event)=>{
       
        event.preventDefault();

        //this.props.onSubmit.call(this,this.state.term);
        //console.log(this.state.term);

        this.props.onSubmit(this.state.term);
    }

    render(){
        // console.log(this);
        return (
        
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                        type="text"
                         onChange={(e)=>this.setState({term:e.target.value})}
                         value={this.state.term}
                         />
                   
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;
import React from 'react'
import './card.style.css';
import {SimpleModal} from '../image/modal.component';
  // <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=60x80`}/>
export class Card extends React.Component{
    state={dialog:false};

    render(){
        return  (
            <div className="card-container" onClick={()=> this.setState({dialog:true}) }>
            {this.state.dialog && <SimpleModal term={this.props.monster.name}/>}
            <h1 className="card-item">{this.props.monster.name}</h1>
        </div>
        );  
    }
} 
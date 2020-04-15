import React from 'react';
import './card-list.style.css'
import {Card} from '../card/card.component';

export const CardList= props=>
{
    //console.log('props',props);

    return (
        <div className="card-list">{
            props.monsters.map(item=><Card key={item.id} monster={item}/>)}
        </div>
    )

}
   
    


export default CardList;
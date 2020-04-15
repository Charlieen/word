import React from 'react';
import './search.css';

/**
 * 
 * @param {*} props 
 * About State ,if we wanted to see or do something with our state right after we set it then we have to 
 * do it inside of this second argument function that will get called right after setState OK!
 *  by use  callback function merchenicl to make sure the  asthtcle  called 
 */
export const  SearchField =(props)=> {
    return (
        <div className="container">
        <h1>Daniel 1000 Basic English Word WorkShop</h1>
        <span className="label">Search your word:  </span>
            <input
             className="search" 
            placeholder='enter the word' 
            onChange={(e)=> props.search(e.target.value)} />
        </div>
    )
}
